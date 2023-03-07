
const buttonEditProfile = document.querySelector('.profile__edit-button_type_about');
const formEditProfile = document.querySelector('.form_type_edit'); // форма профайла
const formAddCard = document.querySelector('.form_type_add');// форма добавления карточек
const nameInput = document.querySelector('.form__input_information_name');
const jobInput = document.querySelector('.form__input_information_job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const placesAddCard = document.querySelector('.places'); // секция карточек
const templateCard = document.querySelector('#card').content;
const popupImageBig = document.querySelector('.popup-image');   //  картинкa big
const popupEditProfile = document.querySelector('.popup-edit');   // профиль редактирования
const popupAddCard = document.querySelector('.popup-add');  // добавления User
const buttonsClosePopup = document.querySelectorAll('.popup__close');
const buttonAddCard = document.querySelector('.profile__add-button_type_add');
const titleImageInputUser = document.querySelector('.form__input_information_image');
const linkImageInputUser = document.querySelector('.form__input_information_link');
const picturePopupImageBig = document.querySelector('.popup__img');
const headingPicturePopup = document.querySelector('.popup__heading');
const popupsAll = document.querySelectorAll('.popup');

buttonsClosePopup.forEach((button) => {
    const popupSelectiveClosing = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popupSelectiveClosing));
});

// const togglePopup = (popup) => {
//     popup.classList.toggle('popup_opened');
// };

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
    enableValidation(object);
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
};

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }

const handleButtonEditProfileClick = () => {
    openPopup(popupEditProfile);
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
};

function handleEditProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    closePopup(popupEditProfile);
};

const createCard = (item) => {
    const card = templateCard.querySelector('.place').cloneNode(true);
    const cardImage = card.querySelector('.place__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    const cardTitle = card.querySelector('.place__title');
    cardTitle.textContent = item.name;
    card.querySelector('.place__like').addEventListener('click', function (event) {
        event.target.classList.toggle('place__like_active');
    });
    card.querySelector('.place__urn').addEventListener('click', function () {
        card.remove();
    });
    cardImage.addEventListener('click', function () {
        picturePopupImageBig.src = item.link;
        picturePopupImageBig.alt = item.name;
        headingPicturePopup.textContent = item.name;
        openPopup(popupImageBig);
    });
    return card;
};

const renderInitialCard = (cardList, item) => {
    cardList.prepend(createCard(item));
};

initialCards.forEach((item) => {
    renderInitialCard(placesAddCard, item);
});

buttonAddCard.addEventListener('click', () => {
    openPopup(popupAddCard);
});

formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardUser = {
        link: linkImageInputUser.value,
        name: titleImageInputUser.value
    };
    renderInitialCard(placesAddCard, cardUser);
    // linkImageInputUser.value = '';
    // titleImageInputUser.value = '';
    formAddCard.reset();
    closePopup(popupAddCard);
});

popupsAll.forEach((overlayPopup) => {
    overlayPopup.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            closePopup(overlayPopup);
        }
    });
});




buttonEditProfile.addEventListener('click', handleButtonEditProfileClick);
formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);


























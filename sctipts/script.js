
const buttonEditProfile = document.querySelector('.profile__edit-button_type_about');
const popupsAll = document.querySelectorAll('.popup');
const formEditProfile = document.querySelector('.popup__form_type_edit'); // форма профайла
const formAddCard = document.querySelector('.popup__form_type_add');// форма добавления карточек
const nameInput = document.querySelector('.popup__input_information_name');
const jobInput = document.querySelector('.popup__input_information_job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const placesAddCard = document.querySelector('.places'); // секция карточек
const templateCard = document.querySelector('#card').content;
const popupImageBig = document.querySelector('.popup-image');   //  картинкa big
const popupEditProfile  = document.querySelector('.popup-edit');   // профиль редактирования
const popupAddCard = document.querySelector('.popup-add');  // добавления User
const buttonsCloseProfile = document.querySelectorAll('.popup__close');
const buttonAddCard = document.querySelector('.profile__add-button_type_add');
const titleImageInputUser = document.querySelector('.popup__input_information_image');
const linkImageInputUser = document.querySelector('.popup__input_information_link');
const picturePopupImageBig = document.querySelector('.popup__img');
const HeadingPicturePopup = document.querySelector('.popup__heading');

buttonsCloseProfile.forEach((button) => {
    const popupSelectiveClosing = button.closest('.popup');
    button.addEventListener('click', () => toggleOpenPopup(popupSelectiveClosing));
});

const toggleOpenPopup = (popup) => {
    popup.classList.toggle('popup_opened');
};

const handleButtonEditProfileClick = () => {
    toggleOpenPopup(popupEditProfile );
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
};

function handleEditProfileFormSubmit(event) {
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    toggleOpenPopup(popupEditProfile );
};

const makeCard = (item) => {
    const card = templateCard.querySelector('.place').cloneNode(true);
    const cardImage = card.querySelector('.place__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    const cardTitle = card.querySelector('.place__title');
    cardTitle.textContent = item.name;
    const likeCard = card.querySelector('.place__like');
    likeCard.addEventListener('click', function (event) {
        event.target.classList.toggle('place__like_active');
    });
    card.querySelector('.place__urn').addEventListener('click', function () {
        card.remove();
    });
    cardImage.addEventListener('click', function () {
        picturePopupImageBig.src = item.link;
        picturePopupImageBig.alt = item.name;
        HeadingPicturePopup.textContent = item.name;
        toggleOpenPopup(popupImageBig);
    });
    return card;
};

const renderInitialCard = (x, item) => {
    x.prepend(makeCard(item));
};

initialCards.forEach((item) => {
    renderInitialCard(placesAddCard, item);
});

buttonAddCard.addEventListener('click', () => {
    toggleOpenPopup(popupAddCard);
});

formAddCard.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const cardUser = {
        link: linkImageInputUser.value,
        name: titleImageInputUser.value
    };
    renderInitialCard(placesAddCard, cardUser);
    linkImageInputUser.value = '';
    titleImageInputUser.value = '';
    toggleOpenPopup(popupAddCard);
});

popupsAll.forEach((overly) => {
    overly.addEventListener('click', (event) => {
        if (event.target === event.currentTarget) {
            toggleOpenPopup(overly);
        }
    });
});

buttonEditProfile.addEventListener('click', handleButtonEditProfileClick);
formEditProfile.addEventListener('submit', handleEditProfileFormSubmit);






















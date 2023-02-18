const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const aboutButton = document.querySelector('.profile__edit-button_type_about');
const popup = document.querySelector('.popup');
const formElementProfile = document.querySelector('.popup__form_type_edit'); // форма профайла
const formElementAdd = document.querySelector('.popup__form_type_add');// форма добавления
const nameInput = document.querySelector('.popup__input_information_name');
const jobInput = document.querySelector('.popup__input_information_job');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const places = document.querySelector('.places'); // секция карточек
const formElementplace = document.querySelector('.popup__form-place');
const template = document.querySelector('#card').content;
const popupImagebig = document.querySelector('.popup-image');   //  картинки
const popupEdit = document.querySelector('.popup-edit');   // профиля
const popupAdd = document.querySelector('.popup-add');  // добавления
const closeButton = document.querySelectorAll('.popup__close');
const buttonAdd = document.querySelector('.profile__add-button_type_add');
const titleImg = document.querySelector('.popup__input_information_image');
const linkImg = document.querySelector('.popup__input_information_link');

closeButton.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => toggleOpenPopup(popup));
});

const toggleOpenPopup = (popup) => {
    popup.classList.toggle('popup_opened');
};

const handleAboutButtonClick = () => {
    toggleOpenPopup(popupEdit);
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
};


const handleOverlyClick = (event) => {
    if (event.target === event.currentTarget) {
        toggleOpenPopup(popup);
    }
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    toggleOpenPopup(popupEdit);
};

aboutButton.addEventListener('click', handleAboutButtonClick);
popup.addEventListener('click', handleOverlyClick);
formElementProfile.addEventListener('submit', handleFormSubmit);

const makeCard = (item) => {
    const card = template.querySelector('.place').cloneNode(true);
    const cardImage = card.querySelector('.place__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    const cardTitle = card.querySelector('.place__title');
    cardTitle.textContent = item.name;
    const like = card.querySelector('.place__like');
    like.addEventListener('click', function (event) {
        event.target.classList.toggle('place__like_active');
    });
    card.querySelector('.place__urn').addEventListener('click', function () {
       card.remove();
    });
    cardImage.addEventListener('click', function() {
        const popupImg =  document.querySelector('.popup__img');
        const popupHeading = document.querySelector('.popup__heading');
        popupImg.src = item.link;
        popupImg.alt = item.name;
        popupHeading.textContent = item.name;
        toggleOpenPopup(popupImagebig);
    });
    return card;
};

const renderCard = (x, item) => {
    x.prepend(makeCard(item));
};

initialCards.forEach((item) => {
    renderCard(places, item);
});

buttonAdd.addEventListener('click', () => {
    toggleOpenPopup(popupAdd);
});






















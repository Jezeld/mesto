const aboutButton = document.querySelector('.profile__edit-button_type_about');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input-name');
let jobInput = formElement.querySelector('.popup__input-job');

let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');


const toggleOpenPopup = () => {
    popup.classList.toggle('popup__opened');
};

const handleAboutButtonClick = () => {
    toggleOpenPopup();
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
};

const handleCloseButtonClick = () => {
    toggleOpenPopup();
};

const handleOverlyClick = (event) => {
    if (event.target === event.currentTarget) {
        toggleOpenPopup();
    }
};

aboutButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popup.addEventListener('click', handleOverlyClick);

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    toggleOpenPopup();
}

formElement.addEventListener('submit', handleFormSubmit);

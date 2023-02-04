const aboutButton = document.querySelector('.profile__edit-button_type_about');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_information_name');
let jobInput = formElement.querySelector('.popup__input_information_job');
let profileName = document.querySelector('.profile__name');
let profileAbout = document.querySelector('.profile__about');


const toggleOpenPopup = () => {
    popup.classList.toggle('popup_opened');
};

const handleAboutButtonClick = () => {
    toggleOpenPopup();
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
};

// const handleCloseButtonClick = () => {
//     toggleOpenPopup();
// };

const handleOverlyClick = (event) => {
    if (event.target === event.currentTarget) {
        toggleOpenPopup();
    }
};

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = jobInput.value;
    toggleOpenPopup();
}

aboutButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', toggleOpenPopup);
popup.addEventListener('click', handleOverlyClick);
formElement.addEventListener('submit', handleFormSubmit);

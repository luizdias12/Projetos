const darkModeClass = 'dark-mode';
const button = $('#mode-selector');
const h1 = $('#page-title');
const body = $('#body');
const footer = $('#footer');

button.click(() => changeMode());

changeMode = () => {
    changeClasses();
    changeText();
}

changeClasses = () => {
    button.toggleClass(darkModeClass);
    h1.toggleClass(darkModeClass);
    body.toggleClass(darkModeClass);
    footer.toggleClass(darkModeClass);
}

 changeText = () => {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(body.hasClass(darkModeClass)) {
        button.html(lightMode);
        h1.html(darkMode + ' ON');
        return;
    }

    button.html(darkMode);
        h1.html(lightMode + ' ON');
}

import './style.css';

const contentDiv = document.getElementById('content');

//constructor function that builds an HTML element to be appended to something with some text content 
function elementCreation(el, className, idName, content) {
    this.el = el;
    this.className = className;
    this.idName = idName;
    this.content = content;

    const createEl = document.createElement(`${el}`);
    createEl.textContent = content;
    createEl.classList.add(`${className}`);
    createEl.setAttribute("id", idName);

    return createEl;

}

//generates a section container 
const sectionElement = (() => {
    const element = document.createElement('section');
    contentDiv.appendChild(element);

    return element
})();

//this generates a nav menu
const navMenu = (() => {
    const navTag = document.createElement('nav');
    navTag.textContent = "This is a nav bar";
    navTag.classList.add('header-nav-container');
    sectionElement.appendChild(navTag);

    navTag.appendChild(new elementCreation("ul", "nav-menu-container", "navMenuContainer", "This is an unordered list"));
    const ulListener = document.getElementById('navMenuContainer');

    ulListener.appendChild(new elementCreation('li', "list-item", "listItem", "Home"));
    ulListener.appendChild(new elementCreation('li', "list-item", "listItem", "Menu"));
    ulListener.appendChild(new elementCreation('li', "list-item", "listItem", "About"));
    ulListener.appendChild(new elementCreation('li', "list-item", "listItem", "Contact"));

    return { navTag }
})();

//Generates a main content div
const mainContentContainer = (() => {
    const mainContentDiv = document.createElement('div');
    mainContentDiv.textContent = "This is the main Content Div";
    mainContentDiv.classList.add('main-content-container');
    sectionElement.appendChild(mainContentDiv);


    mainContentDiv.appendChild(new elementCreation("div", "main-content-flex-container", "mainContentFlexContainer", "This is a flex item/container"));
    const flexContainerListener = document.getElementById("mainContentFlexContainer");
    flexContainerListener.appendChild(new elementCreation("div", "main-content-flex-item", "mainContentFlexItem", "This is the first flex item"));
    flexContainerListener.appendChild(new elementCreation("div", "main-content-flex-item", "mainContentFlexItem", "This is the second flex item"));

    return { mainContentDiv }
})();

//Generates a footer menu
const footerMenu = (() => {
    const footerTag = document.createElement('footer');
    footerTag.textContent = "This is a footer section";
    footerTag.classList.add('footer-container');
    sectionElement.appendChild(footerTag);

    return
    
})();

//generates a container div
const containerDiv = (() => {
    const element = document.createElement('div');
    element.textContent = "This is a normal Container Div";
    element.classList.add('container');

    return element
})();
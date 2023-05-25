import './style.css';

const contentDiv = document.getElementById('content');

//constructor function that builds an HTML element to be appended to something with some text content 
function elementCreation(el, className, idName, content) {
    this.el = el;
    this.className = className;
    this.idName = idName;
    this.content = content;

    const imageReg = /[\/.](gif|jpg|jpeg|tiff|png)$/i;

    const createEl = document.createElement(`${el}`);
    createEl.textContent = content;
    createEl.classList.add(`${className}`);
    createEl.setAttribute("id", idName);

    if (content.match(imageReg)) {
        createEl.src = content;
        createEl.alt = "This is an icon or image";
    }

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
    navTag.classList.add('header-nav-container');
    sectionElement.appendChild(navTag);

    navTag.appendChild(new elementCreation("ul", "nav-menu-container", "navMenuContainer", ""));
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
    mainContentDiv.classList.add('main-content-container');
    sectionElement.appendChild(mainContentDiv);


    mainContentDiv.appendChild(new elementCreation("div", "main-content-flex-container", "mainContentFlexContainer", ""));
    const flexContainerListener = document.getElementById("mainContentFlexContainer");
    flexContainerListener.appendChild(new elementCreation("div", "main-content-flex-item", "mainContentFlexItem", "This is the first flex item"));
    flexContainerListener.appendChild(new elementCreation("div", "main-content-flex-item", "mainContentFlexItem", "This is the second flex item"));

    return { mainContentDiv }
})();

//Generates a footer menu
const footerMenu = (() => {
    const footerTag = document.createElement('footer');
    footerTag.classList.add('footer-container');
    sectionElement.appendChild(footerTag);

    footerTag.appendChild(new elementCreation("img", "footer-icon", "footerIcon", "./media/github-mark.png"));
    footerTag.appendChild(new elementCreation("div", "footer-icon", "footerIcon", "Twitter icon"));
    footerTag.appendChild(new elementCreation("div", "footer-icon", "footerIcon", "Main rune page icon"));

    return
    
})();
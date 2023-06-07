import './style.css';
import gitHubIcon from './media/github-mark.png';
import twitterIcon from './media/twitter-logo-blue.png';
import wizardIcon from './media/wizard-icon.png';

const contentDiv = document.getElementById('content');

//constructor function that builds an HTML element to be appended to something with some text content 
function elementCreation(el, className, idName, content) {
    this.el = el;
    this.className = className;
    this.idName = idName;
    this.content = content;


    const createEl = document.createElement(`${el}`);
    createEl.classList.add(`${className}`);
    createEl.setAttribute("id", idName);
    

    if (content.match('home')) {
        createEl.href = "#";
        return createEl
    } else if (content.match('menu')) {
        createEl.href = "#";
        return createEl
    } else if (content.match('about')) {
        createEl.href = "#";
        return createEl
    } else if (content.match('contact')) {
        createEl.href = "#";
        return createEl
    }

    if (content.match('gitHubIcon')) {
        createEl.src = gitHubIcon;
        createEl.alt = "This is the Github logo.";
        if(el.match('a')) {
            createEl.href = 'https://github.com/dxd8201';
        }
    } else if (content.match('twitterIcon')) {
        createEl.src = twitterIcon;
        createEl.alt = "This is the twitter logo";
        if(el.match('a')) {
            createEl.href = 'https://twitter.com/angusofmu';
        }
    } else if (content.match('wizardIcon')) {
        createEl.src = wizardIcon;
        createEl.alt = "This is the FRWC icon.";
        if(el.match('a')) {
            createEl.href = 'https://www.forgottenrunes.com/';
        }
    } else {
        createEl.textContent = content;
    }
    return createEl
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

    const homeAnchor = new elementCreation("a", "anchor-tag", "anchorTag", "home");
    const menuAnchor = new elementCreation("a", "anchor-tag", "anchorTag", "menu");
    const aboutAnchor = new elementCreation("a", "anchor-tag", "anchorTag", "about");
    const contactAnchor = new elementCreation("a", "anchor-tag", "anchorTag", "contact");

    ulListener.appendChild(homeAnchor);
    ulListener.appendChild(menuAnchor);
    ulListener.appendChild(aboutAnchor);
    ulListener.appendChild(contactAnchor);

    homeAnchor.appendChild(new elementCreation('li', "list-item", "listItem", "Home"));
    menuAnchor.appendChild(new elementCreation('li', "list-item", "listItem", "Menu"));
    aboutAnchor.appendChild(new elementCreation('li', "list-item", "listItem", "About"));
    contactAnchor.appendChild(new elementCreation('li', "list-item", "listItem", "Contact"));

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

    const anchorOne = new elementCreation("a", "anchor-tag", "anchorTag", "gitHubIcon");
    footerTag.appendChild(anchorOne);
    anchorOne.appendChild(new elementCreation("img", "footer-icon", "footerIcon", "gitHubIcon"))
    const anchorTwo = new elementCreation("a", "anchor-tag", "anchorTag", "twitterIcon");
    footerTag.appendChild(anchorTwo);
    anchorTwo.appendChild(new elementCreation("img", "footer-icon", "footerIcon", "twitterIcon"))
    const anchorThree = new elementCreation("a", "anchor-tag", "anchorTag", "wizardIcon");
    footerTag.appendChild(anchorThree);
    anchorThree.appendChild(new elementCreation("img", "footer-icon", "footerIcon", "wizardIcon"))

    return
    
})();
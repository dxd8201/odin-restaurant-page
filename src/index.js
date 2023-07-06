import './style.css';
import elementCreation from './modules/function.js';
import loadHome from './modules/home.js';
import loadAbout from './modules/about';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';


const contentDiv = document.getElementById('content');

export default function printMe2() {
    console.log('I get called from index.js!');
  }

//generates a section container 
const sectionElement = (() => {
    const element = document.createElement('section');
    element.setAttribute('id', 'section');
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

    return { navTag, homeAnchor, menuAnchor, aboutAnchor, contactAnchor }
})();

//Generates a main content div
const mainContentContainer = (() => {
    
    navMenu.homeAnchor.addEventListener("click", function() {
        deRender();
        loadHome();
    });

    navMenu.menuAnchor.addEventListener("click", function() {
        deRender();
        loadMenu();
    });

    navMenu.aboutAnchor.addEventListener("click", function() {
        deRender();
        loadAbout();
    });
    navMenu.contactAnchor.addEventListener("click", function() {
        deRender();
        loadContact();
    });

    loadContact();

    let mainContentDiv = document.getElementById("mainContentFlexContainer");
    console.log(mainContentDiv);

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

//deletes all elements from the main content container
const deRender = function () {
    const e = mainContentContainer.mainContentDiv;
    console.log(e);
    
    for (const element of e.getElementsByTagName('*')) {
      element.remove();
    }
    console.log("deRender ran")
}

// deRender();

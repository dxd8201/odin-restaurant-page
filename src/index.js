import './style.css';

const contentDiv = document.getElementById('content');

console.log("Hi I'm Tom.");

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

    const ul = document.createElement('ul');
    ul.textContent = "This is an unordered List";
    ul.classList.add('nav-menu-container');
    navTag.appendChild(ul);

    for (let i=0; i<4; i++) {
        const li = document.createElement('li');
        li.textContent = "This is a list Item";
        li.classList.add('list-item');
        ul.appendChild(li);
    }

    return { navTag, ul }
})();

//Generates a main content div
const mainContentContainer = (() => {
    const mainContentDiv = document.createElement('div');
    mainContentDiv.textContent = "This is the main Content Div";
    mainContentDiv.classList.add('main-content-container');
    sectionElement.appendChild(mainContentDiv);

    for (let i=0; i<2; i++) {
        const divEl = document.createElement('div');
        divEl.textContent = "This is a flex item/container";
        divEl.classList.add('main-content-flex-container');
        mainContentDiv.appendChild(divEl);
    }

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
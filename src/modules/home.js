//set up module to generate home page upon page load and home button click

import elementCreation from './function.js';

export default function loadHome() {
    const index = document.getElementById('section');

    //This code needs to run in each module
    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content-container');
    mainContentDiv.setAttribute("id", "mainContentContainer");
    index.appendChild(mainContentDiv);
    
    mainContentDiv.appendChild(new elementCreation("div", "main-content-flex-container", "mainContentFlexContainer", ""));
    const flexContainerListener = document.getElementById("mainContentFlexContainer");
    flexContainerListener.appendChild(new elementCreation("p", "main-content-flex-item", "mainContentFlexItem", "WizzyFoo is your one-stop shoppe for magical dishes and arcane beverages. We feature a range of delectable items on our menu that are certified !magic. If you're looking to bring magic to your tastebuds, this is the place to be. Just don't forget to put your rune on the door on your way out."));
    flexContainerListener.appendChild(new elementCreation("img", "main-content-flex-item", "mainContentFlexItem", "feast"));

    console.log("Load home has ran");
    return { mainContentDiv }
}
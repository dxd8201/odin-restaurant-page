import elementCreation from './function.js';

export default function loadMenu() {
    const index = document.getElementById('section');

    //This code needs to run in each module
    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content-container');
    index.appendChild(mainContentDiv);

    mainContentDiv.appendChild(new elementCreation("div", "main-content-menu-flex-container", "mainContentMenuFlexContainer", ""));
    const flexContainerListener = document.getElementById("mainContentMenuFlexContainer");
    
    
    flexContainerListener.appendChild(new elementCreation("div", "menu-card", "menuCard1", ""));
    const menu1 = document.getElementById("menuCard1");
    menu1.appendChild(new elementCreation("div", "menu-card-title", "menuCardTitle", "Wizard Mind Bomb"));
    menu1.appendChild(new elementCreation("div", "menu-card-description", "menuCardDescription", "Our wizard mind bomb is made from the finest ale of Gielinor"));



    flexContainerListener.appendChild(new elementCreation("div", "menu-card", "menuCard2", ""));
    const menu2 = document.getElementById("menuCard2");
    menu2.appendChild(new elementCreation("div", "menu-card-title", "menuCardTitle", "Wizard Mind Bomb"));
    menu2.appendChild(new elementCreation("div", "menu-card-description", "menuCardDescription", "Our wizard mind bomb is made from the finest ale of Gielinor"));


    flexContainerListener.appendChild(new elementCreation("div", "menu-card", "menuCard3", ""));
    const menu3 = document.getElementById("menuCard3");
    menu3.appendChild(new elementCreation("div", "menu-card-title", "menuCardTitle", "Wizard Mind Bomb"));
    menu3.appendChild(new elementCreation("div", "menu-card-description", "menuCardDescription", "Our wizard mind bomb is made from the finest ale of Gielinor"));


    flexContainerListener.appendChild(new elementCreation("div", "menu-card", "menuCard4", ""));
    const menu4 = document.getElementById("menuCard4");
    menu4.appendChild(new elementCreation("div", "menu-card-title", "menuCardTitle", "Wizard Mind Bomb"));
    menu4.appendChild(new elementCreation("div", "menu-card-description", "menuCardDescription", "Our wizard mind bomb is made from the finest ale of Gielinor"));


    flexContainerListener.appendChild(new elementCreation("div", "menu-card", "menuCard5", ""));
    const menu5 = document.getElementById("menuCard5");
    menu5.appendChild(new elementCreation("div", "menu-card-title", "menuCardTitle", "Wizard Mind Bomb"));
    menu5.appendChild(new elementCreation("div", "menu-card-description", "menuCardDescription", "Our wizard mind bomb is made from the finest ale of Gielinor"));


    flexContainerListener.appendChild(new elementCreation("div", "menu-card", "menuCard6", ""));
    const menu6 = document.getElementById("menuCard6");
    menu6.appendChild(new elementCreation("div", "menu-card-title", "menuCardTitle", "Wizard Mind Bomb"));
    menu6.appendChild(new elementCreation("div", "menu-card-description", "menuCardDescription", "Our wizard mind bomb is made from the finest ale of Gielinor"));

    
    console.log("The Menu loaded.");
}
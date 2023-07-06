import elementCreation from './function.js';

export default function loadContact() {
    const index = document.getElementById('section');

    //This code needs to run in each module
    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content-container');
    index.appendChild(mainContentDiv);

    mainContentDiv.appendChild(new elementCreation("div", "main-content-flex-container", "mainContentFlexContainer", ""));
    const flexContainerListener = document.getElementById("mainContentFlexContainer");
    flexContainerListener.appendChild(new elementCreation("p", "main-content-flex-item", "mainContentFlexItem", "Feel free to reach out at **********"));
    flexContainerListener.appendChild(new elementCreation("img", "main-content-flex-item", "mainContentFlexItem", "founder"));



    console.log("Load contact has ran.");
    return { mainContentDiv }
}
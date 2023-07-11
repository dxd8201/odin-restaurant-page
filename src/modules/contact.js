import elementCreation from './function.js';

export default function loadContact() {
    const mainContentDiv = document.getElementById("mainContentContainer");
    console.log(mainContentDiv);

    mainContentDiv.appendChild(new elementCreation("div", "main-content-flex-container", "mainContentFlexContainer", ""));
    const flexContainerListener = document.getElementById("mainContentFlexContainer");
    flexContainerListener.appendChild(new elementCreation("p", "main-content-flex-item", "mainContentFlexItem", "Feel free to reach out at **********"));
    flexContainerListener.appendChild(new elementCreation("img", "main-content-flex-item", "mainContentFlexItem", "founder"));



    console.log("Load contact has ran.");
    return { mainContentDiv }
}
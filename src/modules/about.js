import elementCreation from './function.js';

export default function loadAbout() {
    const index = document.getElementById('section');

    //This code needs to run in each module
    const mainContentDiv = document.createElement('div');
    mainContentDiv.classList.add('main-content-container');
    index.appendChild(mainContentDiv);

    mainContentDiv.appendChild(new elementCreation("div", "main-content-flex-container", "mainContentFlexContainer", ""));
    const flexContainerListener = document.getElementById("mainContentFlexContainer");
    flexContainerListener.appendChild(new elementCreation("p", "main-content-flex-item", "mainContentFlexItem", "Welcome to the most magical restaurant you'll bear witness to. Forged from the deep minds of our wise arcane mages, our restaurant seeks to douse your tastebuds in the arcane. Bearing dishes inspired by more mystical times, our restaurant was born from our desire to bring back the circle of magic that has been lost through the years."));
    flexContainerListener.appendChild(new elementCreation("img", "main-content-flex-item", "mainContentFlexItem", "founder"));



    console.log("Load about has ran");
    return { mainContentDiv }
}
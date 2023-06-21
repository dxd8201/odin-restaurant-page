import gitHubIcon from './media/github-mark.png';
import twitterIcon from './media/twitter-logo-blue.png';
import wizardIcon from './media/wizard-icon.png';
import founder from './media/2241-battle-mage-angus-of-mu-nobg.png'
import feast from './media/medieval-feast.jpg';

export default function elementCreation(el, className, idName, content) {
    this.el = el;
    this.className = className;
    this.idName = idName;
    this.content = content;

    const createEl = document.createElement(`${el}`);
    createEl.classList.add(`${className}`);
    createEl.setAttribute("id", idName);
    
    if (content === 'home') {
        createEl.href = "#";
        return createEl
    } else if (content === 'menu') {
        createEl.href = "#";
        return createEl
    } else if (content === 'about') {
        createEl.href = "#";
        return createEl
    } else if (content === 'contact') {
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
    } else if (content === 'feast') {
        createEl.src = feast;
        createEl.alt = "This is a picture of our monthly feast.";
    } else if (content === 'founder') {
        createEl.src = founder;
        createEl.alt = "This is a picture of our founder.";
    } else {
        createEl.textContent = content;
    }

    console.log("The create function ran");
    return createEl
}
import './style.css';

console.log("Hi I'm Tom.");

const containerDiv = (() => {
    const element = document.createElement('div');
    element.innerHTML = "Hi dad";

    document.body.appendChild(element);
    return
})();

console.log(containerDiv)
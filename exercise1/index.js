const h1 = document.querySelector('h1');
const paragraph = document.querySelector('p');
const anchor = document.querySelector('a');

let newElement;

for (let index = 1; index < 3; index++) {
    newElement = document.createElement('span');
    newElement.textContent = index;
    h1.appendChild(newElement);
    
}

for (let index = 1; index < 5; index++) {
    newElement = document.createElement('span');
    newElement.textContent = index;
    paragraph.insertAdjacentElement('afterbegin', newElement);
    
}

for (let index = 1; index < 8; index++) {
    newElement = document.createElement('span');
    newElement.textContent = index;
    anchor.textContent = index;
}
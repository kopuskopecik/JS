const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const main = document.querySelector('main');
const paragraph = document.querySelector('p');

const callEvents = ()=>{
    main.addEventListener('input', changeBackgroundColor)
}

const changeBackgroundColor = (event)=>{
    const redValue = Number(red.value);
    const greenValue = Number(green.value);
    const blueValue = Number(blue.value);
    const hexValue = "#"+(redValue).toString(16)+(greenValue).toString(16)+(blueValue).toString(16);
    main.style.backgroundColor = hexValue
    paragraph.textContent = `Red: ${redValue}, Green:${greenValue} and Blue: ${blueValue}`
}

callEvents()


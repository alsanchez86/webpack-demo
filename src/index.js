import _ from 'lodash';
import './style.css';
import image from './image.png';
import data from './data.xml';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    const myImage = new Image();
    // Add custom text
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Button
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);
    // Add the image to our existing div.
    myImage.src = image;
    element.appendChild(myImage);

    return element;
}

document.body.appendChild(component());
console.log(data);
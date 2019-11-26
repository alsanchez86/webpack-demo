import _ from 'lodash';
import './style.css';
import image from './image.png';

function component() {
    const element = document.createElement('div');
    const myImage = new Image();
    // Feed element
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    // Add the image to our existing div.
    myImage.src = image;
    element.appendChild(myImage);
    return element;
}

document.body.appendChild(component());
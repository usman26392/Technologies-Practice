
// this file for project entry point.

import _ from 'lodash';
import './style.css';
import Icon from './apple.svg';
import printMe from './print.js';


function component() {
    const element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    // create btn
    const btn = document.createElement('button');
    btn.innerHTML = 'click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;

  }
  
  document.body.appendChild(component());

  console.log("wow webpack!");



  let btn = document.querySelector("button")
  btn.addEventListener('click', function() {
    alert('btn clicked');
  });

  console.log("check");

  
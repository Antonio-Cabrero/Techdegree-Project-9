// Nav Buttons


const home = document.querySelector('#home'),
      skillSec = document.querySelector('#skills'),
      projectsSec = document.querySelector('#projects'),
      aboutSec = document.querySelector('#about'),
      contactSec = document.querySelector('#contact'),
      contactImg = document.querySelector('#contactPic'),
      projects = document.querySelector('#projects'),
      sliders = document.querySelectorAll('.sliders')
      useInfo = document.querySelectorAll('.uses');

let   title = document.querySelector('.get');

home.addEventListener('click', (e)=> {
    let element = e.target;
    

    if (element.innerText === 'SKILLS'){
        fadeInOutText(title); 
        sectionSwitch(".skills()", projectsSec, aboutSec, contactSec)
        setTimeout(revertText, 1250);
    } else if (element.innerText === 'PROJECTS') {
        fadeInOutText(title);
        sectionSwitch(".projects()", skillSec, aboutSec, contactSec)
        setTimeout(revertText, 1250);
    } else if (element.innerText === 'ABOUT') {
        fadeInOutText(title);
        sectionSwitch(".info()", projectsSec, skillSec, contactSec)
        setTimeout(revertText, 1250);
    } else if (element.innerText === 'CONTACT') {
        fadeInOutText(title);
        sectionSwitch(".contact()", projectsSec, skillSec, aboutSec)
        setTimeout(revertText, 1250);
    }
})

const slider = document.querySelectorAll('.sliders'),
        card = document.querySelector('.card');

projects.addEventListener('click', (e)=> {
    
    for (let i=0; i<useInfo.length; i++)
    if (e.target === useInfo[i]) { 
        slider[i].style.height = '100%';
        slider[i].firstElementChild.style.display = 'block';
        } else if (e.target === slider[i]) {
        slider[i].style.height = 0;
        slider[i].firstElementChild.style.display = 'none';

      
        }
})

contactSec.addEventListener('click', (e)=> {

    let contactText = document.querySelector('legend');
    let element = e.target;
    if (element.innerText === 'Email Me!'){
        surprise(contactImg);
        surprise(contactText);
        contactImg.src = "graphics/images/bitmoji-20190727050424.png";
        contactText.innerText = "Woohoo! Thanks for contacting me! I'll get back to you shortly!";
        element.style.display = "none";
    } 

})

// Functions

function getChangeText(string) {
    title.innerText = string;
    title.classList = " text-muted";
}

function removeClass(classToRemove, element){
    element.classList.remove(classToRemove)
}

function sectionSwitch(stringChange,sec1,sec2,sec3){
    getChangeText(stringChange);
    removeClass('show',sec1);
    removeClass('show',sec2);
    removeClass('show',sec3);
}

function revertText() {
    title.innerText = "Cabrero";
    removeClass("text-muted",title);
}

function fadeInOutText (element) {
    element.animate([
        {opacity: 0},
        {opacity: 1},
        {opacity: 0},
        {opacity: 1}],
        {duration: 2000,
        iterations: 1}
    ) 
}

function surprise (element) {
    element.animate([
        {opacity: 0},
        {opacity: 1}
        ],
        {duration: 1000,
        iterations: 1}
    ) 
}


// Nav Buttons


const home = document.getElementById('home'),
      skillSec = document.getElementById('skills'),
      projectsSec = document.getElementById('projects'),
      aboutSec = document.getElementById('about');
let   title = document.querySelector('.get');

home.addEventListener('click', (e)=> {
    let element = e.target;
    

    if (element.innerText === 'Skills'){

        sectionFade(skillSec);
        sectionFade(skillSec);
        // sectionSwitch(".getSkills()", projectsSec, aboutSec)
        setTimeout(revertText, 1250);

    } else if (element.innerText === 'Projects') {
        fadeInOutText(title);
        // sectionSwitch(".getProjects()", skillSec, aboutSec)
        setTimeout(revertText, 1250);

    } else if (element.innerText === 'About me') {
        fadeInOutText(title);
        // sectionSwitch(".getInfo()", projectsSec, skillSec)
        setTimeout(revertText, 1250);

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

function sectionSwitch(stringChange,sec1,sec2){
    getChangeText(stringChange);
    removeClass('show',sec1);
    removeClass('show',sec2);
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

function sectionFade(section){
    if (section.style.display === "none"){
        section.style.display === "block"
        section.style.opacity === "1"
    }
}


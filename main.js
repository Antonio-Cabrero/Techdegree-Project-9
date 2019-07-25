// Nav Buttons

const home = document.getElementById('home'),
      skillSec = document.getElementById('skills'),
      projectsSec = document.getElementById('projects'),
      aboutSec = document.getElementById('about');

home.addEventListener('click', (e)=> {
    let element = e.target;

    if (element.innerText === 'Skills'){
        projectsSec.classList.remove('show');
        aboutSec.classList.remove('show');

    } else if (element.innerText === 'Projects') {
        skillSec.classList.remove('show');
        aboutSec.classList.remove('show');

    } else if (element.innerText === 'About me') {
        projectsSec.classList.remove('show');
        skillSec.classList.remove('show');

    }
})

// Functions


// Skills Section

const progCanvas = document.getElementById("skill-canvas");

let programmingChart = new Chart(progCanvas, {
    type: 'polarArea',
    data: {
        labels: ["JavaScript", "Sass", "Bootstrap","React", "CSS"],
        datasets: [{
            data: [60, 50, 70, 20, 80, 100],
            borderWidth: 0,
            boderAlign: 'inner',
            backgroundColor: [
                '#ecd625d9',
                '#bf4080d9',
                '#563d7cd9',
                '#61dafbd9',
                '#254BDFd9',
                '#dbdbdb45'
            ]
        }]
    },
    options: {
        legend: {
         position: 'right',
         labels: {
            boxWidth: 20,
            fontStyle: 'bold'
            }
        }
    }
});

const softCanvas = document.getElementById("soft-canvas");

let softChart = new Chart(softCanvas, {
    type: 'radar',
    data: {
        labels: ["Communication", "Teamwork", "Teachable","Creativity", "Public Speaking"],
        datasets: [{
            label: 'Development %',
            data: [86, 85, 90, 95, 80],
            borderWidth: 2,
            borderColor: '#61dafb',
            boderAlign: 'inner',
            backgroundColor: '#61dafb55',
            pointBorderColor: '#61dafb'
        }]
    },
    options: {
        legend: {
         position: 'right',
         labels: {
            boxWidth: 20,
            fontStyle: 'bold'
            }
        }
    }
});
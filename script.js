particlesJS("particles", {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "polygon",
            stroke: {
                width: 0,
                color: "#000000"
            }
        },
        opacity: {
            value: 0.8,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
        }
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onHover: {
                enable: true,
                mode: "push"
            },
            onClick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
    });
}

window.addEventListener('scroll', function () {
    let scrollTopButton = document.querySelector('.scroll-top');
    if (this.window.pageYOffset > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

// About Modal

let modalRoot = document.getElementById('modal-root');
let modalButton = document.getElementById('contactButton');
let modalContact = document.getElementById('contactModal');

modalRoot.addEventListener('click', closeModal);
modalButton.addEventListener('click', displayModal);
modalContact.addEventListener('click', modalClick)

function displayModal(){
    modalRoot.classList.add('visible');
    // modalRoot.style.display = 'block';
}

function closeModal(){
    modalRoot.classList.remove('visible');
    // modalRoot.style.display = 'none';
}

function modalClick(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
}

// Resume Modal
let resumeModalRoot = document.getElementById('resumeModal-root');
let resumeModalButton = document.getElementById('resumeButton');
let modalResume = document.getElementById('resumeModal');

resumeModalRoot.addEventListener('click', closeResumeModal);
resumeModalButton.addEventListener('click', displayResumeModal);
modalResume.addEventListener('click', ResumeModalClick)


function displayResumeModal(){
    resumeModalRoot.classList.add('visible');

    // Set the iframe source to load the PDF (replace 'assets/Aditya_Kunatharaju_Resume.pdf' with your actual PDF path)
    let pdfIframe = document.getElementById('pdfIframe');
    pdfIframe.src = 'assets/Aditya_Kunatharaju_Resume.pdf';
}

function closeResumeModal(){
    resumeModalRoot.classList.remove('visible');

    // Reload the iframe to reset the PDF position
    let pdfIframe = document.getElementById('pdfIframe');
    pdfIframe.src = 'about:blank';
}

function ResumeModalClick(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
}

// Federated ML Modal

let mlModalRoot = document.getElementById('MLModal-root');
let mlModalButton = document.getElementById('MLButton');
let mlModal = document.getElementById('MLModal');

mlModalRoot.addEventListener('click', closeMLModal);
mlModalButton.addEventListener('click', displayMLModal);
mlModal.addEventListener('click', MLModalClick)

function displayMLModal(){
    mlModalRoot.classList.add('visible');
}

function closeMLModal(){
    mlModalRoot.classList.remove('visible');
}

function MLModalClick(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
}

// AutoInt Modal
let autoIntModalRoot = document.getElementById('AutoIntModal-root');
let autoIntModalButton = document.getElementById('AutoIntButton');
let autoIntModal = document.getElementById('AutoIntModal');

autoIntModalRoot.addEventListener('click', closeAutoIntModal);
autoIntModalButton.addEventListener('click', displayAutoIntModal);
autoIntModal.addEventListener('click', AutoIntModalClick)

function displayAutoIntModal(){
    autoIntModalRoot.classList.add('visible');
}

function closeAutoIntModal(){
    autoIntModalRoot.classList.remove('visible');
}

function AutoIntModalClick(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
}

// ACID Modal

let acidModalRoot = document.getElementById('acidModal-root');
let acidModalButton = document.getElementById('acidButton');
let acidModal = document.getElementById('acidModal');

acidModalRoot.addEventListener('click', closeACIDModal);
acidModalButton.addEventListener('click', displayACIDModal);
acidModal.addEventListener('click', ACIDModalClick)

function displayACIDModal(){
    acidModalRoot.classList.add('visible');
    // acidModalRoot.style.display = 'block';
    console.log('displaying ACID modal')
}

function closeACIDModal(){
    acidModalRoot.classList.remove('visible');
    // acidModalRoot.style.display = 'none';
    console.log('closing ACID modal')
}

function ACIDModalClick(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    return false;
}







// window.addEventListener('click', function(event){
//     let modal = document.getElementById('contactModal');
//     let contactAnchor = document.getElementById('contactAnchor');
//     if(event.target !== modal && modal.style.display !== 'none'){
//         modal.style.display = 'none';
//     }
// });


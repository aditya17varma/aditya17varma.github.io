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

let modalRoot = document.getElementById('modal-root');
let modalButton = document.getElementById('contactButton');
let modalContact = document.getElementById('contactModal');

modalRoot.addEventListener('click', closeModal);
modalButton.addEventListener('click', displayModal);
modalContact.addEventListener('click', modalClick)

function displayModal(){
    modalRoot.classList.add('visible');
}

function closeModal(){
    modalRoot.classList.remove('visible');
}

function modalClick(event){
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


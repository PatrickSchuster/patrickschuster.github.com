import { debounce } from "./util.js";

function animate() {
    clearAllParticles();
    const bodyEl = document.querySelector("body");
    const vw = getViewportWidth();
    const vh = getViewportHeight();
    for (let i = 0; i < 50; i++) {
        addParticle();
    }

    function addParticle() {
        const particle = document.createElement("particle");
        particle.style.top = getRandomInt(vh) + "px";
        particle.style.left = getRandomInt(vw) + "px";
        const randomWaitTime = getRandomInt(3000);
        setTimeout(function() {
            bodyEl.appendChild(particle);
        }, randomWaitTime);
    }
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    function getViewportWidth() {
        return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    }
    
    function getViewportHeight() {
        return Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    }
}

function clearAllParticles() {
    const particles = document.querySelectorAll("particle");
    particles.forEach(particle => {
        particle.remove();
    });
}

const debouncedAnimation = debounce(animate, 3000);
window.addEventListener("resize", () => debouncedAnimation());

animate();
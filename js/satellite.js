import { throttle } from "./util.js";

const aboutSection = document.getElementById("about");

const throttledFollowCursor = throttle(followCursor, 50);

aboutSection.addEventListener("mousemove", (event) => {
    throttledFollowCursor(event);
});

const satellite = document.getElementsByTagName("satellite")[0];

function followCursor(event) {
    const cursorCoordinates = {
        x: event.clientX,
        y: event.clientY
    };
    satellite.style.top = `${cursorCoordinates.y}px`;
    satellite.style.left = `${cursorCoordinates.x}px`;
}
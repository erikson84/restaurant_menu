import { generateHeading } from "./genMain";
import { generateAbout } from "./genAbout";
import "./style.css";

const content = document.querySelector("#content");

generateHeading(content);

const main = document.querySelector("main");
generateAbout(main);

const aboutBtn = document.getElementById("about");
const menuBtn = document.getElementById("menu");
const orderBtn = document.getElementById("order");

aboutBtn.addEventListener("click", changeTab);
menuBtn.addEventListener("click", changeTab);
orderBtn.addEventListener("click", changeTab);

aboutBtn.classList.add("activeTab");

btns.forEach(btn => btn.addEventListener("click", changeTab));

function changeTab(e) {
    const activeBtn = document.querySelector("button.activeTab");
    const btn = e.target;

    if (activeBtn.id == btn.id) return;
    activeBtn.classList.toggle("activeTab");
    btn.classList.add("activeTab");

    main.textContent = "";

    switch (btn.id) {
        case "about":
            generateAbout(main);
            break;

    }
}
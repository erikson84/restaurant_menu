import { generateHeading } from "./genMain";
import { generateAbout } from "./genAbout";
import { generateMenu } from "./genMenu";
import "./style.css";
import burgerImg from "./burgerNFries.jpg";
import beansImg from "./riceAndBeans.jpg";
import fishImg from "./fishNChips.jpg";

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
        
        case "menu":
            generateMenu(main, [["Rice and Beans", beansImg],
                               ["Fish'n'Chips", fishImg],
                               ["Burger and Fries", burgerImg]]);
            break;

    }
}
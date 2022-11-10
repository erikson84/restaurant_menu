import { generateHeading } from "./genMain";
import { generateAbout } from "./genAbout";
import "./style.css";

const content = document.querySelector("#content");

generateHeading(content);

const main = document.querySelector("main");

generateAbout(main);

const aboutBtn = document.getElementById("about");
aboutBtn.classList.add("activeTab");
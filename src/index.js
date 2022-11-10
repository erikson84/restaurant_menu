import { generateHeading } from "./genMain";
import { generateAbout } from "./genAbout";
import "./style.css";

const content = document.querySelector("#content");

generateHeading(content);

const main = document.querySelector("main");
const navButtons = document.querySelector("nav");

generateAbout(main);
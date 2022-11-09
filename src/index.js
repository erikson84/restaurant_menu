const content = document.querySelector("#content");

addTitle(prompt("Qual o título que você quer?"));

function addTitle(text) {
    const newH1= document.createElement('h1')
    newH1.textContent = text;
    content.appendChild(newH1);
}
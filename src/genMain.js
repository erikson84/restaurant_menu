function generateHeading(content) {
    const heading = document.createElement("header");
    content.appendChild(heading);

    const title = document.createElement("h1");
    title.textContent = "Achilles Last Supper"
    heading.appendChild(title);

    const menu = document.createElement("nav");
    heading.appendChild(menu);

    for (let btn of ["About Us", "Menu", "Order"]) {
        const button = document.createElement("button");
        button.classList.add("menuButton");
        button.textContent = btn;
        menu.appendChild(button);
    }

}

export {generateHeading};
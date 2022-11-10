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

    const main = document.createElement("main");
    content.appendChild(main);

    const footer = document.createElement("footer");
    content.appendChild(footer);

    const footerTextName = document.createElement("p");
    footerTextName.textContent = "Achilles Last Supper"
    footer.appendChild(footerTextName);

    const footerTextTel = document.createElement("p");
    footerTextTel.textContent = "☎ +55 (48) 99901-0666"
    footer.appendChild(footerTextTel);

    const footerTextMail = document.createElement("p");
    footerTextMail.textContent = "✉ achilles@lastsupper.com"
    footer.appendChild(footerTextMail);

}

export {generateHeading};
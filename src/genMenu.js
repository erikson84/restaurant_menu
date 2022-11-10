function generateMenu(main, entryList) {
    const title = document.createElement("h1");
    title.textContent = "Menu";
    main.appendChild(title);

    const menu = document.createElement("div");
    menu.classList.add("menu");
    main.appendChild(menu);

    const cards = entryList.map(ent => generateEntry(ent[0], ent[1]));
    for (let c of cards) menu.appendChild(c);

}

function generateEntry(name, img) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.classList.add("cardImg");
    image.src = img;
    card.appendChild(image)

    const text = document.createElement("h4");
    text.classList.add("cardTxt");
    text.textContent = name;
    card.appendChild(text);

    return card;
}

export {generateMenu};
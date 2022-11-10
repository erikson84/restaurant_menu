function generateOrder(main) {
    const title = document.createElement("h1");
    title.textContent = "Order";
    main.appendChild(title);

    const form = document.createElement("form");
    main.appendChild(form);

    const formName = generateInput("text", "formName", "Name");
    form.appendChild(formName);

    const formAddrs = generateInput("text", "formAddrs", "Address");
    form.appendChild(formAddrs);

    const formOpt = generateInput("text", "formOpt", "Choice");
    form.appendChild(formOpt);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("order");
    submitBtn.textContent = "Order!"
    form.appendChild(submitBtn);
    

}

function generateInput(type, name, label) {
    const inputDiv = document.createElement("div");
    inputDiv.classList.add("input");
    
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.id = name;

    const lbl = document.createElement("label");
    lbl.textContent = label;
    lbl.setAttribute("for", name);

    inputDiv.appendChild(lbl);
    inputDiv.appendChild(input);

    return(inputDiv);
    
}

export {generateOrder};
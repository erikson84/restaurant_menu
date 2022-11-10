function generateAbout(main) {
    const title = document.createElement("h1");
    title.textContent = "About Us";
    main.appendChild(title);

    const text1 = document.createElement("p");
    text1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a erat sollicitudin, maximus mauris nec, \
    egestas risus. Quisque bibendum mattis ante ut tristique. Nulla tempor ante et tempor aliquam. Suspendisse faucibus ut ligula non tempus. \
    Nullam lobortis est sit amet turpis efficitur, at rutrum sem blandit. Nunc sed semper augue, eu accumsan tortor.";
    const text2 = document.createElement("p");
    text2.textContent = "Aenean auctor et turpis non aliquam. Donec non ipsum vel magna tristique pharetra nec vitae urna. Curabitur eget ipsum pharetra, \
    pharetra justo vitae, euismod sem. Nunc vestibulum consequat nisl at consequat. Aliquam ut eleifend sem. Morbi interdum pellentesque tempus. \
    In congue finibus erat vel congue. Mauris mattis bibendum tellus, nec ultrices ex congue id.";
    const text3 = document.createElement("p");
    text3.textContent = "Vestibulum odio urna, vehicula non nulla sit amet, bibendum iaculis est. Nullam convallis, ligula at accumsan posuere, \
    felis nulla tempus ex, id pharetra ex erat ac ipsum. Praesent tincidunt pellentesque arcu dapibus lacinia. Nullam eget nibh in ante scelerisque hendrerit. \
    Etiam auctor nunc sit amet mauris volutpat elementum. Nulla volutpat hendrerit rhoncus. Sed eu massa molestie, tempus lacus a, commodo nunc."
    main.appendChild(text1);
    main.appendChild(text2);
    main.appendChild(text3);
}

export {generateAbout};
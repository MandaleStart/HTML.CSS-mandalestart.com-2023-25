        window.projects = window.projects || [
            {
                img: "img\e_commerce\ecommerce.jpg",
                title: "E-commerce: JAP2022",
                desc: "Página de comercio online basada en HTML, CSS, Bootstrap y JS para el programa Jóvenes a Programar 2022.",
                link: "../view/jap2022.html",
                disabled: false
            },
            {
                img: "img/personal_website/personalweb.png",
                title: "Página Web Personal",
                desc: "Página web personal basada en HTML, CSS, Bootstrap y JS.",
                link: "../view/personal-web.html",
                disabled: false
            },
            {
                img: "img/java/java_inventario.png",
                title: "Java : inventario",
                desc: "Programa escrito en java para gestion de libros y equipos",
                link: "../view/java_inventario.html",
                disabled: false
            },
            {
                img: "img/e_commerce_farma/farma.png",
                title: "E-commerce: Farmacia",
                desc: "Sitio web Ecommerce de Farmacia con base de datos y gestion de productos y usuarios .",
                link: "#",
                disabled: true
            },
            {
                img: "img/videogame_web/videojuego.png",
                title: "Videojuego Web",
                desc: "Videojuego básico en navegador.",
                link: "../view/vgame_web.html",
                disabled: true
            }
        ];

function loadProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = "";

    window.projects.forEach(project => {

        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-5 d-flex";


        const card = document.createElement("div");
        card.className = "card h-100 flex-fill d-flex flex-column shadow-sm";


        const img = document.createElement("img");
        img.src = project.img;
        img.alt = project.title;
        img.className = "card-img-top";


        const body = document.createElement("div");
        body.className = "card-body d-flex flex-column";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = project.title;

        const desc = document.createElement("p");
        desc.className = "card-text flex-grow-1";
        desc.textContent = project.desc;


        const button = document.createElement("a");
        button.className = `btn btn-warning mt-auto ${project.disabled ? "disabled" : ""}`;
        button.textContent = project.disabled ? "Próximamente" : "Más información";

        if (!project.disabled) {
            button.href = "https://mandalestart.com/" + project.link;
            button.setAttribute("data-link", "");
        } else {
            button.setAttribute("aria-disabled", "true");
        }

        body.append(title, desc, button);
        card.append(img, body);
        col.append(card);
        container.append(col);
    });
}

// Ejecutar el render
loadProjects();
        window.projects = window.projects || [
            {
                img: "../img/e_commerce/ecommerce.jpg",
                title: "E-commerce: JAP2022",
                desc: "Página de comercio online basada en HTML, CSS, Bootstrap y JS para el programa Jóvenes a Programar 2022.",
                link: "../view/jap2022.html",
                disabled: false
            },
            {
                img: "../img/personal_website/personalweb.png",
                title: "Página Web Personal",
                desc: "Página web personal basada en HTML, CSS, Bootstrap y JS.",
                link: "../view/personal-web.html",
                disabled: false
            },
            {
                img: "../img/e_commerce_farma/farma.png",
                title: "E-commerce: Farmacia",
                desc: "Sitio web Ecommerce de Farmacia con base de datos y gestion de productos y usuarios .",
                link: "#",
                disabled: true
            },
            {
                img: "../img/videogame_web/videojuego.png",
                title: "Videojuego Web",
                desc: "Videojuego básico en navegador.",
                link: "../view/vgame_web.html",
                disabled: true
            },
            {
                img: "../img/java/java_inventario.png",
                title: "Java : inventario",
                desc: "Programa escrito en java para gestion de libros y equipos",
                link: "../view/java_inventario.html",
                disabled: true
            }
        ];


function loadProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = "";

    window.projects.forEach(proj => {
        const card = document.createElement("div");
        card.classList.add("card", "d-flex", "flex-column");
        card.style.width = "18rem";
        card.style.minHeight = "350px";

        card.innerHTML = `
                    <img src="${proj.img}" alt="${proj.title}" class="card-img-top" />
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${proj.title}</h5>
                        <p class="card-text flex-grow-1">${proj.desc}</p>
                        <a 
                          ${proj.disabled ? 'aria-disabled="true"' : `href="${proj.link}" data-link`} 
                          class="btn btn-warning mt-auto ${proj.disabled ? 'disabled' : ''}">
                            ${proj.disabled ? "Próximamente" : "Más información"}
                        </a>
                    </div>
                `;

        container.appendChild(card);
    });
}

loadProjects();
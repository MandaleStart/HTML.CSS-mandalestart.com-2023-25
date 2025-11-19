
async function loadComponent(id, file) {
  const element = document.getElementById(id);
  if (!element) return;

  const response = await fetch(file);
  const html = await response.text();

  element.innerHTML = html;
  executeScripts(element);
}


function executeScripts(container) {
  const scripts = container.querySelectorAll("script");

  scripts.forEach(oldScript => {
    const newScript = document.createElement("script");

    if (oldScript.src) newScript.src = oldScript.src;
    else newScript.textContent = oldScript.textContent;

    document.body.appendChild(newScript);
  });
}

async function loadMain(file) {
  const response = await fetch(file);
  const html = await response.text();

  const temp = document.createElement("div");
  temp.innerHTML = html;

  const mainContent = temp.querySelector("section") || temp;

  const content = document.getElementById("content");
  content.innerHTML = mainContent.outerHTML;

  executeScripts(content);
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "./components/navbar.html");
  await loadMain("./view/home.html");
  await loadComponent("footer", "./components/footer.html");


});


document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-page]");
  if (!link) return;

  e.preventDefault();

  const file = link.getAttribute("data-page");
  loadMain(file);
});
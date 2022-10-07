const burgerIcon = document.querySelector("#burger");
const navBarMenu = document.querySelector("#nav-links")
const h1Project = document.querySelector("#h1-project")
const contentProject = document.querySelector("#content-project")


burgerIcon.addEventListener("click", () => {
    navBarMenu.classList.toggle("is-active")
})

let randomNumber = Math.floor(Math.random() * 98)

const getDataProject = async () => {

    const apiData = await fetch('https://jsonplaceholder.typicode.com/posts/' + randomNumber);
    const data = await apiData.json();

    h1Project.innerHTML = data.title;
    contentProject.innerHTML = data.body;
}

getDataProject();

const getData = async () => {

    for (let i = 1; i <= 3; i++) {
        const id = randomNumber + i;
        const apiData = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
        const data = await apiData.json();

        document.querySelector(`#project-title-${i}`).innerHTML = data.title;
        document.querySelector(`#project-body-${i}`).innerHTML = data.body;
      }
}
getData();
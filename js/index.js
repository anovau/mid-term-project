const burgerIcon = document.querySelector("#burger");
const navBarMenu = document.querySelector("#nav-links")


burgerIcon.addEventListener("click", () => {
    navBarMenu.classList.toggle("is-active")
})


let randomNumber = Math.floor(Math.random() * 98)

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




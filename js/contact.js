const burgerIcon = document.querySelector("#burger");
const navBarMenu = document.querySelector("#nav-links")

burgerIcon.addEventListener("click", () => {
    navBarMenu.classList.toggle("is-active")
})

const form = document.querySelector('#form');
const nameForm = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const message = document.querySelector('#message');

submit.addEventListener('click', async (e) => {
    e.preventDefault();

    console.log(`Name: ${nameForm.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Phone: ${phone.value}`);
    console.log(`Message: ${message.value}`);
})
//Javascript for toggle

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");

    navMenu.classList.toggle("active");

    console.log("Active class toggled");
});

//SELECT ALL NAVIGATION LINKS

const navLinks = document.querySelectorAll(".nav-link");

//ADD A CLICK EVENT LISTENER TO EACH LINK

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        //HIDE THE MENU

        document.querySelector(".hamburger-menu").style.display = "none";


    });
});

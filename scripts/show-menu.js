function showMenu() {
    let menuButton = document.querySelector(".mobile-menu-button");
    let openButton = document.querySelector(".open-menu");
    let closeButton = document.querySelector(".close-menu");
    let menu = document.querySelector(".mobile-navigation-list-container");

    menuButton.onclick = () => {
        if(openButton.style.opacity == "1") {
            openButton.style.opacity = "0";
            closeButton.style.opacity = "1";
            menu.style.width = "100vw";
        } else {
            openButton.style.opacity = "1";
            closeButton.style.opacity = "0";
            menu.style.width = "0vw";
        }
    }
}

showMenu();
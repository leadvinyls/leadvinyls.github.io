function showMenu()
{
    let menuButton = document.querySelector(".mobile-menu-button");
    let openButton = document.querySelector(".open-menu");
    let closeButton = document.querySelector(".close-menu");
    let menu = document.querySelector(".mobile-navigation-list");

    menuButton.onclick = () => 
    {
        if(openButton.style.opacity == "1")
        {
            openButton.style.opacity = "0";
            closeButton.style.opacity = "1";
            menu.style.left = "0";

        }
        else
        {
            openButton.style.opacity = "1";
            closeButton.style.opacity = "0";
            menu.style.left = "calc(-100vw + -30px)";
        }
       
    }
}

showMenu();
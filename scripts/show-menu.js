function showMenu()
{
    let menuButton = document.querySelector(".mobile-menu-button");
    let openButton = document.querySelector(".open-menu");
    let closeButton = document.querySelector(".close-menu");

    menuButton.onclick = () => 
    {
        if(openButton.style.opacity == "1")
        {
            openButton.style.opacity = "0";
            closeButton.style.opacity = "1";
        }
        else
        {
            openButton.style.opacity = "1";
            closeButton.style.opacity = "0";
        }
       
    }
}

showMenu();
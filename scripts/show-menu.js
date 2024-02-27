function showMenu()
{
    let menuButton = document.querySelector(".mobile-menu-button");

    menuButton.onclick = () => 
    {
        console.log("hi");
        menuButton.style.opacity = "0";
    }
}

showMenu();
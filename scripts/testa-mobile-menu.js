var testaMenuButton = document.getElementById("testa-menu-icon");
var testaMenuItems = document.getElementsByClassName("testa-menu-item");

for (let i = 0; i< testaMenuItems.length; i++) {
    testaMenuItems[i].onclick = function()
    {
        testaMenuDrop();
    }
}

testaMenuButton.onclick = function() 
{
    testaMenuDrop();
};

function testaMenuDrop()
{
    let menu = document.getElementById("testa-menu-js");
    menu.style.top == "-100%";
    testaMenuButton.style.transform= "rotate(0deg)";

    if(menu.style.top == "0%")
    {
        menu.style.top = "-100%";
        testaMenuButton.style.transform= "rotate(0deg)";
    }
    else
    {
        menu.style.top = "0%";
        testaMenuButton.style.transform= "rotate(-90deg)";
    }
}
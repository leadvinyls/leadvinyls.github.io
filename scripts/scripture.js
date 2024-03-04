const writeLetters = (element, textArray) =>
{ 
    let i = 0;
    let j = 0;
    let direction = true;
    setInterval(() => 
    {
        
        if(direction == true)
        {
            element.innerHTML += textArray[j][i];
            i++;
        }
        else
        {
            element.innerHTML = textArray[j].substring(0,i-1);
            i--;
        }

        if(i == textArray[j].length)
        {
            direction = false;
        }
        else if(i == 0)
        {
            direction = true;
            j++;
        }

        if(j >= textArray.length)
        {
            j = 0;
        }
        
        
    }, 200);
}

let element = document.querySelector("h1");
element.innerHTML = "";
writeLetters(element, ["Web Developer", " ", "Graphic Designer", " "]);

let bar = document.querySelector(".writing-bar");
setInterval(()=>
{
    if(bar.style.opacity == 1)
    {
        bar.style.opacity = "20%";
    }
    else
    {
        bar.style.opacity = "1";
    }
}, 500);
function encode(Form){
    let text = document.querySelector('.text-result');
    let message = Form.encodeMessage.value.trim();
    let messageParts = message.split("\n");
    let encodedMessage = [];
    let decodedMessage = [];
    let s = []
    str = Form.decodeMessage.value.split(",");

    str.forEach(element => {
        decodedMessage.push(Number(element));
        if(!s.includes(element)){
            s.push(element);
        }
    });

    bits = s.length.toString(2).length;

    let sum = 0;
    let zeros = 0;
    let nonZeros = 0;
    let actual;
    let last = 1;
    for(let i = 0; i < decodedMessage.length; i++)
    {
        actual = decodedMessage[i];

        if(decodedMessage[i] == 0){ last = 0;}
        else{
            if(last == 0){
                nonZeros++;
                last = 1;
            }
            else{
                zeros += decodedMessage[i];
                last = 0;
            }
        }

        sum += decodedMessage[i];
    }

    text.innerHTML = "";
    text.innerHTML += "Zeros del mapa de bits: " + zeros.toString() + "<br>";
    text.innerHTML += "Bits que ocupa el mensaje: " + (decodedMessage.length * bits).toString() + "<br>";
    text.innerHTML += "lineas del mensaje: " + ((sum / decodedMessage[0])).toString() + "<br>";
    text.innerHTML += "Zeros del mapa de bits: " + zeros.toString() + "<br>";

    let mapSize = messageParts.length
    messageParts.forEach(element => {
        if(element) {
            let count = 0;
            let sc;
            let ch;
            console.log(element);
            if(element[0] != 0){
                encodedMessage.push(0);
            }
        
            sc = element[0];
            for(let i = 0; i < element.length; i++){
                ch = element[i]
                if (sc == ch) {
                    count++;
                }
                else{
                    encodedMessage.push(count);
                    count = 1;
                    sc = element[i];
                }
            }
            encodedMessage.push(count);
        }
    });

    //encodedMessage.unshift(messageParts.length);
    text.innerHTML += "Map: " + messageParts.toString() + "<br>";
    text.innerHTML += "Map size: " + ((mapSize * messageParts[0].length) * 8).toString() + "<br>";
    text.innerHTML += "Encoded Message: " + encodedMessage.toString() + "<br>";
    console.log(encodedMessage);
}

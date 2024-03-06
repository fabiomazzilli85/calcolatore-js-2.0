let i = prompt("Inserisci un numero tra 1 e 20"); //number

if (i == 0) {
    console.log("Il numero che hai inserito (0) non è corretto.")
    document.getElementById("message").innerText = "Il numero che hai inserito (0) non è corretto.";
}

else if(i > 20) {
    console.log("Hai inserito un numero maggiore di 20.")
    document.getElementById("message").innerText = "Hai inserito un numero maggiore di 20.";

}

else {  
    console.log("Il numero inserito è compreso tra 1 e 20: sei un genio");
    let message = "Il numero inserito è compreso tra 1 e 20: sei un genio";
            console.log(message);
            document.getElementById("message").innerText = message;
            let numbersList = document.createElement("ul");
            for (let j = 1; j <= i; j++) {
                let listItem = document.createElement("li");
                listItem.innerText = j;
                numbersList.appendChild(listItem);
            }
            document.body.appendChild(numbersList);
        }
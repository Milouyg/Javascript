console.log("Script is geladen!")

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetinFruitla(fruit){
    console.log(fruit);

    const nieuwElement = document.createElement("h2");
    nieuwElement.innerHTML = fruit;
    fruitvak.appendChild(nieuwElement);
    nieuwElement.className = "rood"
}

function zetinGroentela(groente){
    console.log(groente);

    const nieuwElement = document.createElement("h2");
    nieuwElement.innerHTML = groente;
    groentevak.appendChild(nieuwElement);
    nieuwElement.className = "groen"
}
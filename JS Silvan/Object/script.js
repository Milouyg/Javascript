const kat1 = {
    "naam": "Dylan",
    "leeftijd": 12,
    "Image": "kat.png"
}
console.log(kat1);

let nHeader = document.createElement("h2");
nHeader.innerHTML = kat1.naam;
document.body.appendChild(nHeader)

let leeftijd = document.createElement("h2");
leeftijd.innerHTML = kat1.leeftijd;
document.body.appendChild(leeftijd)

let img = document.createElement("img")
img.src = kat1.Image;
document.body.appendChild(img)
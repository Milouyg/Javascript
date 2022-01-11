const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let = locaties = [

    {
        "titel":"Begin van de Silver Bullet",
        "image":"img/0.jpg"
    },
    {
        "titel":"Kantoor",
        "image":"img/1.jpg"
    },
    {
        "titel":"Klaslokaal",
        "image":"img/2.jpg"
    },
    {
        "titel":"docentenkamer",
        "image":"img/3.jpg"
    },
    {
        "titel":"Gang",
        "image":"img/4.jpg"
    },
    {
        "titel":"wc",
        "image":"img/5.jpg"
    },
    {
        "titel":"lokaal",
        "image":"img/6.jpg"
    },
    {
        "titel":"lokaal",
        "image":"img/7.jpg"
    },
    {
        "titel":"lokaal",
        "image":"img/8.jpg"
    },
    {
        "titel":"lokaal met studenten",
        "image":"img/9.jpg"
    },
    {
        "titel":"lokaal met monitoren",
        "image":"img/10.jpg"
    },
    {
        "titel":"brandblusser",
        "image":"img/11.jpg"
    }
]

// myTitle.innerHTML = "Dit is door het script toegevoegd";
// myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = locaties[index].titel;
    myImage.src = locaties[index].image;
}

function getInput(){
    show(myInput.value);
    // console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}



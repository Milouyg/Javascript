const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

// const knopNoord = document.getElementById("knopNoord");
// const knopOost = document.getElementById("knopOost");
// const knopZuid = document.getElementById("knopZuid");
// const knopWest = document.getElementById("knopWest");

let directionButtons = {
    "noord": document.getElementById("knopNoord"),
    "oost": document.getElementById("knopOost"),
    "zuid": document.getElementById("knopZuid"),
    "west": document.getElementById("knopWest"),
}

let current_index = 0;

let = lokaties = [ // Array

    {
        "titel":"Begin van de Silver Bullet",
        "image":"img/0.jpg",
        "directions": {
            "zuid": 1
        }
    },
    { //1 = Object
        "titel":"Kantoor",
        "image":"img/1.jpg",
        "directions": {
            "noord":0,
            "west": 2,
            "oost": 5,
            "zuid": 4
        }
    },
    { //2 = object
        "titel":"Klaslokaal",
        "image":"img/2.jpg",
        "directions": {
            "oost":1,
            "zuid":3
        }
    },
    {// 3 = object
        "titel":"docentenkamer",
        "image":"img/3.jpg",
        "directions": {
            "noord":2,
        }
    },
    {// 4 = object
        "titel":"Docenten pauzekamer",
        "image":"img/4.jpg",
        "directions": {
            "noord":1
        }
    },
    {// 5 = object
        "titel":"gang",
        "image":"img/5.jpg",
        "directions": {
            "oost":5,
            "west":1
        }
    },
    {// 6 = object 
        "titel":"gang bij het toilette",
        "image":"img/6.jpg",
        "directions": {
            "oost":7,
            "west":5
        }
    },
    {// 7 = object 
        "titel":"gang bij lokaal 0.93",
        "image":"img/7.jpg",
        "directions": {
            "noord":9,
            "zuid":8
        }
    },
    {// 8 = object
        "titel":"lokaal",
        "image":"img/8.jpg",
        "directions": {
            "noord":7
        }
    },
    {// 9 = object
        "titel":"lokaal met studenten",
        "image":"img/9.jpg",
        "directions": {
            "zuid":7,
            "west":10
        }
    },
    {// 10 = object 
        "titel":"lokaal met monitoren",
        "image":"img/10.jpg,",
        "directions": {
            "oost":9,
            "zuid":5
        }
    },
    {// 11 = object 
        "titel":"brandblusser",
        "image":"img/11.jpg",
        "directions": {
            "noord":6
        }
    }
]

// myTitle.innerHTML = "Dit is door het script toegevoegd";
// myImage.src = "img/1.jpg";

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImage.src = lokaties[index].image;
    current_index = index

    //Knoppen opnieuw berekenen
    updateDirections();
}

function updateDirections(){
    //Haalt de mogelijke directions op voor de current_index
    let possible = lokaties[current_index].directions;

    //Zet de direction keys in een aparte variabel
    let possible_keys = Object.keys(possible);
    console.log(possible_keys);


    //Zet de keys van de buttons in een aparte variable
    let button_keys = Object.keys(directionButtons);
    console.log(button_keys)

    //Zet eerst alle knoppen uit
    for(const key of button_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    //zet nu de mogelijke (directions) aan
    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput(){
    show(myInput.value);
    // console.log(myInput.value)
    myInput.value = "";
    myInput.focus();
}

function goDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}

show(0);


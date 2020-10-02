const express = require('express');
const app = express();
app.use(express.static('public'));
var gameArray = [];
var pointArray = [0, 0, 0]; //tries, hits, misses
//var playerArray = [];
let hitArray = [5, 4, 3, 3, 2]; //count for live ships, [0] aircraft, [1] battleship, [2] cruiser, [3] submarine, [4] destroyer
var shipArray = ['[5 Node] Aircraft', '[4 Node] Battleship', '[3 Node] Cruiser', '[3 Node] Submarine', '[2 Node] Destroyer'];
for (var i = 0; i < 100; i++) {
    var newElement = {};
    newElement['state'] = 'empty';
    newElement['shipType'] = ''; //a - aircraft, b - battleship, c - cruiser, s - submarine, d - destroyer 
    gameArray.push(newElement);
}
    function aircraftHorizontal(location) {
        //if the location less than 4 blocks away from the right side wall 'ship' is created backward 5 blocks
        if ((location - 6) % 10 == 0 | (location - 7) % 10 == 0 | (location - 8) % 10 == 0 | (location - 9) % 10 == 0) {
            gameArray[location].state = 'ship';
            gameArray[location-1].state = 'ship';
            gameArray[location-2].state = 'ship';
            gameArray[location-3].state = 'ship';
            gameArray[location-4].state = 'ship';
            gameArray[location].shipType = 'a';
            gameArray[location-1].shipType = 'a';
            gameArray[location-2].shipType = 'a';
            gameArray[location-3].shipType = 'a';
            gameArray[location-4].shipType = 'a';
        } else {
            //all other locations 'ship' is created forward 5 blocks
            gameArray[location].state = 'ship';
            gameArray[location+1].state = 'ship';
            gameArray[location+2].state = 'ship';
            gameArray[location+3].state = 'ship';
            gameArray[location+4].state = 'ship';
            gameArray[location].shipType = 'a';
            gameArray[location+1].shipType = 'a';
            gameArray[location+2].shipType = 'a';
            gameArray[location+3].shipType = 'a';
            gameArray[location+4].shipType = 'a';
        }
    }
    function aircraftVertical(location) {
        //if the location less than 4 blocks away from the bottom wall 'ship' is created backward 5 blocks
        if (location >= 60 && location <= 99) {
            gameArray[location].state = 'ship';
            gameArray[location-10].state = 'ship';
            gameArray[location-20].state = 'ship';
            gameArray[location-30].state = 'ship';
            gameArray[location-40].state = 'ship';
            gameArray[location].shipType = 'a';
            gameArray[location-10].shipType = 'a';
            gameArray[location-20].shipType = 'a';
            gameArray[location-30].shipType = 'a';
            gameArray[location-40].shipType = 'a';
        } else {
            //all other locations 'ship' is created forward 5 blocks
            gameArray[location].state = 'ship';
            gameArray[location+10].state = 'ship';
            gameArray[location+20].state = 'ship';
            gameArray[location+30].state = 'ship';
            gameArray[location+40].state = 'ship';
            gameArray[location].shipType = 'a';
            gameArray[location+10].shipType = 'a';
            gameArray[location+20].shipType = 'a';
            gameArray[location+30].shipType = 'a';
            gameArray[location+40].shipType = 'a';
        }
    }
    function battleshipHorizontal(location) {
        //if the location less than 4 blocks away from the right side wall 'ship' is created backward 5 blocks
        if ((location - 7) % 10 == 0 | (location - 8) % 10 == 0 | (location - 9) % 10 == 0) {
            gameArray[location].state = 'ship';
            gameArray[location-1].state = 'ship';
            gameArray[location-2].state = 'ship';
            gameArray[location-3].state = 'ship';
            gameArray[location].shipType = 'b';
            gameArray[location-1].shipType = 'b';
            gameArray[location-2].shipType = 'b';
            gameArray[location-3].shipType = 'b';
        } else {
            //all other locations 'ship' is created forward 5 blocks
            gameArray[location].state = 'ship';
            gameArray[location+1].state = 'ship';
            gameArray[location+2].state = 'ship';
            gameArray[location+3].state = 'ship';
            gameArray[location].shipType = 'b';
            gameArray[location+1].shipType = 'b';
            gameArray[location+2].shipType = 'b';
            gameArray[location+3].shipType = 'b';
        }
    }
    function battleshipVertical(location) {
        //if the location less than 3 blocks away from the bottom wall 'ship' is created backward 4 blocks
        if (location >= 70 && location <= 99) {
            gameArray[location].state = 'ship';
            gameArray[location-10].state = 'ship';
            gameArray[location-20].state = 'ship';
            gameArray[location-30].state = 'ship';
            gameArray[location].shipType = 'b';
            gameArray[location-10].shipType = 'b';
            gameArray[location-20].shipType = 'b';
            gameArray[location-30].shipType = 'b';
            
        } else {
            //all other locations 'ship' is created forward 4 blocks
            gameArray[location].state = 'ship';
            gameArray[location+10].state = 'ship';
            gameArray[location+20].state = 'ship';
            gameArray[location+30].state = 'ship';
            gameArray[location].shipType = 'b';
            gameArray[location+10].shipType = 'b';
            gameArray[location+20].shipType = 'b';
            gameArray[location+30].shipType = 'b';
        }
    }
    function cruiserAndSubmarineHorizontal(location, type) {
        //if the location less than 2 blocks away from the right side wall 'ship' is created backward 3 blocks
        if ((location - 8) % 10 == 0 | (location - 9) % 10 == 0) {
            gameArray[location].state = 'ship';
            gameArray[location-1].state = 'ship';
            gameArray[location-2].state = 'ship';
            gameArray[location].shipType = type;
            gameArray[location-1].shipType = type;
            gameArray[location-2].shipType = type;
        } else {
            //all other locations 'ship' is created forward 3 blocks
            gameArray[location].state = 'ship';
            gameArray[location+1].state = 'ship';
            gameArray[location+2].state = 'ship';
            gameArray[location].shipType = type;
            gameArray[location+1].shipType = type;
            gameArray[location+2].shipType = type;
        }
    }
    function cruiserAndSubmarineVertical(location, type) {
        //if the location less than 2 blocks away from the bottom wall 'ship' is created backward 3 blocks
        if (location >= 80 && location <= 99) {
            gameArray[location].state = 'ship';
            gameArray[location-10].state = 'ship';
            gameArray[location-20].state = 'ship';
            gameArray[location].shipType = type;
            gameArray[location-10].shipType = type;
            gameArray[location-20].shipType = type;
            
        } else {
            //all other locations 'ship' is created forward 3 blocks
            gameArray[location].state = 'ship';
            gameArray[location+10].state = 'ship';
            gameArray[location+20].state = 'ship';
            gameArray[location].shipType = type;
            gameArray[location+10].shipType = type;
            gameArray[location+20].shipType = type;
        }
    }
    function destroyerHorizontal(location) {
        //if the location less than 1 block away from the right side wall 'ship' is created backward 2 blocks
        if ((location - 9) % 10 == 0) {
            gameArray[location].state = 'ship';
            gameArray[location-1].state = 'ship';
            gameArray[location].shipType = 'd';
            gameArray[location-1].shipType = 'd';
        } else {
            //all other locations 'ship' is created forward 2 blocks
            gameArray[location].state = 'ship';
            gameArray[location+1].state = 'ship';
            gameArray[location].shipType = 'd';
            gameArray[location+1].shipType = 'd';
        }
    }
    function destroyerVertical(location) {
        //if the location less than 1 block away from the bottom wall 'ship' is created backward 2 blocks
        if (location >= 90 && location <= 99) {
            gameArray[location].state = 'ship';
            gameArray[location-10].state = 'ship';
            gameArray[location].shipType = 'd';
            gameArray[location-10].shipType = 'd';
            
        } else {
            //all other locations 'ship' is created forward 2 blocks
            gameArray[location].state = 'ship';
            gameArray[location+10].state = 'ship';
            gameArray[location].shipType = 'd';
            gameArray[location+10].shipType = 'd';
        }
    }
    function checkship(location, block_count) {
        var checked = false;
        for (var i = 1; i <= block_count; i++) {
            if (checkRange(location - i)) {
                if (gameArray[location - i].state == 'ship'){
                    checked = true;}
            }
            if (checkRange(location + i)) {
                if (gameArray[location + i].state == 'ship'){
                    checked = true;}
            }
            if (checkRange(location - i * 10)) {
                if (gameArray[location - i * 10].state == 'ship'){
                    checked = true;}
            }
            if (checkRange(location + i * 10)) {
                if (gameArray[location + i * 10].state == 'ship'){
                    checked = true;}
            }
        } 
        return checked;
    }
    function checkRange(num) {
        return num >= 0 && num < 100;
    }
    function shipLocator(){
        var location = Math.floor(Math.random()*98);
        //randomizing the vertical and horizontal ship using if another random number is even or odd
        var randomNumber = Math.round(Math.random());
        if (randomNumber % 2 == 0) {
            aircraftVertical(location);
        } else {
            aircraftHorizontal(location);
        }
        //gets second random location for the battle'ship'
        var location2 = Math.floor(Math.random()*98);
        while (checkship(location2, 4)) {
            location2 = Math.floor(Math.random()*98);
        }
        randomNumber = Math.round(Math.random());
        if (randomNumber % 2 == 0) {
            battleshipVertical(location2);
        } else {
            battleshipHorizontal(location2);
        }
        
        
        var location3 = Math.floor(Math.random()*98);
        while (checkship(location3, 3)) {
            location3 = Math.floor(Math.random()*98);
        }
        randomNumber = Math.round(Math.random());
        if (randomNumber % 2 == 0) {
            cruiserAndSubmarineHorizontal(location3, 's');
        } else {
            cruiserAndSubmarineVertical(location3, 's');
        }
                
        
        var location4 = Math.floor(Math.random()*98);
        while (checkship(location4, 3)) {
            location4 = Math.floor(Math.random()*98);
        }
        randomNumber = Math.round(Math.random());
        if (randomNumber % 2 == 0) {
            cruiserAndSubmarineHorizontal(location4, 'c');
        } else {
            cruiserAndSubmarineVertical(location4, 'c');
        }
        
        
        var location5 = Math.floor(Math.random()*98);
        while (checkship(location5, 2)) {
            location5 = Math.floor(Math.random()*98);
        }
        randomNumber = Math.round(Math.random());
        if (randomNumber % 2 == 0) {
            destroyerHorizontal(location5);
        } else {
            destroyerVertical(location5);
        }
    }
shipLocator();
//***************************************Router&Display**********************************************
app.get('/', (req, res) => {
    hitArray = [5, 4, 3, 3, 2];
    let init = "<h1>Battleship Game</h1>";
    init += "<input type='text' name='name'><br>";
    for (var i = 0; i < gameArray.length; i++) {
        init += "<a href=";
        var temp = "http://localhost:3200/" + i;
        var quoteText = `"${temp}"`;
       
        init +=  quoteText + ">"
        init += "<img src='water.png' alt='1' height='25' width='25'>";
        
        init += "</a>";
        if ((i - 9) % 10 == 0) {
            init = init + "<br>"}
    }
    //initial empty text
    init += "[5 Node] Aircraft Status: FLYING!<br>[4 Node] Battleship Status: FLYING!<br>[3 Node] Cruiser Status: FLYING!<br>[3 Node] Submarine Status: FLYING!<br>[2 Node] Destroyer Status: FLYING!<br>Tries - 0<br>Misses - 0<br>Hits - 0";
    res.send(init);
});
app.get('/:id', (req,res) => {
    let id = parseInt(req.params.id);
    if(gameArray[id].state == 'empty' | gameArray[id].state == 'ship') { 
            if (gameArray[id].state == 'empty') {
                gameArray[id].state = 'miss';
                pointArray[0]++;
                pointArray[2]++;
            } else {
                gameArray[id].state = 'hit';
                if (gameArray[id].shipType == 'a') {hitArray[0]--;}
                if (gameArray[id].shipType == 'b') {hitArray[1]--;}
                if (gameArray[id].shipType == 'c') {hitArray[2]--;}
                if (gameArray[id].shipType == 's') {hitArray[3]--;}
                if (gameArray[id].shipType == 'd') {hitArray[4]--;}
                pointArray[0]++;
                pointArray[1]++;
        }} else  {
            if (gameArray[id].state == 'miss') {//if guessed already stays the same
                gameArray[id].state = 'miss';
            } else  {//if guessed already stays the same
                gameArray[id].state = 'hit';
        }}  
    
    var html = "<h1>Battleship Game</h1>";

    for (var i=0; i < gameArray.length; i++){
        
        html += "<a href=";
        var temp = "http://localhost:3200/" + i;
        var quoteText = `"${temp}"`;
       
        html +=  quoteText + ">"
        if (gameArray[i].state == 'empty') {
            html = html + "<img src='water.png' alt='1' height='25' width='25'>"}
        if (gameArray[i].state == 'ship'){
           html = html + "<img src='water.png' alt='1' height='25' width='25'>"}
        if (gameArray[i].state == 'hit'){
            html = html + "<img src='hit.png' alt='1' height='25' width='25'>"}
        if (gameArray[i].state == 'miss'){
           html = html + "<img src='miss.png' alt='1' height='25' width='25'>"}
        
        html +="</a>";
        if ((i - 9) % 10 == 0) {
            html = html + "<br>"}
    }
    //stats text
    var stats = "";
    for (var i = 0; i < shipArray.length; i++) {
        stats += shipArray[i] + " Status: ";
        if (hitArray[i] == 0) {stats += "SUNK!<br>"} else {stats += "SAILING<br>"}
    }
    html += stats;
    //point text
    var counts = "Tries - " + pointArray[0].toString() + "<br> Misses - " + pointArray[2].toString() + "<br> Hits - " + pointArray[1].toString();
    //adding the stats text to the main html
    html += counts;
    //game ends when tries reach 50
    if (pointArray[0] == 50) {html += "<h2>GAME OVER, TRY AGAIN!</h2>";} //if tries reach 50
    if (pointArray[1] == 17) {html += "<h2>CONGRATULATIONS! YOU WON</h2>";} //if hits reach 17
    if (pointArray[0] >= 51) {return res.end;} //anything more than allowed tries will stop the request
    if (pointArray[1] == 18) {return res.end;} //anything more than allowed tries will stop the request
    
res.send(html);
});

const PORT = process.env.PORT || 3200  //dynamic port assigment 
app.listen(PORT);
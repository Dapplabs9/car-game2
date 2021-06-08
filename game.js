var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var bg =  "https://thumbs.dreamstime.com/b/race-finish-top-view-road-finish-line-finish-line-racing-vector-stock-race-finish-top-view-road-finish-line-141191970.jpg";
var car2 = "https://www.nicepng.com/png/full/803-8030690_aston-martin-one77-17-top-down-car-sprite.png";
var x = 650;
var y = 610;
var width = 50;
var height = 80;
var y2 = 610;
var car = "https://www.pngkit.com/png/full/60-601690_aston-martin-one77-10-car-seat.png"

var car_tag = new Image();
var bg_tag = new Image();
var car_2_tag = new Image();

function add(){
    bg_tag.onload = uploadBacground;
    bg_tag.src = bg;

    car_2_tag.onload = uploadEnymy;
    car_2_tag.src = car2;

    car_tag.onload = uploadSprite;
    car_tag.src = car;
}
function uploadEnymy(){
    ctx.drawImage(car_2_tag,700,y2,50,80);
}
function uploadBacground(){
    ctx.drawImage(bg_tag,0,0,canvas.width,canvas.height);
}
function uploadSprite(){
    ctx.drawImage(car_tag,x,y,width,height);
}

window.addEventListener("keydown",key_down);

function key_down(e){
    keyEvent = e.keyCode;
    if (keyEvent == 38){
        up();
    }
    if (keyEvent == 40){
        down();
    }
    if (keyEvent == 39){
        right();
    }
    if (keyEvent == 37){
       left();
       console.log(y);
    }
}
function up(){
    y = y - 10;
    uploadBacground();
    uploadSprite();
    uploadEnymy()
}
function down(){
    y = y + 5;
    uploadBacground();
    uploadSprite();
    uploadEnymy()
}
function right(){
    x = x + 5;
    uploadBacground();
    uploadSprite();
    uploadEnymy();
}
function left(){
    x = x - 5;
    uploadBacground();
    uploadSprite();
    uploadEnymy();
}

setInterval(function enymy_move(){
    y2 = y2 - 5;
    uploadBacground();
    uploadSprite();
    uploadEnymy();
},50);

if (y <= 0){
    window.alert("You Won");
    console.log("alert");
}
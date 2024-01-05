let blueCar = document.getElementById("bluecar");
let userCar = document.getElementById("usercar");
let result = document.getElementById("result");
const score = document.getElementById("score");
var game = document.getElementById("game")
var counter = 0; 


blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random()*3))*130)
    blueCar.style.left=random + "px"
    counter++
}) 

window.addEventListener("keydown", function(e){
    if(e.keyCode=="39"||e.keyCode=="68"){
    var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
    if(userCarLeft<260){
         userCar.style.left = (userCarLeft+130)+"px"
        }
}
    if(e.keyCode=="37"||e.keyCode=="65"){
        var userCarLeft = parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));
        if(userCarLeft>0){
             userCar.style.left = (userCarLeft-130)+"px"
            }
    }
}
)

setInterval(function gameover(){
    var blueCarTop= parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"));
    var blueCarLeft= parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var userCarLeft= parseInt(window.getComputedStyle(userCar).getPropertyValue("left"));

    if((blueCarLeft===userCarLeft) && (blueCarTop>250) && (blueCarTop<450)){
      result.style.display="block";
      game.style.display="none";
      score.innerHTML='score:' + counter;

      counter=0;
    }
    }, 10)
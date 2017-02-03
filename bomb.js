var time= 30; //My display in seconds
var interval;
var wireColors = ["blue-wire", "green-wire", "white-wire", "red-wire", "yellow-wire"];
var successWire = null;

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
});

function tick(){
  time--;
  document.getElementById('timer').innerHTML = time;
  if(time < 10){
    document.getElementById('timer').style.color = "red";
  }
  if(time <= 0){
    clearInterval(interval);
    gameOver();
  }
}

function gameOver(){
  //explode background
  //remove the unexploded class from the body
  //add an exploded class to the body
  document.getElementsByTagName("body")[0].classList.remove("unexploded");
  document.getElementsByTagName("body")[0].classList.add("exploded");
}

function reset(){
  clearInterval(interval);
  time = 31;
  interval = setInterval(tick, 1000);

  function getGoodWire(){
    return getRandomInt(0,4);
  }

  successWire = wireColors[getGoodWire()];

  //reset images
  document.getElementsByTagName("body")[0].classList.remove("exploded");
  document.getElementsByTagName("body")[0].classList.add("unexploded");
  document.getElementById('timer').style.color = "green";
  for(var i =0; i< wireColors.length; i++){
    document.getElementById(wireColors[i]).src = "./img/uncut-" + wireColors[i] + ".png";
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function cutWire(param){
  param.src = "./img/cut-"+param.id+".png";
  if(param.id == successWire){
    alert('win!');
    reset();
  }else{
    console.log('wrong!');
  }
}

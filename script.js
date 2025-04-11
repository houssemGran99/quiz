

let questions = ["السؤال الأول : أذكر الشخصيات الرئيسية في النص",
  "السؤال الثاني : ما هو الموضوع الرئيسي للنص؟",
  "السؤال الثالث : ما هي الفكرة الفرعية التي يدور حولها النص؟",
  "العبرة من النص هي أن نتجنب قول أي شيء إلا إذا كان حقيقياً"
];

let hero = document.getElementById("hero")
let closePopupButton = document.querySelector("#closePopupButton");

closePopupButton.addEventListener("click", closePopup);

let index = 0;
let position = 0;
let game = true;
let level = 0

let jumpIndex = 0;

bgMusic = document.getElementById("backgroundMusic")

bgMusic.play();


let gameIntervale = setInterval(startGame, 60); 

function startGame(){


  if(game){
 
    bgMusic.play()
    console.log("game started");
  

  if(index >= 13){
    index = 0
  }
  
    if(position != 150 && position != 650 && position != 1150 && position != 1660){
      runHero();
      moveHeroForward();
    
  }else {
    
    bgMusic.pause()
    showPopup();
    pause();
    level++
} 


if (position >= 1800) {
  clearInterval(gameIntervale);
  console.log("Game interval cleared");
}

  index++
  }
}

function runHero(){
  if(index < 10){
    hero.setAttribute("src","/Transparent PNG/03_run/skeleton-03_run_0"+index+".png")
  }
  else{
    hero.setAttribute("src","/Transparent PNG/03_run/skeleton-03_run_"+index+".png")
  } 
}

function jumpHero(){
  hero.setAttribute("src","/Transparent PNG/04_jump/skeleton-04_jump_0"+jumpIndex+".png")
  jumpIndex++
}


function moveHeroForward() {
    position += 10; // Move 10px forward
    hero.style.left = position + "px"; // Update the 'left' style
    console.log(position);
}

function pause(){
  clearInterval(gameIntervale);
}


function showPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-overlay").style.display = "block";
  document.getElementById("question").innerHTML = questions[level]
  console.log("show popup")
}

function closePopup() {
  document.getElementById("popup").style.display = "none"
  document.getElementById("popup-overlay").style.display = "none"
  console.log("close popup");
  position+=10
  gameIntervale = setInterval(startGame, 60);
  
}



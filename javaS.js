"use strict";

let guess;
let count = 0;
let score = 5;
let clicks = 0;
let highScore = 0;

let min /*= 1 */;
let max /*= 20*/;

document.querySelector('.range1').addEventListener('click',function(){
  min=1;
  max=20;
  document.querySelector('.rangeText').textContent = 'EASY LEVEL';
});
document.querySelector('.range2').addEventListener('click',function(){
  min=1;
  max=50;
  document.querySelector('.rangeText').textContent = 'MEDIUM LEVEL';
});

document.querySelector('.range3').addEventListener('click',function(){
  min=1;
  max=100;
  document.querySelector('.rangeText').textContent = 'HARD LEVEL';
});


function guessnumber(max, min) {
  return Math.trunc(Math.random() * (max - min + 1)) + min;
}
function compare() {
  if (!guess) {
    guess = guessnumber(max, min);
  }
  let duplicate = Number(document.querySelector(".check_box").value);
  document.querySelector(".entered").textContent = duplicate;
  document.querySelector(".score").textContent = `Score : ${score}`;
  if (!duplicate) {
    document.querySelector(".texty2").textContent = "No number! ❌";
    document.querySelector(".texty").textContent = "😑";
  } else if (duplicate === guess) {
    updateStyles(
      "white",
      "white",
      "black",
      "2px 2px darkcyan, 3px 3px 4px darkcyan",
      "0.5vh 0.5vh 1vh 1vh darkcyan",
      "white",
      "darkcyan",
      "darkcyan",
      "darkcyan",
      "darkcyan",
      "grey",
      "2px solid black",
      "5vh"
    );

    count++;
    if (count === 1 || count === 2) {
      score += 2;
      if (score > highScore) {
        highScore = score;
        document.querySelector(
          ".highscore"
        ).textContent = `🏅 Highscore: ${highScore}`;
      }
      count++;
      document.querySelector(".texty2").textContent = "Whoa!, Correct guess.";
      document.querySelector(".texty").textContent = "😁";
      guess = guessnumber(max, min);
      document.querySelector(".score").textContent = `Score : ${score}`;
    } else if (count === 3) {
      score += 2;
      if (score > highScore) {
        highScore = score;
        document.querySelector(
          ".highscore"
        ).textContent = `🏅 Highscore: ${highScore}`;
      }
      count++;
      document.querySelector(".texty2").textContent =
        "Again and again you have a perfect GUESS!";
      document.querySelector(".texty").textContent = "😍";
      guess = guessnumber(max, min);
      document.querySelector(".score").textContent = `Score : ${score}`;
    } else if (count > 5) {
      score += 2;
      if (score > highScore) {
        highScore = score;
        document.querySelector(
          ".highscore"
        ).textContent = `🏅 Highscore: ${highScore}`;
      }
      count++;
      document.querySelector(".texty2").textContent =
        "Wow!, Keep going - More fun is waiting.";
      document.querySelector(".texty").textContent = "🫨";
      guess = guessnumber(max, min);
      document.querySelector(".score").textContent = `Score : ${score}`;
    }
    document.querySelector(".popup_bg").style.display = "flex";
    document.querySelector(".OKbtn").style.display = "block";
    document.querySelector("#popupText").textContent = `Exactly ${
      clicks + 1
    } tries`;
    clicks = 0;
  } else if (duplicate !== guess) {
    updateStyles(
      "rgb(33, 32, 32)",
      "rgba(0, 0, 0, 0)",
      "white",
      "blue",
      "0.5vh 0.5vh 1vh 1vh blue",
      "rgba(0, 0, 0, 0)",
      "blue",
      "blue",
      "blue",
      "blue",
      "rgba(0, 0, 0, 0.6)",
      "2px solid white",
      "5vh"
    );
    if (score < 0) {
      score = 0;
      document.querySelector(".score").textContent = `Score : ${score}`;
      document.querySelector(".texty2").textContent = "You lost the game!";
      document.querySelector(".texty").textContent = "😭";
      document.querySelector(".popup_bg").style.display = "flex";
      document.querySelector(".OKbtn").style.display = "block";
      document.querySelector(
        "#popupText"
      ).textContent = `Your score is ${highScore}`;
    } else if (score > 0) {
      score--;
      document.querySelector(".score").textContent = `Score : ${score}`;
      document.querySelector(".texty2").textContent = "Nope, try again!";
      document.querySelector(".texty").textContent = "😞";
    } else {
      let i = document.querySelector(".check_box").value;
      if (score == 0 && i) {
        let u = confirm("You have lost the game.");
        location.reload();
      }
    }

    document.querySelector(".score").textContent = `Score : ${score}`;
    if (Math.abs(duplicate - guess) <= 2) {
      clicks++;
      document.querySelector(".texty2").textContent = "📉 Close, but no cigar!";
      document.querySelector(".texty").textContent = "😕";
    } else if (Math.abs(duplicate - guess) <= 8) {
      clicks++;
      document.querySelector(".texty2").textContent = "📈 No is going farer";
      document.querySelector(".texty").textContent = "😒";
    } else {
      clicks++;
      document.querySelector(".texty2").textContent = "👀 Nope, try again!";
      document.querySelector(".texty").textContent = "😞";
    }
  }
}
function updateStyles(
  bodyBg,
  navBg,
  navColor,
  navTextShadow,
  headerBoxShadow,
  headerBg,
  checkBtnBg,
  checkBoxBg,
  playAgainBtnBg,
  enteredBg,
  middleBg,
  middleBorder,
  middleBorderRadius
) {
  document.querySelector("body").style.backgroundColor = bodyBg;
  document.querySelector(".nav").style.backgroundColor = navBg;
  document.querySelector(".nav").style.color = navColor;
  document.querySelector(".nav").style.textShadow = navTextShadow;
  document.querySelector("header").style.boxShadow = headerBoxShadow;
  document.querySelector("header").style.backgroundColor = headerBg;
  document.querySelector(".check_btn").style.backgroundColor = checkBtnBg;
  document.querySelector(".check_box").style.backgroundColor = checkBoxBg;
  document.querySelector(".playagain_btn").style.backgroundColor =
    playAgainBtnBg;
  document.querySelector(".entered").style.backgroundColor = enteredBg;
  document.querySelector(".middle").style.backgroundColor = middleBg;
  document.querySelector(".middle").style.border = middleBorder;
  document.querySelector(".middle").style.borderRadius = middleBorderRadius;
}
document.querySelector(".check_btn").addEventListener("click", function () {
  if (max || min) {
    compare();
  } else {
    document.querySelector(".popup_bg").style.display = "flex";
    document.querySelector(".OKbtn").style.display = "block";
    document.querySelector(
      "#popupText"
    ).textContent = `Please choose the RANGE! above.`;
    document.querySelector(".OKbtn").addEventListener("click", function () {
      location.reload();
    });
  }
});
document.querySelector(".OKbtn").addEventListener("click", function () {
  document.querySelector(".popup_bg").style.display = "none";
});
document.querySelector(".playagain_btn").addEventListener("click", function () {
  location.reload();
});

document.addEventListener('keydown', function(event){
  let hi = document.querySelector('.check_box').value;
  if(event.key === 'Enter'){
       if(hi !=0 ){
        if (max || min) {
          compare();
        } else {
          document.querySelector(".popup_bg").style.display = "flex";
          document.querySelector(".OKbtn").style.display = "block";
          document.querySelector(
            "#popupText"
          ).textContent = `Please choose the RANGE! above.`;
          document.querySelector(".OKbtn").addEventListener("click", function () {
            location.reload();
          });
        }
       }
  }
});


// alert(`${8+4*3-6/2+3**2/3*2-3}`);

// document.querySelector('.check_btn').addEventListener('click',function(){
//       let guess = Math.trunc(Math.random()*10)+1;

//     let duplicate = Number(document.querySelector('.check_box').value);
//     document.querySelector('.entered').textContent = duplicate;
//     document.querySelector('.score').textContent = 'Score : 0';
//     if(!duplicate){
//         document.querySelector( '.texty2').textContent= 'No number! ❌';
//         document.querySelector('.texty').textContent = '😑';
//     }else if(duplicate === guess){
//         document.querySelector('body').style.backgroundColor = 'white';
//         document.querySelector('.nav').style.backgroundColor = 'white';
//         document.querySelector('.nav').style.color = 'black';
//         document.querySelector('.nav').style.textShadow = '2px 2px darkcyan , 3px 3px 4px darkcyan';
//         document.querySelector('header').style.boxShadow = '0.5vh 0.5vh 1vh 1vh darkcyan';
//         document.querySelector('header').style.backgroundColor = 'white';
//         document.querySelector('.check_btn').style.backgroundColor = 'darkcyan';
//         document.querySelector('.check_box').style.backgroundColor = 'darkcyan';
//         document.querySelector('.playagain_btn').style.backgroundColor = 'darkcyan';
//         document.querySelector('.entered').style.backgroundColor = 'darkcyan';
//         document.querySelector('.middle').style.backgroundColor = 'grey';
//         document.querySelector('.middle').style.border='2px solid black';
//         document.querySelector('.middle').style.borderRadius = '5vh';

//         count++;
//         if(count ==1 || count == 2){
//         score +=2;
//         count++;
//         document.querySelector('.texty2').textContent = 'Whoa! , Correct guess.';
//         document.querySelector('.texty').textContent = '😁';
//         document.querySelector('.score').textContent = `Score : ${score}`;

//         }else if(count == 3){
//             score +=2;
//             count++;
//             document.querySelector('.texty2').textContent = 'Again and again you have a perfect GUESS!';
//             document.querySelector('.texty').textContent = '😍';
//             document.querySelector('.score').textContent = `Score : ${score}`;

//         }else if(count >5){
//             score +=2;
//             count++;
//             document.querySelector('.texty2').textContent = 'Wow! , Keep going - More fun is waiting.';
//             document.querySelector('.texty').textContent = '🫨';
//             document.querySelector('.score').textContent = `Score : ${score}`;
//         }
//     }else if(duplicate != guess){
//         document.querySelector('body').style.backgroundColor = 'rgb(33, 32, 32)';
//         document.querySelector('.nav').style.backgroundColor = 'rgba(0, 0, 0, 0)';
//         document.querySelector('.nav').style.color = 'white';
//         document.querySelector('.nav').style.textShadow = 'blue';
//         document.querySelector('header').style.boxShadow = '0.5vh 0.5vh 1vh 1vh blue';
//         document.querySelector('header').style.backgroundColor = 'rgba(0, 0, 0, 0)';
//         document.querySelector('.check_btn').style.backgroundColor = 'blue';
//         document.querySelector('.check_box').style.backgroundColor = 'blue';
//         document.querySelector('.playagain_btn').style.backgroundColor = 'blue';
//         document.querySelector('.entered').style.backgroundColor = 'blue';
//         document.querySelector('.middle').style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
//         document.querySelector('.middle').style.border='2px solid white';
//         document.querySelector('.middle').style.borderRadius = '5vh';

//         score-=1;
//         document.querySelector('.score').textContent = `Score : ${score}`;
//         if(duplicate-guess == 1 ||  guess-duplicate ==1 || guess-duplicate ==2 || duplicate-guess ==2){
//             document.querySelector('.texty2').textContent = '📉 Close, but no cigar!';
//             document.querySelector('.texty').textContent = '😕';
//         }else if(duplicate-guess <=8 ||  guess-duplicate <=8 || guess-duplicate >=3 || duplicate-guess >=3){
//             document.querySelector('.texty2').textContent = '📈 No is going farer';
//             document.querySelector('.texty').textContent = '😒';
//         }else{
//             document.querySelector('.texty2').textContent = '👀 Nope, try again!';
//             document.querySelector('.texty').textContent = '😞';
//         }

//     }
//     document.querySelector('.check_box').textContent = " ";
// });
// let count = 0;
//let score = 20;

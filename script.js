let playerScore = 0;
let computerScore = 0;

function start() {
  // hidden bs ef2os aaleh bykhtafa
  //visible byb2a mawjud
  document.getElementById("start").style.visibility = "hidden";
  document.getElementById("rock").style.visibility = "visible";
  document.getElementById("paper").style.visibility = "visible";
  document.getElementById("scissors").style.visibility = "visible";
}

const clickedHand = [
  "<img src='imgs/rock.png' id='img1'>",
  "<img src='imgs/paper.png' id='img1'>",
  "<img src='imgs/scissors.png' id='img1'>",
];

const clickedRightHand = [
  "<img src='imgs/rock.png' id='img2'>",
  "<img src='imgs/paper.png' id='img2'>",
  "<img src='imgs/scissors.png' id='img2'>",
];

function game(position) {
  // aam shaghl l animation bl hands 5 marat abl ma ya3tini lnatiji
  document.getElementById("hand1").innerHTML =
    "<img src='imgs/rock.png' id='img1'>";
  document.getElementById("hand2").innerHTML =
    "<img src='imgs/rock.png' id='img2'>";

  // 1s 5 yaeni kl senyi bytkarar 5 marat naw3u lltekrar smooth
  document.getElementById("img1").style.animation =
    "shakeLeft 1s 5 ease-in-out";
  document.getElementById("img2").style.animation =
    "shakeRight 1s 5 ease-in-out";

  // lcomputer bykhtar shi randomly yaeni iza rock or paper or scissors
  var random = Math.floor(Math.random() * 3);

  setTimeout(() => {
    // Update both hands with the actual chosen images
    document.getElementById("hand1").innerHTML = clickedHand[position]; // Player's choice
    document.getElementById("hand2").innerHTML = clickedRightHand[random]; // Computer's choice
  }, 5000); // 5000 yaeni nafez lcode after 5 seconds

  setTimeout(() => {
    // Determine and display the result
    if (random === position) {
      alert("MATCH DRAW !!");
    } else if (
      (position === 0 && random === 2) ||
      (position === 1 && random === 0) ||
      (position === 2 && random === 1)
    ) {
      alert("YOU ARE WINNER, GOOD JOB !!");
      playerScore++;
    } else {
      alert(" OOps COMPUTER IS WINNER, TRY NEXT TIME !!");
      computerScore++;
    }
    // update llscore bl page
    document.getElementById(
      "scoreboard"
    ).innerHTML = `Player: ${playerScore} &nbsp;&nbsp; | &nbsp;&nbsp; Computer: ${computerScore}`;
  }, 5500);
}

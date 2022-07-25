//UI
const minium = document.querySelector(".minnumber"),
  maxnum = document.querySelector(".maxnumber"),
  getinput = document.querySelector("#guessnumber"),
  getbtn = document.querySelector("#btn"),
  message1 = document.querySelector(".message1"),
  message2 = document.querySelector(".message2"),
  getgame = document.querySelector("#game");

let min = 1,
  max = 10,
  gameleft = 3,
  winningnum = randomnum(min, max);

minium.textContent = min;
maxnum.innerText = max;

getbtn.addEventListener("click", function () {
  // console.log(getinput.value);
  // console.log(typeof getinput.value);
  //let guess=Number(getinput.value);
  // let guess=+getinput.value;

  let guess = parseInt(getinput.value);
  // console.log(guess);

  //  console.log(typeof guess);

  if (guess < min || guess > max || isNaN(guess)) {
    // alert(`please enter a number between ${min} to ${max}`);
    // message2.textContent=`please enter a number between ${min} to ${max}`;
    sentmessage2(`please enter a number between ${min} to ${max}`, "red");
  }

  if (guess === winningnum) {
    //Gameover Won
    //disable getinput
    getinput.disabled = "true";

    //getinput bordercolor to green
    getinput.style.borderColor = "green";

    //message1
    // message1.textContent=`${winningnum} is correct!!!!!,YOU WIN`;
    // message1.style.color="green";
    // sentmessage1(`${winningnum} is correct!!!!!,YOU WIN`,"green");

    //playagain?
    // getbtn.value="Play again";
    gameover(true, `${winningnum} is correct!!!!!,YOU WIN`);
  } else {
    //Wrong Number
    //gameleft--;
    gameleft -= 1;
    // console.log(gameleft);

    if (gameleft === 0) {
      //Gameover LOSE
      //disable getinput
      getinput.disabled = "true";

      //getinput bordercolor to red
      getinput.style.borderColor = "red";

      //message1
      // message1.textContent=`Game Over.You Lost.The correct number is ${winningnum}`;
      // message1.style.color="red";
      // sentmessage1(`Game Over.You Lost.The correct number is ${winningnum}`,"red");

      //playagain?
      // getbtn.value="Play again";
      gameover(false, `Game Over.You Lost.The correct number is ${winningnum}`);
    } else {
      //Continue Game
      //getinput bordercolor to red
      getinput.style.borderColor = "red";

      //clear getinput old value
      getinput.vlaue = "";

      //message1
      // message1.innerText=`${guess} is not correct,${gameleft} chance left`;
      // message1.style.color="blue";
      sentmessage1(`${guess} is not correct,${gameleft} chance left`, "blue");
    }
  }
});
// Message
function sentmessage1(msg, color) {
  message1.textContent = msg;
  message1.style.color = color;
}

function sentmessage2(msg, color) {
  message2.textContent = msg;
  message2.style.color = color;
  setTimeout(function () {
    message2.innerText = "";
  }, 2000);
}

//Game Over

function gameover(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //getinput disabled
  getinput.disabled = "true";

  //getinput border color to green or red
  getinput.style.borderColor = color;

  //message1
  sentmessage1(msg, color);

  //play again?
  getbtn.value = "Play Again";

  //add class name
  //getbtn.className="btn playagain";
  getbtn.classList.add("playagain");
}

getgame.addEventListener("mouseup", function (e) {
  //console.log(e.target);
  if (e.target.className === "btn playagain") {
    //conosle.log("i am playing btn");
    window.location.reload();
  }
});

//For Winning number
function randomnum(min, max) {
  //                                      10 -1+1
  let getrdm = Math.floor(Math.random() * (max - min) + 1);
  //  console.log(getrdm);
  return getrdm;
}


function showPCgame () {
    document.getElementById("gamePC_container").style.display = "flex";
    document.getElementById("buttons_container").style.display = "none";
}

const PCButtonEl = document.getElementById("PC_button");
PCButtonEl.addEventListener("click", () => {
    showPCgame ()
});

function showPPgame () {
    document.getElementById("gamePP_container").style.display = "flex";
    document.getElementById("buttons_container").style.display = "none";
}

const PPButtonEl = document.getElementById("PP_button");
PPButtonEl.addEventListener("click", () => {
    showPPgame ()
});

function showCCgame () {
    document.getElementById("gameCC_container").style.display = "flex";
    document.getElementById("buttons_container").style.display = "none";
}

const CCButtonEl = document.getElementById("CC_button");
CCButtonEl.addEventListener("click", () => {
    showCCgame ()
});

const gameRules = {
    stone: {
      scissors: -1,
      paper: 1,
    },
    scissors: {
      stone: 1,
      paper: -1,
    },
    paper: {
      stone: -1,
      scissors: 1,
    },
  };

let computerMathResult = "";
function computerChoise() {
  const computerMathCoise = Math.floor(Math.random() * 3);
  if (computerMathCoise === 1) {
    const mainIcon2 = document.getElementById("player2_main-icon");
    mainIcon2.setAttribute("src", "images/stone-icon.png");
    computerMathResult = "stone";
    return computerMathResult;
  } else if (computerMathCoise === 2) {
    const mainIcon2 = document.getElementById("player2_main-icon");
    mainIcon2.setAttribute("src", "images/scissors-icon.png");
    computerMathResult = "scissors";
    return computerMathResult;
  } else {
    const mainIcon2 = document.getElementById("player2_main-icon");
    mainIcon2.setAttribute("src", "images/paper-icon.png");
    computerMathResult = "paper";
    return computerMathResult;
  }
}
let player1Result = 0;
let player2Result = 0;
function playGame(player1, player2) {
  if (player1.value == player2.value) {
    return {
      player1,
      player2,
      result: `<p>Draw!</p>
    <p>The score is ${player1Result} : ${player2Result}.</p>`,
    };
  }
  const rules = gameRules[player1.value];
  const gameResult = rules[player2.value];

  if (gameResult === -1) {
    player1Result++;
    return {
      player1,
      player2,
      result: `<p>You win!</p><p>The score is ${player1Result} : ${player2Result}.</p>`,
    };
  }
  player2Result++;
  return {
    player1,
    player2,
    result: `<p>Computer wins!</p><p>The score is ${player1Result} : ${player2Result}.</p>`,
  };
}


const stoneEl = document.getElementById("stone");
const scissorsEl = document.getElementById("scissors");
const paperEl = document.getElementById("paper");
const resultEl = document.getElementById("winnerText");

stoneEl.addEventListener("click", () => {
  const gameResult = playGame(
    { value: "stone", score: 0 },
    { value: computerChoise(), score: 0 }
  );
  const mainIcon1 = document.getElementById("player1_main-icon");
  mainIcon1.setAttribute("src", "images/stone-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

scissorsEl.addEventListener("click", () => {
  const gameResult = playGame(
    { value: "scissors", score: 0 },
    { value: computerChoise(), score: 0 }
  );
  const mainIcon1 = document.getElementById("player1_main-icon");
  mainIcon1.setAttribute("src", "images/scissors-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

paperEl.addEventListener("click", () => {
  const gameResult = playGame(
    { value: "paper", score: 0 },
    { value: computerChoise(), score: 0 }
  );
  const mainIcon1 = document.getElementById("player1_main-icon");
  mainIcon1.setAttribute("src", "images/paper-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});



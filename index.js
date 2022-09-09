const resultEl = document.getElementById("winnerText");
const gameCCButtonEl = document.getElementById("gameCC_button");
const gamePPButtonEl = document.getElementById("gamePP_button");
const winnerName = document.getElementById("game-winner_name")
let player1Result = 0;
let player2Result = 0;
let player1Choice = "";
let player2Choice = "";
function showModeTable() {
  document.getElementById("gamePC_container").style.display = "none";
  document.getElementById("gamePP_container").style.display = "none";
  document.getElementById("gameCC_container").style.display = "none";
  document.getElementById("mode_button").style.display = "none";
  document.getElementById("buttons_container").style.display = "flex";
  winnerName.style.display = "none";
  resultEl.innerText = "";
  resultEl.style.opacity = 0;
  const Pl1MainIcon = document.getElementById("player_main-icon");
  const mainIcon1 = document.getElementById("comp_main-icon1");
  const mainIcon2 = document.getElementById("comp_main-icon2");
  const mainIcon3 = document.getElementById("comp_main-icon3");
  Pl1MainIcon.setAttribute("src", "images/question-mark.png");
  mainIcon1.setAttribute("src", "images/question-mark.png");
  mainIcon2.setAttribute("src", "images/question-mark.png");
  mainIcon3.setAttribute("src", "images/question-mark.png");
  const mainIconPP1 = document.getElementById("player1PP_main-icon");
  const mainIconPP2 = document.getElementById("player2PP_main-icon");
  mainIconPP1.setAttribute("src", "images/question-mark.png");
  mainIconPP2.setAttribute("src", "images/question-mark.png");
  gameCCButtonEl.innerText = "Start the game";
  gamePPButtonEl.innerText = "Battle!";
  player1Result = 0;
  player2Result = 0;
}

const modeButtonEl = document.getElementById("mode_button");
modeButtonEl.addEventListener("click", () => {
  showModeTable();
});

function showPCgame() {
  document.getElementById("gamePC_container").style.display = "flex";
  document.getElementById("mode_button").style.display = "flex";
  document.getElementById("buttons_container").style.display = "none";
  winnerName.style.display = "flex";
  winnerName.innerHTML = "";
  resultEl.style.opacity = 100;
}

const PCButtonEl = document.getElementById("PC_button");
PCButtonEl.addEventListener("click", () => {
  showPCgame();
});

function showPPgame() {
  document.getElementById("gamePP_container").style.display = "flex";
  document.getElementById("mode_button").style.display = "flex";
  document.getElementById("buttons_container").style.display = "none";
  winnerName.style.display = "flex";
  winnerName.innerHTML = "";
  resultEl.style.opacity = 100;
}

const PPButtonEl = document.getElementById("PP_button");
PPButtonEl.addEventListener("click", () => {
  showPPgame();
});

function showCCgame() {
  document.getElementById("gameCC_container").style.display = "flex";
  document.getElementById("mode_button").style.display = "flex";
  document.getElementById("buttons_container").style.display = "none";
  winnerName.style.display = "flex";
  winnerName.innerHTML = "";
  resultEl.style.opacity = 100;
}

const CCButtonEl = document.getElementById("CC_button");
CCButtonEl.addEventListener("click", () => {
  showCCgame();
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

const generateRandomChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return ["stone", "scissors", "paper"][randomNumber];
};

const renderChoice = (id, choice = "stone") => {
  const img = document.getElementById(id);
  img.setAttribute("src", `images/${choice}-icon.png`);
};
function endGame() {
  if (player1Result === 3) {
    document.getElementById("gamePC_container").style.display = "none";
    document.getElementById("gamePP_container").style.display = "none";
    document.getElementById("gameCC_container").style.display = "none";
    resultEl.innerText = "";
    resultEl.style.opacity = 0;
    winnerName.innerHTML = "The winner is Player 1!"
  }
  if (player2Result === 3) {
    const mainContainer = document.getElementById("main_container");
    document.getElementById("gamePC_container").style.display = "none";
    document.getElementById("gamePP_container").style.display = "none";
    document.getElementById("gameCC_container").style.display = "none";
    resultEl.innerText = "";
    resultEl.style.opacity = 0;
    winnerName.innerHTML = "The winner is Player 2!"
  }
}

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
    endGame();
    return {
      player1,
      player2,
      result: `<p>Player 1 wins!</p><p>The score is ${player1Result} : ${player2Result}.</p>`,
    };
  }
  player2Result++;
  endGame();
  return {
    player1,
    player2,
    result: `<p>Player 2 wins!</p><p>The score is ${player1Result} : ${player2Result}.</p>`,
  };
}

const stoneEl = document.getElementById("stone");
const scissorsEl = document.getElementById("scissors");
const paperEl = document.getElementById("paper");

stoneEl.addEventListener("click", () => {
  const compChoice = generateRandomChoice();
  renderChoice("comp_main-icon1", compChoice);
  const gameResult = playGame(
    { value: "stone", score: 0 },
    { value: compChoice, score: 0 }
  );
  const mainIcon1 = document.getElementById("player_main-icon");
  mainIcon1.setAttribute("src", "images/stone-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

scissorsEl.addEventListener("click", () => {
  const compChoice = generateRandomChoice();
  renderChoice("comp_main-icon1", compChoice);
  const gameResult = playGame(
    { value: "scissors", score: 0 },
    { value: compChoice, score: 0 }
  );
  const mainIcon1 = document.getElementById("player_main-icon");
  mainIcon1.setAttribute("src", "images/scissors-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

paperEl.addEventListener("click", () => {
  const compChoice = generateRandomChoice();
  renderChoice("comp_main-icon1", compChoice);
  const gameResult = playGame(
    { value: "paper", score: 0 },
    { value: compChoice, score: 0 }
  );
  const mainIcon1 = document.getElementById("player_main-icon");
  mainIcon1.setAttribute("src", "images/paper-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

const stoneElP1 = document.getElementById("stone_p1");
const stoneElP2 = document.getElementById("stone_p2");
const scissorsElP1 = document.getElementById("scissors_p1");
const scissorsElP2 = document.getElementById("scissors_p2");
const paperElP1 = document.getElementById("paper_p1");
const paperElP2 = document.getElementById("paper_p2");

stoneElP1.addEventListener("click", () => {
  const mainIcon1 = document.getElementById("player1PP_main-icon");
  mainIcon1.setAttribute("src", "images/stone-icon.png");
  player1Choice = "stone";
});

scissorsElP1.addEventListener("click", () => {
  const mainIcon1 = document.getElementById("player1PP_main-icon");
  mainIcon1.setAttribute("src", "images/scissors-icon.png");
  player1Choice = "scissors";
});

paperElP1.addEventListener("click", () => {
  const mainIcon1 = document.getElementById("player1PP_main-icon");
  mainIcon1.setAttribute("src", "images/paper-icon.png");
  player1Choice = "paper";
});

stoneElP2.addEventListener("click", () => {
  const mainIcon2 = document.getElementById("player2PP_main-icon");
  mainIcon2.setAttribute("src", "images/stone-icon.png");
  player2Choice = "stone";
});

scissorsElP2.addEventListener("click", () => {
  const mainIcon2 = document.getElementById("player2PP_main-icon");
  mainIcon2.setAttribute("src", "images/scissors-icon.png");
  player2Choice = "scissors";
});

paperElP2.addEventListener("click", () => {
  const mainIcon2 = document.getElementById("player2PP_main-icon");
  mainIcon2.setAttribute("src", "images/paper-icon.png");
  player2Choice = "paper";
});

gamePPButtonEl.addEventListener("click", () => {
  const comp1 = generateRandomChoice();
  const comp2 = generateRandomChoice();

  renderChoice("comp_main-icon2", comp1);
  renderChoice("comp_main-icon3", comp2);

  const gamePPResult = playGame(
    { value: player1Choice, score: 0 },
    { value: player2Choice, score: 0 }
  );
  gamePPButtonEl.innerText = "fight again";
  console.log(gamePPResult);
  resultEl.innerHTML = gamePPResult.result;
});

gameCCButtonEl.addEventListener("click", () => {
  const comp1 = generateRandomChoice();
  const comp2 = generateRandomChoice();

  renderChoice("comp_main-icon2", comp1);
  renderChoice("comp_main-icon3", comp2);

  const gameCCResult = playGame(
    { value: comp1, score: 0 },
    { value: comp2, score: 0 }
  );
  gameCCButtonEl.innerText = "once more";
  console.log(gameCCResult);
  resultEl.innerHTML = gameCCResult.result;
});

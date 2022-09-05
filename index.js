const resultEl = document.getElementById("winnerText");
const gameCCButtonEl = document.getElementById("gameCC_button");
let player1Result = 0;
let player2Result = 0;
function showModeTable() {
  document.getElementById("gamePC_container").style.display = "none";
  document.getElementById("gamePP_container").style.display = "none";
  document.getElementById("gameCC_container").style.display = "none";
  document.getElementById("buttons_container").style.display = "flex";
  resultEl.innerText = "";
  resultEl.style.opacity = 0;
  const Pl1MainIcon = document.getElementById("player1_main-icon");
  const mainIcon1 = document.getElementById("comp_main-icon1");
  const mainIcon2 = document.getElementById("comp_main-icon2");
  const mainIcon3 = document.getElementById("comp_main-icon3");
  Pl1MainIcon.setAttribute("src", "images/question-mark.png");
  mainIcon1.setAttribute("src", "images/question-mark.png");
  mainIcon2.setAttribute("src", "images/question-mark.png");
  mainIcon3.setAttribute("src", "images/question-mark.png");
  gameCCButtonEl.innerText = "Start the game";
  player1Result = 0;
  player2Result = 0;
}

const ModeButtonEl = document.querySelectorAll(".mode_button");
ModeButtonEl.forEach((b) =>
  b.addEventListener("click", () => {
    showModeTable();
  })
);

function showPCgame() {
  document.getElementById("gamePC_container").style.display = "flex";
  document.getElementById("buttons_container").style.display = "none";
  resultEl.style.opacity = 100;
}

const PCButtonEl = document.getElementById("PC_button");
PCButtonEl.addEventListener("click", () => {
  showPCgame();
});

function showPPgame() {
  document.getElementById("gamePP_container").style.display = "flex";
  document.getElementById("buttons_container").style.display = "none";
  resultEl.style.opacity = 100;
}

const PPButtonEl = document.getElementById("PP_button");
PPButtonEl.addEventListener("click", () => {
  showPPgame();
});

function showCCgame() {
  document.getElementById("gameCC_container").style.display = "flex";
  document.getElementById("buttons_container").style.display = "none";
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

stoneEl.addEventListener("click", () => {
  const compChoice = generateRandomChoice();
  renderChoice("comp_main-icon1", compChoice)
  const gameResult = playGame(
    { value: "stone", score: 0 },
    { value: compChoice, score: 0 }
  );
  const mainIcon1 = document.getElementById("player1_main-icon");
  mainIcon1.setAttribute("src", "images/stone-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

scissorsEl.addEventListener("click", () => {
  const compChoice = generateRandomChoice();
  renderChoice("comp_main-icon1", compChoice )
  const gameResult = playGame(
    { value: "scissors", score: 0 },
    { value: compChoice, score: 0 }
  );
  const mainIcon1 = document.getElementById("player1_main-icon");
  mainIcon1.setAttribute("src", "images/scissors-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

paperEl.addEventListener("click", () => {
  const compChoice = generateRandomChoice();
  renderChoice("comp_main-icon1", compChoice )
  const gameResult = playGame(
    { value: "paper", score: 0 },
    { value: compChoice, score: 0 }
  );
  const mainIcon1 = document.getElementById("player1_main-icon");
  mainIcon1.setAttribute("src", "images/paper-icon.png");
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

gameCCButtonEl.addEventListener("click", () => {
  const comp1 = generateRandomChoice();
  const comp2 = generateRandomChoice();

  renderChoice("comp_main-icon2", comp1);
  renderChoice("comp_main-icon3", comp2);

  const gameResult = playGame(
    { value: comp1, score: 0 },
    { value: comp2, score: 0 }
  );
  gameCCButtonEl.innerText = "once more";
  console.log(gameResult);
  resultEl.innerHTML = gameResult.result;
});

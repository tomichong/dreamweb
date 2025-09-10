let score = 0;
let curr_question = -1;

const questions = [
  {
    prompt: "What does my dream house look like?",

    img1_path: "data/penthouse.jpg",
    img1_desc: "Penthouse in New York",
    option1: "Modern penthouse suite",

    img2_path: "data/cabin.jpg",
    img2_desc: "Cabin in Switzerland",
    option2: "Cosy cabin in the mountains",

    answer: 1,
  },
  {
    prompt: "Which concert do I dream of going to?",

    img1_path: "data/joe_hisaishi.webp",
    img1_desc: "Joe Hisaishi Orchestra",
    option1: "Joe Hisaishi Orchestra",

    img2_path: "data/tyler_the_creator.jpg",
    img2_desc: "Tyler the Creator Concert",
    option2: "Tyler the Creator Concert",

    answer: 1,
  },
  {
    prompt: "Which is my dream car?",

    img1_path: "data/dodge_hellcat.webp",
    img1_desc: "Dodge Hellcat",
    option1: "Dodge Hellcat",

    img2_path: "data/merc_sls.jpg",
    img2_desc: "Mercedes SLS AMG",
    option2: "Mercedes SLS AMG",

    answer: 2,
  },
  {
    prompt: "What is my dream vacation?",

    img1_path: "data/beach_resort.jpg",
    img1_desc: "Beach Resort",
    option1: "Beach Resort",

    img2_path: "data/mountain_retreat.jpg",
    img2_desc: "Mountain Retreat",
    option2: "Mountain Retreat",

    answer: 1,
  },
  {
    prompt: "What would my dream night out look like?",

    img1_path: "data/party_in_ibiza.webp",
    img1_desc: "Party in Ibiza",
    option1: "Party in Ibiza",

    img2_path: "data/stargazing.webp",
    img2_desc: "Stargazing with dad",
    option2: "Stargazing with dad",

    answer: 2,
  },
]

const score_messages = [
  "You dont know me at all...",
  "Was that just a lucky guess?",
  "Not bad but not great either",
  "We need to hangout more for sure",
  "I'd consider you a friend",
  "We must be related by blood"
]

function startGame() {
  // display the game and reset button and remove start button
  document.getElementById("game").style.display = "inline";
  document.getElementById("reset").style.display = "inline";
  document.getElementById("start_game").style.display = "none";
  curr_question = 0;
  score = 0;
  loadQuestion();
}

function resetGame() {
  // basically the opposite of start game
  document.getElementById("game").style.display = "none";
  document.getElementById("reset").style.display = "none";
  document.getElementById("start_game").style.display = "inline";
  document.getElementById("score_screen").style.display = "none";
  curr_question = -1;
  score = 0;
}

function loadQuestion() {
  let next = questions[curr_question];
  document.getElementById("prompt_message").innerHTML = next.prompt;

  document.getElementById("image1").src = next.img1_path;
  document.getElementById("image1").alt = next.img1_desc;
  document.getElementById("option1").innerHTML = next.option1;

  document.getElementById("image2").src = next.img2_path;
  document.getElementById("image2").alt = next.img2_desc;
  document.getElementById("option2").innerHTML = next.option2;
}

function optionSelected(choice) {
  // check if answer is correct
  let answer = questions[curr_question].answer;
  if (choice == answer) {
    score += 1;
  }

  curr_question += 1;
  // check if last question has been reached
  if (curr_question >= questions.length) {

    // stop showing game section
    document.getElementById("game").style.display = "none";
    document.getElementById("start_game").style.display = "none";

    // setup section for end score screen
    document.getElementById("score").innerHTML = score + "/" + questions.length + "  !!!";
    document.getElementById("score_message").innerHTML = score_messages[score];

    // display it
    document.getElementById("score_screen").style.display = "inline";

    // allow user to reset game to replay it
    document.getElementById("reset").style.display = "inline";
  } else {
    // display next question
    loadQuestion();
  }

}


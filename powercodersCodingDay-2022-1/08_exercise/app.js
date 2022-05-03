// ## Team work

// Build a simple quiz in HTML, CSS and JavaScript.
// Add at least 5 questions to your quiz. Each question has 3-4 possible answers, where only 1 is correct.
// The questions should be about something you learned during the Powercoders bootcamp.

// Minimum features:
// - show the questions in random order one after the other in the HTML
// - let the user select an answer and give immediate feedback (right or wrong)
// - let the user go to the next question
// - at the end of the quiz show the score and give a message depending on the score (e.g. You are a genius / You seem to have a bad day)

// What to think of:
// - design: how does it look like / does it work on mobile? get some ideas online.
// - additional features: can you make it more fun or easier to use?
// - how to make the quiz semantically correct

// Team work:
// - discuss together what you have to do
// - split the tasks (in pairs or single responsibles)
// - put your code together and on GitHub
// - present your quiz at the end of the day (5 to 10 min per group / every team member has to say something)

// Estimated time: 2 hours 30 minutes <br>
// plus presentation: 5 to 10 minutes <br>
// Total points: 280

const questions = [
  {
    question: "DNS represents: ",
    options: [
      "Data Navigation System",
      "Domain Name System",
      "Data Netting System",
      "All",
    ],
    answer: "Domain Name System",
  },
  {
    question: "Which one of the following is not the other name of CLI?",
    options: [
      "Graphic User Interface",
      "Terminal",
      "Command Prompt",
      "Console",
    ],
    answer: "Graphic User Interface",
  },
  {
    question:
      "Which one of the following enables you to see in which directory you are in?",
    options: ["li", "mkdir", "pwd", "Cd"],
    answer: "pwd",
  },
  {
    question: "Which git command transform any folder into git repository?",
    options: ["git status", "git clone", "git init", "git pull"],
    answer: "git init",
  },
  {
    question: "Which command line can you use to copy file?",
    options: ["rm", "cp", "cd", "All"],
    answer: "rm",
  },
];


let counter = 0;
let length = questions.length;
let shuffledArray = [];
for (let index = 0; index < length; index++) {
  let randomNumber = Math.floor(Math.random() * (questions.length - 1));

  shuffledArray.push(questions[randomNumber]);
  questions.splice(randomNumber, 1);
}

let renderIndex = 0;

function renderQuestion(renderIndex) {
  const section = document.getElementById("question");
  let item = shuffledArray[renderIndex];
  section.innerHTML = `
    <h2>${item.question}</h2>
    <ul>
        <li onclick="onClick(event)"> ${item.options[0]} </li>
        <li onclick="onClick(event)"> ${item.options[1]} </li>
        <li onclick="onClick(event)"> ${item.options[2]} </li>
        <li onclick="onClick(event)"> ${item.options[3]} </li>
    </ul>
    `;
}

let element = document.getElementById("button");

renderQuestion(renderIndex);

element.addEventListener("click", () => {
  renderIndex++;
  renderQuestion(renderIndex);
});


const onClick = (event) => {
  let selectedItem = event.srcElement.innerText;
  if(selectedItem == shuffledArray[renderIndex].answer){
      counter++
      let element = document.getElementById("counter");
      element.innerText = counter;
  }
};

// function checkAnswer(e) {

//     selectedOption = e.event.target.value;

//     if(selectedOption == shuffledArray[index].answer){
//         return true;
//     }else{
//         return false;
//     }

// }

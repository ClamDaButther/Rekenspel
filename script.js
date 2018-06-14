const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const startButton = document.getElementById('startButton');
const assignmentsDiv = document.getElementById('assignmentsDiv');
const userAnswerDiv = document.getElementById('userAnswerDiv');
const correctAnswerDiv = document.getElementById('correctAnswerDiv');
const wrapper = document.getElementById('wrapper');
const answers = document.getElementById('answers');

var mySum;
var counter;

var assignments = [];
var correctAnswer = [];
var userAnswer = [];

assignmentsDiv.style.display = "inline-block";
userAnswerDiv.style.display = "inline-block";
correctAnswerDiv.style.display = "inline-block";

myInput.disabled = true;
myInput.value = "";

myInput.addEventListener('keydown', function inputHandler(evt) {
  if(evt.keyCode == 13) {
    counter += 1;
    if(counter == 11) {
      startButton.disabled = false;
      myInput.disabled = true;
      myInput.value = "";

      let vraagText = document.createTextNode("Vraag");
      assignmentsDiv.appendChild(vraagText);
      assignmentsDiv.appendChild(createBR());

      for (var i = 0; i < assignments.length; i++) {
        let text = document.createTextNode(assignments[i]);
        assignmentsDiv.appendChild(text);
        assignmentsDiv.appendChild(createBR());
      }

      let goedAntwoordText = document.createTextNode("Goed antwoord");
      correctAnswerDiv.appendChild(goedAntwoordText);
      correctAnswerDiv.appendChild(createBR());

      for (var i = 0; i < correctAnswer.length; i++) {
        let text = document.createTextNode(correctAnswer[i]);
        correctAnswerDiv.appendChild(text);
        correctAnswerDiv.appendChild(createBR());
      }

      let jouwAntwoordText = document.createTextNode("Jouw antwoord");
      userAnswerDiv.appendChild(jouwAntwoordText);
      userAnswerDiv.appendChild(createBR());

      for (var i = 0; i < userAnswer.length; i++) {
        let text = document.createTextNode(userAnswer[i]);
        userAnswerDiv.appendChild(text);
        userAnswerDiv.appendChild(createBR());
      }

    } else {
      correctAnswer.push(eval(mySum));
      assignments.push(mySum);
      userAnswer.push(myInput.value);

      console.log(assignments);
      console.log(correctAnswer);
      console.log(userAnswer);
      createSum();
    }
  }
}, false);


function createSum() {
  let a = Math.floor(Math.random() * 9 + 1);
  let b = Math.floor(Math.random() * 9 + 1);

  mySum = a + " * " + b;

  myAssignment.innerHTML = mySum;
  myInput.value = "";
  myInput.focus();
}

startButton.addEventListener('click', function() {
  counter = 0;
  startButton.disabled = true;
  myInput.disabled = false;
  assignmentsDiv.innerHTML = "";
  correctAnswerDiv.innerHTML = "";
  userAnswerDiv.innerHTML = "";
  createSum();
});

function createBR() {
  let br = document.createElement('BR');
  return br;
}

var options = [
	"Definitely cap",
	"Smells like cap", 
	"He seems to be balding",
	"That's a cap and a half",
	"Cap",
	"CAP",
	"He's capping hard",
	"He's not capping"
];

var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");

button.addEventListener("click", function(){
  if (input.value.length < 1) {
    alert("Please enter a question!");
  } else {
    eight.innerText = "";
    var num = Math.floor(Math.random() * options.length);
    answer.innerText = options[num];
  }
});
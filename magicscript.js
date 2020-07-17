var options = [
	"Definitely cap",
	"Smells like cap", 
	"He seems to be balding",
	"That's a cap and a half",
	"Cap",
	"CAP",
	"C A P",
	"That's a motha fuckin' cap",
	"1000% cap",
	"Cappers are rampant",
	"He's capping hard",
	"He's not capping",
	"*sniffs*",
	"That's cap",
	"Smells like cap",
	"🧢"
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
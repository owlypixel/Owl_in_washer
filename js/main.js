const pwrbtn = document.querySelector(".dial");
const outer = document.querySelector(".outer");
const veins = document.querySelectorAll(".veins");
const wordcontainer = document.querySelector(".words");
const door = document.querySelector(".door");
const owl = document.querySelector(".owl");
const lwing = document.querySelector(".lwing");
const rwing = document.querySelector(".rwing");
const leye = document.querySelector(".leye");
const reye = document.querySelector(".reye");
const bubble = document.querySelector(".bubble");

console.log(veins);

hideVeins();
function hideVeins(){
	veins.forEach(vein => {
		vein.style.display = "none";
	});
}
function graduallyHideVeins(){
	veins.forEach(vein => {
		vein.style.opacity = 0;
	});
}

// defining phrases for an owl
const words = [
	"Hey!",
	"Can anybody hear me?",
	"They forgot me here",
	"Let me out!",
	"I'm scared",
	"I'm stuck here"
]

// what happens when someone presses the button
// gracefully start and stop animation of the dial
var running = false;
pwrbtn.addEventListener('click', function(e){
	cancelAnimations(leye, reye);
	this.classList.toggle('active');
	if(!running){
		start();
		running = true;
	}
	owl.classList.add('rotate');
	setTimeout(function(){
		googleyEyes();
		showVeins(veins);
		// veins.forEach(vein => {
		// 	vein.style.display = "block";
		// });
	}, 2000);
	owl.addEventListener('animationend', function(e){
		console.log('ended');
		stop();
		graduallyHideVeins();
		leye.classList.remove("googley");
		reye.classList.remove("googley");
		owl.classList.remove("rotate");
	});
})

function start() {
	outer.classList.add('active');
}

function stop() {
  outer.addEventListener('animationiteration', callback);
  running = false;

  function callback() {
    outer.classList.remove('active');
    outer.removeEventListener('animationiteration', callback);
  }
}

// making an owl shout the words 
wordcontainer.innerHTML = words[0];
var counter = 0;
var shouting = setInterval(function(){
	var randWord = words[Math.floor(words.length * Math.random())];
	wordcontainer.innerHTML = randWord;
	counter++;
	if(counter >= words.length){
		counter = 0;
	}
}, 3000);

// what happens when someone opens the door
door.addEventListener('click', function(e){
	bubble.addEventListener('animationiteration', function(){
		wordcontainer.innerHTML = 'Oh, finally, Thanks!';
		setInterval(function(){
			bubble.style.display = 'none';
		}, 2500);
		owl.classList.remove('rotate');
		owl.classList.add('free');
	});

	clearInterval(shouting);
	this.classList.add('open');
	rwing.classList.add('rflitter');
	lwing.classList.add('lflitter');
});

function googleyEyes(){
	console.log("eyes added");
	leye.classList.add("googley");
	reye.classList.add("googley");
}
function showVeins(vein){
	vein.forEach(vein => {
		vein.style.opacity = 1;
		vein.style.display = "block";
	});
}

function cancelAnimations(el){
	console.log("veins added");
	for (var i = 0; i < arguments.length; i++) {
	    arguments[i].style.animation = 0;
	}
}







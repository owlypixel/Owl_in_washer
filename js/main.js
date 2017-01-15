const pwrbtn = document.querySelector(".dial");
const outer = document.querySelector(".outer");

//gracefully start and stop animation of the dial
var running = false;
pwrbtn.addEventListener('click', function(e){
	this.classList.toggle('active');
	if(running){
		stop();
		running = false;
	} else {
		start();
		running = true;
	}
})

function start() {
	outer.classList.add('active');
}

function stop() {
  outer.addEventListener('animationiteration', callback);

  function callback() {
    outer.classList.remove('active');
    outer.removeEventListener('animationiteration', callback);
  }
}
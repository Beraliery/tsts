var kartinka = document.querySelector('img');
kartinka.onclick = function() {
	var msrc = kartinka.getAttribute('src');
	if(msrc === 'img/neon.jpg') {
		kartinka.setAttribute('src','img/nneon.jpg');
	} else {
		kartinka.setAttribute('src','img/neon.jpg');
	}
}
var mbuton = document.querySelector('button');
var mhed = document.querySelector('h1');
function setUN() {
	var mN = prompt('enter ur name plsss');
	localStorage.setItem('name', mN);
	mhed.textContent = 'u are cool, ' +mN;
}
if(!localStorage.getItem('name')) {
	setUN();
} else {
	var storedN = localStorage.getItem('name');
	mhed.textContent = 'u are cool, ' + storedN;
}
mbuton.onclick = function() {
	setUN();
}
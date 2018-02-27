let input = document.getElementById('input');
let output = document.getElementById('output');

let rot13 = function(c) {
	let order = (character) => character.charCodeAt(0);
	let char = (index) => String.fromCharCode(index);
	let asciiCode = order(c);
	let lastLetter = asciiCode <= order('Z') ? 'Z' : 'z';
	asciiCode = asciiCode + 13;
	if(asciiCode > order(lastLetter)) {
		asciiCode = asciiCode - 26;
	}
	return char(asciiCode);
}

input.onkeyup = function() {
	let message = input.value;
	let cipher = message.replace(/[a-zA-Z]/g, rot13);
	output.innerHTML = cipher;
}


// http://stackoverflow.com/a/617685/987044
function rot(s, i) {
	return s.replace(/[a-zA-Z]/g, function (c) {
		return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + i) ? c : c - 26);
	});
}
function update() {
	document.getElementById('output').value = rot(document.getElementById('input').value, +document.getElementById('rot').value);
}
	
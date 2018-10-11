console.log('aplikacija veikia')

var number = document.getElementById('number');

function up() {
	var value = number.innerHTML;
	value++;
	number.innerHTML = value;
}

function down() {
	var value = number.innerHTML;
	value--;
	number.innerHTML = value;
}
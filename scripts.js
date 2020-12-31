//Sets the important variables
const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

//Function for making the grid
function makeGrid(a) {
	getRidGrid();
	makeRows(a);
	makeColumns(a);
}

function removeGrid() {}
makeGrid(16);
draw();

//Makes rows
function makeRows(num) {
	for (r = 0; r < num; r++) {
		let row = document.createElement("div");
		container.appendChild(row).className = "gridRow"
	}
}
//Makes Columns
function makeColumns(num) {
	for (c = 0; c < num; c++) {
		for (j = 0; j < num; j++) {
			let newCell = document.createElement("div");
			rows[j].appendChild(newCell).className = "cell";
		}
	}
}

function erase() {
	let eraser = document.querySelectorAll(".cell");
	const resetBackgroundColor = e => {
		e.target.style.backgroundColor = "white";
	}
	eraser.forEach(div => {
		div.addEventListener("mouseover", resetBackgroundColor, {
			once: true
		})
	})
}

function draw() {
	let divs = document.querySelectorAll(".cell");
	const changeBackgroundColor = e => {
		e.target.style.backgroundColor = "teal";
	}
	divs.forEach(div => {
		div.addEventListener("mouseover", changeBackgroundColor, {
			once: true
		});
	})
}

function reset() {
	const gridItems = document.querySelectorAll('.cell');
	gridItems.forEach((item) => {
		item.style.backgroundColor = 'white';
	});
	draw();
}

function getRidGrid() {
	var myNode = document.getElementById("container");
	var fc = myNode.firstChild;
	while (fc) {
		myNode.removeChild(fc);
		fc = myNode.firstChild;
	}
}

function changeSize() {
	let newSize = prompt("Enter a new size");
	if (newSize !== null) {
		if (newSize < 65) {
			newSize = parseInt(newSize);
			makeGrid(newSize);
		} else alert('Sorry, please use a smaller number.')
	}
}
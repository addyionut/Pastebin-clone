let pasteBin = [];
document.getElementById("container").style.width = "900px";

function savePaste() {
	let input = document.getElementById("newPaste").value;
	let title = document.getElementById("title").value;
	pasteBin.push(title + " : " + input);
	console.log(pasteBin);
	document.getElementById("displayPaste").innerHTML = pasteBin.join("<br>") + "<br>";
}

function editPaste() {
	console.log(pasteBin[pasteBin.length - 1]);
	document.getElementById("newPaste").innerHTML = pasteBin[0];
}

function deletePaste() {
	pasteBin = [];
	console.log(pasteBin);
	document.getElementById("displayPaste").innerHTML = pasteBin;
}



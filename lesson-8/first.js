hideText.onclick = function () {
	let visibility = text.style.visibility;
	
	if (visibility == "hidden") {
		text.style.visibility = "";
		this.textContent = "Приховати текст";
	} else {
		text.style.visibility = "hidden"
		this.textContent = "Відобразити текст";
	}
}

hideButton.onclick = function () {
	this.style.display = "none";	
}
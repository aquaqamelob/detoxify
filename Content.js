const imgs = document.getElementByTagName("img");

imgs.forEach((img) => {
	img.style.filter = "blur(20px)";
});

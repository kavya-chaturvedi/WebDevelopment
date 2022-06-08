var hoveredImages = document.getElementsByClassName("thumbNailIcons");

console.log(hoveredImages);

for(var i=0; i<3; i++) {
	hoveredImages[i].addEventListener("click", handleClick);
}




function handleClick(event){

	var thumbNailClicked = event.srcElement.id;
	var sourceOfBanner = document.getElementById("mainCoffeeBanner");
	
	if(thumbNailClicked === "firstThumbnailIcon"){
		sourceOfBanner.src = "./Images/77325-frappuccino-drink-chocolate-starbucks-matcha-white.png";

	}

	else if(thumbNailClicked === "secondThumbnailIcon"){
		sourceOfBanner.src = "./Images/62115-tea-coffee-drink-starbucks-latte-free-download-image.png";

	}

	else if(thumbNailClicked === "thirdThumbnailIcon"){
		sourceOfBanner.src = "./Images/62120-coffee-frappuccino-drink-latte-starbucks-unicorn.png";

	}
	
	console.log(sourceOfBanner);

}
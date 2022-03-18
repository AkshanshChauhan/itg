var ratingCount = document.getElementsByClassName("numRating");
var num = 1;
for(let i=0; i<ratingCount.length; i++) {
    document.getElementById("showRatingHere").innerText = num;
    num = num + 1;
}
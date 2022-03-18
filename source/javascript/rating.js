function ratingUpdate() {
    var rating = document.getElementById("Rating");
    var valuing = document.getElementById("val").value;
    const ratingFaces = ["../img/none.png", "../img/bad.png", "../img/hmm.png", "../img/average.png", "../img/good.png", "../img/great.png"];
    rating.setAttribute("src", ratingFaces[valuing]);
}
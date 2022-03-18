var clix = document.getElementsByTagName("button");
var data = document.getElementsByTagName("p");
for(let i=0; i<clix.length; i++) {
        clix[i].addEventListener('click', () => {
        alert("Thanks for downloading, " + data[i].innerText + " download start soon!!!");
    });
}
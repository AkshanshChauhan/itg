function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function search() {
    var valu = document.getElementById("value").value;
    var value = valu.toLocaleLowerCase();
    var suggest = document.getElementById("suggestion_box");
    var a = suggest.getElementsByTagName("a");
    for(let i=0; i<a.length; i++) {
        var context = a[i].innerText.toLocaleLowerCase();
        var is = context.includes(value);
        if(context.includes(value) && value != "") {
            suggest.getElementsByTagName("a")[i].style.display = "flex";
        } else {
            suggest.getElementsByTagName("a")[i].style.display = "";
        }
    }
    
}

var time = new Date;
var hour = time.getHours();
if(hour < 6 || hour > 19) {
    document.getElementById("html").style.filter = "invert(0)";
} else {
    document.getElementById("html").style.filter = "invert(0)";
}

function cse_books(num) {
    var clickedAll = document.getElementsByClassName("branch");
    var clicked = document.getElementsByClassName("branch")[num];
    if(clicked) {
        for(let i=0; i<clickedAll.length; i++) {
            clickedAll[i].setAttribute("style", "opacity: 100%;");
        }
        clicked.setAttribute("style", "opacity: 50%;");
    }
    var branchName = document.getElementById("branch_name").innerText = clicked.innerText;
    var branchPage = document.getElementById("iframe").setAttribute("src", branchName + ".html");
}

Notification.requestPermission(function(status) {
});

function cseNotificaiton() {
    if (Notification.permission == "granted") {
        const notif = new Notification('Books List', {
            body: "List of All Books",
            icon: "../img/itg_logo.png"
        });
        notif.addEventListener("click",function() {
            window.open('../booksData/booksData.html');
        });
    } 
    else {
        alert("You do not get any information about updates in this site, if you do not allow the notification");
    }
}

cseNotificaiton();

let n = 1;
setInterval(function() { 
    n++;
    cseNotificaiton();
    document.getElementById("msgCount").innerText = n;
    document.getElementById("messageCount").setAttribute("title", "You Got " + n + " Notification's");
}, 60000);

function showRating() {
    var ratingBox = document.getElementById("ratingBox");
    ratingBox.style.display = "flex";
    scrollTo(0, 0);
}

function closeRating() {
    var ratingBox = document.getElementById("ratingBox");
    ratingBox.style.display = "";
    scrollTo(0, 5000);
}
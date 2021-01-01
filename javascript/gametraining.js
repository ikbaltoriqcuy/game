var banding = ['+', '-', 'x'];
var number = [];
var k;
var hasil = 0;
var Score = 0;
var countDown =31;
var animScore = 0;
var wait = 0;
var buttonEnabled = true;
var kosong;
var n=0;
window.onload = function () {
    soal();
    timer();
};
function Home() {
    var n = document.getElementById("Home");
    n.setAttribute("class", "Homeanimn");
    window.setTimeout(index, 2000);
}
function index(){
  window.location.assign("index.html")
}
function valid(a){
   if(n!=1){
    if (window.XMLHttpRequest) {

            xmlhttp = new XMLHttpRequest();
        } else {

            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("valid").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","scoreUpload.php?q="+Score+"&a="+a,true);
        xmlhttp.send();
        n++;
   }
}
function soal() {
    var number;
    var hasil;
    var n = "";
    var p = "";
    var empty = Math.floor(Math.random() * 3);
    if (empty == 0)
        empty = 1;
    if (countDown != -1) {
        var randBanding = Math.floor(Math.random() * 3);
        for (var a = 1; a < 4; a++) {
            n = "s" + a;
            var g = document.getElementById(n);
            if (empty == a) {
                if (empty == 1)
                    g.innerHTML = "_ " + banding[randBanding] + " ";
                if (empty == 2)
                    g.innerHTML = "_ = ";
            }
            else {
                if (a == 1) {
                    number = Math.floor(Math.random() * 10);
                    g.innerHTML = number + " " + banding[randBanding] + " ";
                }
                if (a == 2) {
                    number = Math.floor(Math.random() * 10);
                    g.innerHTML = number + " = ";
                }
                if (a == 3) {
                    kosong = Math.floor(Math.random() * 10);
                    if (banding[randBanding] == '+')
                        hasil = number + kosong;
                    if (banding[randBanding] == '-') {
                        if (empty == 2)
                            hasil = number - kosong;
                        if (empty == 1)
                            hasil = kosong - number;
                    }
                    if (banding[randBanding] == 'x')
                        hasil = number * kosong;
                    g.innerHTML = hasil;
                }
            }
        }
    }
}
function jawab(numCompare) {
    if (banding[numCompare] == '+') {
        return number[0] > number[1];
    }
    if (banding[numCompare] == '-') {
        return number[0] < number[1];
    }
    if (banding[numCompare] == 'x') {
        return number[0] != number[1];
    }
}
function check(a) {
    if (buttonEnabled) {
        if (a == kosong) {
            soal();
            Skor(true);
            var x = document.getElementById('soundTrue');
            x.play();
            wait = 0;
            waitq();
        }
        else {
            soal();
            Skor(false);
            var x = document.getElementById('soundFalse');
            x.play();
            wait = 0;
            waitq();
        }
    }
}
function Skor(n) {
    var h = document.getElementById('Score');
    if (n) {
        Score += 10;
        h.innerHTML = "<p id=text>" + Score + "</p>";
        document.getElementById('text').style.backgroundColor = "#8fff86";
    }
    else {
        Score -= 5;
        h.innerHTML = "<p id=text>" + Score + "</p>";
        document.getElementById('text').style.backgroundColor = "#ff5d5d";
    }
}
function timer() {
    countDown = countDown - 1;
    var f = document.getElementById('time');
    if (countDown != -1) {
        f.innerHTML = "<p>" + countDown + " </p>";
        window.setTimeout(timer, 1000);
    }
    else {
        var g = document.getElementById('contentFinish');
        var end = document.getElementById('end');
        g.style.visibility = "visible";
        g.setAttribute("class", "contentFinish");
        end.play();
        animationScore();
    }
}
function animationScore() {
    var j = document.getElementById('konten');
    if (Score < 0) {
        animScore -= 1;
        if (animScore > Score - 1) {
            j.innerHTML = "<p>Score :" + animScore + " </p>";
            window.setTimeout(animationScore, 50);
        }
    }
    else {
        animScore += 1;
        if (animScore < Score + 1) {
            j.innerHTML = "<p>Score : " + animScore + " </p>";
            window.setTimeout(animationScore, 50);
        }
    }
}
function waitq() {
    if (wait < 2) {
        wait += 1;
        buttonEnabled = false;
        setTimeout(waitq, 500);
    }
    else {
        buttonEnabled = true;
    }
}
//# sourceMappingURL=app.js.map
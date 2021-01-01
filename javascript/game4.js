var banding = ['>', '<', '='];
var Alpha =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z']
var number = [];
var k;
var Score = 0;
var countDown = 32;
var animScore = 0;
var wait = 0;
var buttonEnabled ="true";
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
    var n = document.getElementById("Answer");
    var p = "";
    if (countDown != -1) {
        for (var i = 0; i < 2; i++) {
            var randNumber = Math.floor(Math.random() * 25);
            number[i] = randNumber;
            if (i < 1) {
                var randBanding = Math.floor(Math.random() * 3);
                k = randBanding;
                p += Alpha[randNumber] + "  " + banding[k] + " ";
            }
            else {
                p += Alpha[randNumber];
            }
        }
        n.innerHTML = "<p>" + p + "</p>";
       
    }
}
function jawab(numCompare) {
    if (banding[numCompare] == '>') {
        return number[0] > number[1];
    }
    if (banding[numCompare] == '<') {
        return number[0] < number[1];
    }
    if (banding[numCompare] == '><') {
        return number[0] != number[1];
    }
    if (banding[numCompare] == '=') {
        return number[0] == number[1];
    }
    if (banding[numCompare] == '<=') {
        return number[0] <= number[1];
    }
    if (banding[numCompare] == '>=') {
        return number[0] >= number[1];
    }
}
function check(a) {
 if (buttonEnabled){
    if (a == jawab(k)) {
        soal();
        var x = document.getElementById('soundTrue');
        x.play();
        Skor(true);
         wait =0 ;
         waitq(); 
    }
    else {
        soal();
        var x = document.getElementById('soundFalse');
        x.play();
        Skor(false);
        wait =0 ;
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
        
function waitq(){
 if (wait < 2) {
   wait +=1;
   buttonEnabled = false; 
   setTimeout(waitq,500);
 }else { buttonEnabled = true;}
}
 
//# sourceMappingURL=app.js.map
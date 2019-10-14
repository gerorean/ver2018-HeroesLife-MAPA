var elem = document.documentElement;

function buttonOff() {
    var x = document.getElementsByClassName("myButton");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    var y = document.getElementsByClassName("myFontSize");
     var i;
     for (i = 0; i < y.length; i++) {
     y[i].style.display = "none";
     }
}

function buttonOn() {
    var x = document.getElementsByClassName("myButton");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
    }
    var y = document.getElementsByClassName("myFontSize");
     var i;
     for (i = 0; i < y.length; i++) {
     y[i].style.display = "block";
     }
}

function changeSize() {
    document.getElementById("r01Body").style.fontSize = "36px";/*36px//200%*/
    document.getElementById("r04Content").style.top = "65px";
    document.getElementById("r04Content").style.height = "calc(100% - 65px)";
    document.getElementById("r06Plus").style.width = "0%";
    document.getElementById("r07Minus").style.width = "100%";
    document.getElementById("my07Circle").style.borderRadius = "30px";
    document.getElementById("my07Circle").style.width = "60px";
    document.getElementById("my07Circle").style.height = "60px";
    document.getElementById("my09CircleOn").style.borderRadius = "30px";
    document.getElementById("my09CircleOn").style.width = "60px";
    document.getElementById("my09CircleOn").style.height = "60px";
    document.getElementById("my04Top").style.height = "60px";
    document.getElementById("my04Top").style.lineHeight = "50px";
    document.getElementById("my13Phone").style.fontSize = "53px";
    document.getElementById("my13Phone").style.lineHeight = "47px";
    document.getElementById("my14PhoneOn").style.fontSize = "53px";
    document.getElementById("my14PhoneOn").style.lineHeight = "47px";
    document.getElementById("myTop2").style.height = "60px";//
    document.getElementById("myTop2").style.lineHeight = "60px";
    document.getElementById("myFull").style.top = "-51px";
    document.getElementById("myFullOff").style.top = "-51px";
    document.getElementById("my20Bar").style.top = "60px";
    document.getElementById("myMarginAux").style.top = "65px";//
    document.getElementById("myLeaf2").style.top = "125px";//
    document.getElementById("myLeaf2").style.height = "calc(100% - 125px)";//
    document.getElementById("my19More").style.top = "67px";
    document.getElementById("my2Plus").style.width = "0%";
    document.getElementById("my2Minus").style.width = "100%";
    /*var y = document.getElementsByClassName("line");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.lineHeight = "60px";
    }*/
}

function changeSizeMin() {
    document.getElementById("r01Body").style.fontSize = "24px";/*24px//100%*/
    document.getElementById("r04Content").style.top = "45px";
    document.getElementById("r04Content").style.height = "calc(100% - 45px)";
    document.getElementById("r06Plus").style.width = "100%";
    document.getElementById("r07Minus").style.width = "0%";
    document.getElementById("my07Circle").style.borderRadius = "20px";
    document.getElementById("my07Circle").style.width = "40px";
    document.getElementById("my07Circle").style.height = "40px";
    document.getElementById("my09CircleOn").style.borderRadius = "20px";
    document.getElementById("my09CircleOn").style.width = "40px";
    document.getElementById("my09CircleOn").style.height = "40px";
    document.getElementById("my04Top").style.height = "40px";
    document.getElementById("my04Top").style.lineHeight = "35px";
    document.getElementById("my13Phone").style.fontSize = "35px";
    document.getElementById("my13Phone").style.lineHeight = "31px";
    document.getElementById("my14PhoneOn").style.fontSize = "35px";
    document.getElementById("my14PhoneOn").style.lineHeight = "31px";
    document.getElementById("myTop2").style.height = "40px";//
    document.getElementById("myTop2").style.lineHeight = "40px";
    document.getElementById("myFull").style.top = "-41px";
    document.getElementById("myFullOff").style.top = "-41px";
    document.getElementById("my20Bar").style.top = "40px";
    document.getElementById("myMarginAux").style.top = "45px";//
    document.getElementById("myLeaf2").style.top = "105px";//
    document.getElementById("myLeaf2").style.height = "calc(100% - 105px)";//
    document.getElementById("my19More").style.top = "47px";
    document.getElementById("my2Plus").style.width = "100%";
    document.getElementById("my2Minus").style.width = "0%";
    /*var y = document.getElementsByClassName("line");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.lineHeight = "40px";
    }*/
}

function fullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    document.getElementById("myFullOff").style.width = "40px";
    document.getElementById("myFull").style.width = "0%";
}

function fullscreenClose() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  document.getElementById("myFullOff").style.width = "0%";
  document.getElementById("myFull").style.width = "40px";
}








function openChat() {
    document.getElementById("r05Margin").style.height = "60px";
    document.getElementById("s01").style.height = "0%";
    document.getElementById("t01").style.height = "auto";
    document.getElementById("u01").style.height = "0%";
    document.getElementById("v01").style.height = "0%";
    document.getElementById("my06User").style.width = "100%";
    document.getElementById("my08UserOn").style.width = "0%";
    document.getElementById("my11Map").style.width = "100%";
    document.getElementById("my12MapOn").style.width = "0%";
    document.getElementById("my11Chat").style.width = "0%";
    document.getElementById("my12ChatOn").style.width = "100%";
    document.getElementById("my13Phone").style.width = "100%";
    document.getElementById("my14PhoneOn").style.width = "0%";
}

function openMap() {
    document.getElementById("r05Margin").style.height = "0%";
    document.getElementById("s01").style.height = "100%";
    document.getElementById("t01").style.height = "0%";
    document.getElementById("u01").style.height = "0%";
    document.getElementById("v01").style.height = "0%";
    document.getElementById("my06User").style.width = "100%";
    document.getElementById("my08UserOn").style.width = "0%";
    document.getElementById("my11Map").style.width = "0%";
    document.getElementById("my12MapOn").style.width = "100%";
    document.getElementById("my11Chat").style.width = "100%";
    document.getElementById("my12ChatOn").style.width = "0%";
    document.getElementById("my13Phone").style.width = "100%";
    document.getElementById("my14PhoneOn").style.width = "0%";
}

function openPhone() {
    document.getElementById("r05Margin").style.height = "60px";
    document.getElementById("s01").style.height = "0%";
    document.getElementById("t01").style.height = "0%";
    document.getElementById("u01").style.height = "auto";
    document.getElementById("v01").style.height = "0%";
    document.getElementById("my06User").style.width = "100%";
    document.getElementById("my08UserOn").style.width = "0%";
    document.getElementById("my11Map").style.width = "100%";
    document.getElementById("my12MapOn").style.width = "0%";
    document.getElementById("my11Chat").style.width = "100%";
    document.getElementById("my12ChatOn").style.width = "0%";
    document.getElementById("my13Phone").style.width = "0%";
    document.getElementById("my14PhoneOn").style.width = "100%";
}

function openUser() {
    document.getElementById("r05Margin").style.height = "60px";
    document.getElementById("s01").style.height = "0%";
    document.getElementById("t01").style.height = "0%";
    document.getElementById("u01").style.height = "0%";
    document.getElementById("v01").style.height = "auto";
    document.getElementById("my06User").style.width = "0%";
    document.getElementById("my08UserOn").style.width = "100%";
    document.getElementById("my11Map").style.width = "100%";
    document.getElementById("my12MapOn").style.width = "0%";
    document.getElementById("my11Chat").style.width = "100%";
    document.getElementById("my12ChatOn").style.width = "0%";
    document.getElementById("my13Phone").style.width = "100%";
    document.getElementById("my14PhoneOn").style.width = "0%";
}








function chRed() {
    document.getElementById("my04Top").style.backgroundColor = "red";
    var x = document.getElementsByClassName("bChange");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "red";
    }
}

function chGreen() {
    document.getElementById("my04Top").style.backgroundColor = "green";
    var x = document.getElementsByClassName("bChange");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "green";
    }
}

function chBlue() {
    document.getElementById("my04Top").style.backgroundColor = "blue";
    var x = document.getElementsByClassName("bChange");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "blue";
    }
}






function openTranslate() {
    document.getElementById("myE01").style.height = "100%";
}

function closeMyBlackE() {
    document.getElementById("myE01").style.height = "0%";
}

function openHand() {
    document.getElementById("myF01").style.height = "100%";
}

function closeMyBlack() {
    document.getElementById("myF01").style.height = "0%";
}

function openBook() {
    document.getElementById("myG01").style.height = "100%";
}

function closeMyBlackG() {
    document.getElementById("myG01").style.height = "0%";
}


function openMyGold() {
    document.getElementById("myGold").style.width = "100%";
}

function closeMyGold() {
    document.getElementById("myGold").style.width = "0%";
}




function helpOff(){
    var x = document.getElementsByClassName("myHelp");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
}
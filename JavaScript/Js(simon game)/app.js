let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 100);
}


function levelup() {
    userSeq = [];
    level++;
    h2.innerHTML = `level ${level}`;

    let radInx = Math.floor(Math.random() * 3);
    let radcolor = btns[radInx];
    let radbutn = document.querySelector(`.${radcolor}`);
    gameSeq.push(radcolor);
    console.log(gameSeq);
    gameflash(radbutn);


}
function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        // console.log("same value");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br> press any key to start the game.`
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 250);
        reset();
    }
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor); 
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}
let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;


}

function play() {
    document.getElementById("main").innerHTML = `
    <h2>Guess a number 1, 2 or 3...</h2><br>
<input type="text" placeholder="Enter a number..."><br>
<button type="submit" onclick="myFun()">PLAY</button>
    `;
}
function myFun() {
    a = document.getElementsByTagName("input")[0].value;
    // console.log(a);
    let max = 3;
    let min = 1
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("x=",x);

    if (x == a) {
        // console.log("Yay matched...");
        document.getElementById("main").innerHTML = ``;
        document.getElementById("result").innerHTML = "Your Guess is " + a + "<br><br>" + "Magician's Guess is " + x;
        setTimeout(() => {
            document.getElementById("result").innerHTML = `
        <img src="snoopy-yay.gif"><br>
        <button type="submit" onclick="start()">PLAY AGAIN</button> `
        }
            , 1000);
    }
    else {
        // console.log("Try again...");
        document.getElementById("main").innerHTML = ``;
        document.getElementById("result").innerHTML = "Your Guess is " + a + "<br><br>" + "Magician's Guess is " + x;
        setTimeout(() => {
            document.getElementById("result").innerHTML = `
        <img src="gameOver.gif"><br>
        <button type="submit" onclick="start()">PLAY AGAIN</button>`
        }, 1000);
    }
}

function start() {
    document.getElementById("result").innerHTML = ``;
    document.getElementById("main").innerHTML = ` <h2>Guess a number 1, 2 or 3...</h2><br>
<input type="text" placeholder="Enter the number..."><br>
<button type="submit" onclick="myFun()">PLAY</button>`;
}
let delay = 5000;
setInterval(setMoleVisible, delay);
let counter = 0;
let block = document.getElementsByClassName("mole");
Array.prototype.forEach.call(block, function (item, i, block) {
    item.addEventListener('click', function () {
        hitMole(this);
        console.log("hit " + counter);
        delay = Math.floor(Math.random() * (2000) + 1000);
    })
});


function setMoleVisible(){
    let block = document.getElementsByClassName("mole");
    console.log(block.length);
    let rand = Math.floor(Math.random() * (block.length));
    console.log(rand);
    let mole = block.item(rand);
    mole.style.visibility = "visible";
}

function hitMole(mole) {
    console.log(mole.style.visibility);
    if (mole.style.visibility === "visible"){
        counter++;
        mole.style.visibility = "hidden";
    }
    let text = document.getElementById("counter");
    if (counter < 10) {
        text.textContent = counter;
    } else {
        text.style.fontSize = "50px";
        text.textContent = "ГРЕТА ТУНБЕРГ ВАС НЕНАВИДИТ"
    }
}
// i'm having so much fun writing this :)
// I had to change close to cloce because the program thought I wanted to close the tab lmao
const name = document.getElementById("name");
const met = document.getElementById("met");
const first = document.getElementById("first");
const current = document.getElementById("current");
const they = document.getElementById("they");
const future = document.getElementById("future");
const trust = document.getElementById("trust");
const hate = document.getElementById("hate");
const secrets = document.getElementById("secrets");
const hangOut = document.getElementById("hangOut");
const cloce = document.getElementById("close");
const looks = document.getElementById("looks");

// now adding r to everything. this is so damn tedious
const nameR = document.getElementById("nameR");
const metR = document.getElementById("metR");
const firstR = document.getElementById("firstR");
const currentR = document.getElementById("currentR");
const theyR = document.getElementById("theyR");
const futureR = document.getElementById("futureR");
const trustR = document.getElementById("trustR");
const hateR = document.getElementById("hateR");
const secretsR = document.getElementById("secretsR");
const hangOutR = document.getElementById("hangOutR");
const cloceR = document.getElementById("closeR");
const looksR = document.getElementById("looksR");

// submit button
const submit = document.getElementById("submit");

// big boi if statement
submit.onclick = function() {
    // If any of the inputs are empty, alert the user
    if (name.value === '' || met.value === '' || first.value === '' || current.value === '' || they.value === '' || future.value === '' || trust.value === '' || hate.value === '' || secrets.value === '' || hangOut.value === '' || cloce.value === '' || looks.value === '') {
        alert("Make sure everything has a value!");
    } else {
        /* Assign the new values to the results! */
        nameR.innerText = `Name: ${name.value}`;
        metR.innerText = `How you met: ${met.value}`;
        firstR.innerText = `First Impression: ${first.value}`;
        currentR.innerText = `Current Impression: ${current.value}`;
        theyR.innerText = `They're your: ${they.value}`;
        futureR.innerText = `Do you need them in the future? ${future.value}`;
        trustR.innerText = `How much do you trust them? ${trust.value}`;
        hateR.innerText = `Do you hate them? ${hate.value}`;
        secretsR.innerText = `Do you know their secrets? ${secrets.value}`;
        hangOutR.innerText = `Should you hang out? ${hangOut.value}`;
        cloceR.innerText = `Closeness Rating: ${cloce.value}`;
        looksR.innerText = `Looks Rating😏: ${looks.value}`;
    }
}
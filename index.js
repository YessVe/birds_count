let countText = document.getElementById("count-txt");
let count = 0;
let entriesText = document.getElementById("entries-txt");

function increment(){
    count = count + 1;
    countText.innerText=count
}

function save() {
    let entries = count + " - ";
    entriesText.textContent += entries;
    countText.innerText = 0;
    count = 0;
}
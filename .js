let input = document.getElementById("defuser");
let para = document.getElementById("timer");
let count = 10;

let co = setInterval(function() {
    count = count - 1;
    para.textContent = count;
    if (count === 0) {
        para.textContent = 'Boom';
        clearInterval(co);
    }
}, 1000);

input.addEventListener('keydown', boom);

function boom(event) {
    let inv = para.value;
    if (event.key === "Enter" && inv === "defuser" && count !== 0) {
        inv.textContent = "u did it";
        clearInterval(co);
    }
}

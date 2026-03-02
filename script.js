var main = document.getElementById("main");
let arr = [
    "Ash.jpg",
    "Blastoise.jpg",
    "charizod.jpg",
    "jigglypuff.jpg",
    "x.jpg",
    "pikachu.webp",
    "imli.jpg",
    "evi.jpg",
    "gingar.jpg",
    "greninja.jpg",
    "brock.jfif",
    "lucario.jpg",
    "mewtow.png",
    "misty.jpg",
    "onix.jpg",
    "rekuza.jpg",
    "Dragonite.jpg",
];
let s = "";
for (let i = 1; i <= 48; i++) {
    let r = Math.floor(Math.random() * arr.length);
    s += `<div class="cards"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;
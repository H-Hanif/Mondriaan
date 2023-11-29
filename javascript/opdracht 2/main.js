//opdracht 1/2

const person = "bouchtoui";
function wachtwoord() {
  let kaas = prompt("vul uw wachtwoord");
  while (kaas !== person && kaas !== "quit") {
    kaas = prompt(
      "helaas is dat fout, vul het opnieuw in, of wilt u stoppen typ quit"
    );
  }
  if (kaas === person) {
    alert("gefeliciterd het wachtwoord is correct");
  } else {
    alert("je hebt gekozen om te stoppen");
  }
}

//opdracht 3
const tempraturen = [
  3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2,
];
let highest = 0;
let coldest = 100;
let month = 0;
for (let i = 0; i < tempraturen.length; i++) {
  const temp = tempraturen[i];
  if (temp > highest) {
    highest = temp;
  }

  if (temp < coldest) {
    coldest = temp;
  }
  if (temp > 10) {
    console.log("tempratuur hoger dan 10 graden", temp);
  }
}
console.log("hoogste tempratuur", highest);
console.log("laagste tempratuur", coldest);

//opdracht 4
const kaart = "card";
function roepen() {
  let 
}
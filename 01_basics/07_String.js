// Modern way of refering the strings - InterPositioning of the Strings.

const name = "Rudra Shukla"
const GithubRepo = 5

console.log(`Hello My name is ${name} and my Github Repository Count is ${GithubRepo}`);

console.log("--------------------------Substring and slice-------------------------");

const Gamename = "Forza-Horizon5";

const newString = Gamename.substring(0,4);
console.log(newString);

const advstring = Gamename.slice(0,5);
console.log(advstring);

console.log("--------------------------indexOf and charAt-------------------------");

console.log(Gamename.indexOf('a'));
console.log(Gamename.charAt(3));

console.log("--------------------------Triming the unwanted spaces-------------------------");

const newStringone = "    Rudra    ";
console.log(newStringone.trim());

const url = "https://Rudrashukla%20@gmail.com";
console.log(url.replace('%20','-'));
console.log(url.includes('Rudra'));

console.log("---------------------split--------------------------");
console.log(url.split());
const puzzleInput =`165432-707912`;

const range = puzzleInput.split('-');

const isAdjacent = new RegExp(/(\d)\1(?!\1)/);
const isAdjacentStrict = new RegExp(/^((\d)\2(?!\2)\d*|\d*(\d)(?!\3)(\d)\4(?!\4)\d*)$/);

let possiblePasswords1 = 0;
let possiblePasswords2 = 0;

for (let i = +range[0]; i <= +range[1]; i++) {
  let decreaseCheck = 0;
  let passwordTry = i.toString();

  for (let j = 1; j <= passwordTry.length - 1; j++) {
    if (passwordTry[j] < passwordTry[j-1])  {
      decreaseCheck++;
    }
  }

  if (i.toString().length == 6 &&  passwordTry.match(isAdjacent) && !decreaseCheck) {
    possiblePasswords1++;
  } 

  if ((i.toString().length == 6 &&  passwordTry.match(isAdjacentStrict) && !decreaseCheck)) {
    possiblePasswords2++;
  }
}

// part 1
console.log(possiblePasswords1);

// part 2
console.log(possiblePasswords2);
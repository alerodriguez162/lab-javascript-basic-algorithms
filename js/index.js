// Iteration 1: Names and Input

const hacker1 = "Koko";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Koko";

console.log(`The navigator's name is ${hacker1}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}

// Iteration 3: Loops
let newHacker = "";

for (let index = 0; index < hacker1.length; index++) {
  newHacker += hacker1[index].toUpperCase();
  newHacker += " ";
}
console.log(newHacker);

let newHackerReverse = "";

for (let index = hacker2.length - 1; index >= 0; index--) {
  newHackerReverse += hacker2[index].toUpperCase();
  newHackerReverse += " ";
}

console.log(newHackerReverse);

if (hacker1.localeCompare(hacker2) === 0) {
  console.log("What?! You both have the same name?");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
}

// Bonus 1

let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pellentesque rutrum ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque luctus orci non finibus pulvinar. Duis at pharetra est. Aliquam eu felis in eros rutrum sodales quis vitae libero. Aenean sollicitudin viverra venenatis. Morbi molestie eros faucibus magna auctor tristique. Sed eget ante vel turpis dignissim mollis. Sed eget tincidunt urna. Duis fermentum, libero vel congue pulvinar, ipsum urna fringilla quam, quis interdum sapien lorem eget tellus. Pellentesque semper fermentum posuere. Duis tincidunt eleifend diam nec convallis. Nam purus elit, gravida vel eleifend id, finibus a nunc. Quisque commodo sodales augue id congue. Proin non maximus massa. Suspendisse nec odio nisi. Cras dictum lectus felis, vitae sagittis sapien pharetra at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi nulla purus, congue at feugiat eget, facilisis in massa. Vivamus facilisis a nibh sit amet pharetra. Nullam tristique interdum consequat. Pellentesque tincidunt sodales maximus. Morbi magna quam, vehicula sed euismod faucibus, facilisis non mi. Nunc arcu dolor, pretium at odio vitae, dapibus placerat magna. In hac habitasse platea dictumst. Nullam egestas pharetra tincidunt. Aliquam vehicula non est vel scelerisque. Donec ornare orci et justo vulputate, ut congue turpis semper. Nulla lobortis ullamcorper sagittis. Praesent eu lorem tincidunt, tempor justo quis, semper turpis. Duis viverra scelerisque justo eget accumsan. In iaculis tellus sed mauris consectetur, dignissim mattis risus bibendum. Aliquam hendrerit venenatis lectus a facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam non est sem. Nam ultrices tristique velit, nec semper massa tempor sit amet.`;

let totalWords = 0;

let arr = [];

let i = 0;

do {
  if (str[i] === " ") {
    totalWords++;
  }
  i++;
} while (i < str.length - 1);

console.log("While", totalWords);
totalWords = 0;
for (let index = 0; index <= str.length - 1; index++) {
  if (str[index] === " ") {
    totalWords++;
  }
}

console.log("For", totalWords); //

let strSplit = str.split(" ");

console.log("Split", strSplit.length);

// Bonus 2

let lettersToCount = 0;
let countArray = str.match(/et/g);
if (countArray) {
  console.log(countArray.length);
}

// Bonus 3

const checkPalindrome = (str) => {
  let r = "";
  str = str.replace(/ /g, "").replace(/,/g, "").toLowerCase();
  const arrayValues = str.split("");

  const reverseArrayValues = arrayValues.reverse();

  const reverseString = reverseArrayValues.join("");

  if (str == reverseString) {
    console.log("It is a palindrome");
  } else {
    console.log("It is not a palindrome");
  }
};

checkPalindrome("stack cats");

// const buenas = (hour) => {
//   let date = new Date();
//   console.log(date.getHours());
//   //   if (hour >= 12 && hour < 18) {
//   //     console.log("Buenas Tardes");
//   //   } else if (hour >= 18 && hour <= 24) {
//   //     console.log("Buenas Noches");
//   //   } else if (hour >= 6) {
//   //     console.log("Buenos Dias");
//   //   } else if (hour >= 0 && hour < 6) {
//   //     console.log("Madrugada");
//   //   }
// };

// buenas(24);

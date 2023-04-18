const myList = [1, "apple", 2, 3, 4];
let i;
while (i < 10) {
  text += "The number is " + i;
  i++;
}

for (let x = 0; x < 5; x++) {
  console.log(x);
}

myList.forEach(function (value, index) {
  console.log(index, value);
});

for (key in "appleeeee") {
  console.log(key);
}

const person = { name: "John", surname: "Doe", age: 25 };

for (let x in person) {
  console.log(x);
}

let language = "JavaScript";

for (let x of language) {
  console.log(x);
}

do {
  // The loop will always be executed at least once, even if the condition is false
console.log('at least one time will run')
} while (false);

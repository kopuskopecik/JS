const myList = [1, "apple", 2, 3, 4];

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

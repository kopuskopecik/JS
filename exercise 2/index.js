var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
];

const main = document.querySelector("main");
let paragraph;
let line;

books.forEach(createElements);

function createElements(item) {
  let paragraph = document.createElement("p");
  paragraph.textContent = `${item.title} - ${item.author} ${
    item.alreadyRead ? "I read" : "I did not read"
  }`;
  let line = document.createElement("hr");

  main.appendChild(paragraph);
  main.appendChild(line);
}

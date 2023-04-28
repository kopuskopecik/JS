var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "./img/book1.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "./img/book2.jpg",
  },
];

const unorderedList = document.querySelector("ul");
let listElement;
let image;
let nodeElement;

books.forEach(createElements);

function createElements(item, index) {
  listElement = document.createElement("li");


  image = document.createElement("img");
  image.setAttribute("src", item.img);
  image.setAttribute("alt", item.title);
  image.setAttribute("width", "100px");

  nodeElement = document.createTextNode(`${item.title} - ${item.author} ${
    item.alreadyRead ? "I read" : "I did not read"
  }`)
  listElement.appendChild(image);
  listElement.appendChild(document.createElement("br"));
  listElement.appendChild(nodeElement);
  unorderedList.appendChild(listElement);
}

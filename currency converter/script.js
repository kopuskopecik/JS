const main = document.querySelector("main");
const dolarButton = document.querySelector("#usd");
const euroButton = document.querySelector("#eur");
const input = document.querySelector("#chf");
const div = document.querySelector("div");

const getAPI = (currency, amount) => {
  const myHeaders = new Headers();
  myHeaders.append("apikey", "u4ELQHY8M9Z8Ga7SBsEhV08iBEZsk4jR");

  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/currency_data/convert?to=CHF&from=${currency}&amount=${amount}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const h3 = document.createElement("h3");
      h3.textContent = `${JSON.parse(result).result} - ${currency}`;
      div.appendChild(h3);
      main.appendChild(div);
    })
    .catch((error) => console.log("error", error));
};

const buttonEvent = (event) => {
  if (event.target.id === "usd") {
    const amounValue = input.value;
    getAPI("USD", amounValue);
  }
  if (event.target.id === "eur") {
    const amounValue = input.value;
    getAPI("EUR", amounValue);
  }
  div.textContent = "";
};

const callEvents = () => {
  main.addEventListener("click", buttonEvent);
};

callEvents();

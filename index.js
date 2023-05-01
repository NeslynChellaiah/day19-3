fetch("https://dog-api.kinduff.com/api/facts")
  .then((resp) => resp.json())
  .then((resp) => displayFact(resp.facts[0]))
  .catch((err) => console.error(err));

let displayFact = (resp) => {
  let text = document.createElement("p");
  text.innerText = resp;
  let body = document.querySelector("body");
  body.append(text);
};

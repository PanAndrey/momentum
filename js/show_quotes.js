async function getQuotes() {
  const quotes = "https://favqs.com/api/qotd";
  const res = await fetch(quotes);
  const data = await res.json();

  const quote = document.querySelector(".quote");
  const author = document.querySelector(".author");

  quote.innerHTML = data.quote.body;
  author.innerHTML = data.quote.author;
}

export default getQuotes;

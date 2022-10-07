let factOfTheDay = document.getElementById("fact-of-the-day");
axios
  .get("https://uselessfacts.jsph.pl/random.json?language=en")
  .then((response) => {
    factOfTheDay.innerHTML = response.data.text;
    console.log(response);
  });

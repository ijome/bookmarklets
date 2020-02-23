document.querySelectorAll("article").forEach(article => {
  let titles = article.querySelectorAll(":scope title");

  if (titles && titles.length > 0) {
    let foundPlus = Array.from(titles).find(title =>
      title.textContent.includes("Spiegel Plus")
    );
    if (foundPlus) {
      article.style.display =
        article.style.display !== "none" ? "none" : "block";
    }
  }
});

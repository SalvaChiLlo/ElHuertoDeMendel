const articles = document.querySelectorAll(".article")

articles.forEach(article => {
  article.addEventListener('click', (e) => {
    article.classList.toggle("active")
  })
});
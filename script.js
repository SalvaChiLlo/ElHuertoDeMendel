const articles = document.querySelectorAll(".article")
const burger = document.querySelector(".burger")
const navigation = document.getElementsByTagName('nav')[0]
console.log(navigation)
articles.forEach(article => {
  article.addEventListener('click', (e) => {
    article.classList.toggle("active")
  })
});

burger.addEventListener('click', (e) => {
  e.preventDefault()

  burger.classList.toggle('active')
  navigation.classList.toggle('active')
})
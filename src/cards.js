const seeurl = window.location.search;
const decodeUrll = decodeURIComponent(seeurl.slice(1))

const getData = JSON.parse(localStorage.getItem(decodeUrll))

console.log(getData)

const textContainer = document.querySelector(".text-container");
console.log(textContainer)
const div = document.createElement("div")
div.innerHTML = ``



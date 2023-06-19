const itemElem = document.querySelectorAll('.item')
console.log(itemElem)
itemElem.forEach(function (item) {
    console.log("Category:", item.children[0].textContent)
    console.log("Elements:", item.children[1].children.length)
});
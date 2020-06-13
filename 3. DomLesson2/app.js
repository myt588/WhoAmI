// What you will learn:
// How to grab an Element
// How to traverse a list of Elemtns

// take a look at the "document"
// open inspection tool and type "document" then enter
document
document.getElementById('page-banner')
// Grab an element by ID
var banner = document.getElementById('page-banner')
banner

// Grab multiple elements by Classname
var titles = document.getElementsByClassName('title')
// It looks like an array but it's a little different -> HTML collection (https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection)
titles[0]
titles[1]

// Grab elements by tag name
var lis = document.getElementsByTagName('li')

// traverse the title elements
var titles = document.getElementsByClassName('title')
for (var i = 0; i < titles.length; i ++) {
  console.log(titles[i])
}

// Another way to traverse the elements
// One of the difference between HTMLCollection and Array is that HTMLCollection cannot use array methods
// ... is call Spread Operator: (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
// It converts HTMLElements into an Array
// ES 5
[...titles].forEach((title) => {
  console.log(title)
})

// ES 6
Array.from(titles).forEach((title) => {
  console.log(title)
})

// Change / Remove HTML elements in the DOM

// Change & add CSS styles to elements

// Read & Change elements attributes (href, src, alt, custom)

// Create new HTML elements and insert them into the DOM

// Attach event listeners to elements (click, keypress, submit)
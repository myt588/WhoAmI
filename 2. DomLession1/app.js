// What you will learn:
// DOM
// How to grab an element/elements
// How to traverse a list of elements
// JS
// JS variable declaration
// Difference between let, const, and var

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

// QuerySelector to grab element/elements
const blog2 = document.querySelector('#blog-list li:nth-child(2) .name')
console.log(blog2)

let blogs = document.querySelector('#blog-list li .name')
console.log(blogs)

blogs = document.querySelectorAll('#blog-list li .name')
console.log(blogs)

// NodeList vs HTMLCollection
// NodeList is static
// HTMLCollection is live

// Diff between let, var, const (More differences: https://tylermcginnis.com/var-let-const/)
// const needs to be initialized
const a // error
let a // ok
var b // ok

// const can't be mutated
const a = 3
a = 4 // error

// Valid variable names
var a
var a1
var $a
var _a

// bad variable names
var mercari_user
// var 1a
// var a-1, no special chars
// var let, reserved words

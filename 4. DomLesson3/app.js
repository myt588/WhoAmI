// What you will learn:
// Events (https://developer.mozilla.org/en-US/docs/Web/Events)
// Remove HTML elements in the DOM 

// Attach an event to an Element
var h2 = document.querySelector('#blog-list h2')
h2.addEventListener('click', (e) => {
  console.log(e.target)
  console.log(e)
})
// var body = document.querySelector('body')
// body.addEventListener('mousemove', (e) => {
//   console.log(e)
// })

// const blogList = document.querySelectorAll('#blog-list .delete');

// Array.from(blogList).forEach(function(item){
//   item.addEventListener('click', (e) => {

//     const li = e.target.parentElement;
//     console.log('child element to remove:', li);
//     console.log('parent element to remove child from:', li.parentElement);
//     li.parentNode.removeChild(li);

//   });
// });

// prevent default behaviour

const link = document.querySelector('nav > ul > li:nth-child(3)');

link.addEventListener('click', function(e){
  e.preventDefault();
  console.log('Navigation to', e.target.textContent, 'was prevented');
});


// Problem, if we manually add a new blog, there is no event listener attached to the new blog
// it's heavy work that we attach events to the element indivually

const list = document.querySelector('#blog-list ul');

list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});


// Change / Remove HTML elements in the DOM

// Change & add CSS styles to elements

// Read & Change elements attributes (href, src, alt, custom)

// Create new HTML elements and insert them into the DOM

// Attach event listeners to elements (click, keypress, submit)
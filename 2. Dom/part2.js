// What you will learn:
// Change / Remove HTML elements in the DOM

// Update textContent of an Element
var blogs = document.querySelectorAll('#blog-list li .name')

blogs.forEach((blog) => {
  console.log(blog.textContent)
  // blog.textContent = 'good day mate'
  // blog.textContent += 'Featured blog'
})

// Update HTML Element / replace HTML Element
// const blogList = document.querySelector('#blog-list')
// blogList.innerHTML = '<h2> Good day mate </h2>'
// blogList.innerHTML += '<h2> Good day mate </h2>'

// Check parent, children, siblings
const blogList = document.querySelector('#blog-list')
console.log('self:', blogList)
console.log('parentNode:', blogList.parentNode)
console.log('childNodes:', blogList.childNodes)
console.log('previousSibling:', blogList.previousSibling)
console.log('nextElementSibling:', blogList.nextElementSibling)

blogList.previousElementSibling.querySelector('p').innerHTML += '<br />My best blogs'
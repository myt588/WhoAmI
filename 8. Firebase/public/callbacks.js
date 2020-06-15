const blogs = [
  'DOM is so fun',
  'Baby Hit me one more time'
]

function getBlogs() {
  setTimeout(() => {
    blogs.forEach((blog) => {
      // create elements
      const li = document.createElement('li');
      const blogName = document.createElement('span');
      const deleteBtn = document.createElement('span');
  
      // add text content
      blogName.textContent = blog;
      deleteBtn.textContent = 'delete';
  
      // add classes
      blogName.classList.add('name');
      deleteBtn.classList.add('delete');
  
      // append to DOM
      li.appendChild(blogName);
      li.appendChild(deleteBtn);
      list.appendChild(li);
    })
  }, 1000)
}

function createBlog(blog, callback) {
  setTimeout(() => {
    callback()
    blogs.push(blog)
  }, 2000)
}

createBlog('good day', getBlogs)
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

function createBlog(blog) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogs.push(blog)
      const error = false
      if (!error) {
        resolve('resolved')
      } else {
        reject('NOOOOOOOO, eerrororroro')
      }
    }, 2000)
  })
}

// createBlog('good day').then(getBlogs).catch(err => console.log(err))

const promise1 = new Promise((resolve, reject) => {
  resolve('nice nice')
})

const promise2 = Promise.resolve('nice nice nice')

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved')
  }, 2000)
})

// // It will be resolved after the promise that takes the longest finishes, which is createBlog in this case
Promise.all([promise1, promise2, promise3]).then(res => console.log(res))


// Async / Await

const asyncWay = async () => {
  try {
    await createBlog('good day')
    getBlogs()
  } catch (error) {
   console.log(error) 
  }
}

asyncWay()
// Module is self contained:
// Namespacing / no more global variables
// Less repetitive code
// More details on benefits: https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/
class APIClient {
  constructor() {
    this.blogs  = [
      "DOM is so fun",
      "Javascript Rocks",
      "You Don't Know JS",
      "Why is JS so weird"
    ]
  }
  
  getBlogs() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.blogs)
      }, 1000)
    })
  }
  
  createBlog(blog) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.blogs.push(blog)
        resolve()
      }, 1000)
    })
  }

  deleteBlog(blog) {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.blogs = this.blogs.filter((value) => value != blog)
        resolve()
      }, 1000)
    })
  }
}

class BlogList {
  constructor() {
    this.list = document.querySelector('#blog-list ul');
    this.form = document.forms['add-blog'];
    this.addInput = document.forms['add-blog'].querySelector('input[type="text"]')
    this.hideBox = document.querySelector('#hide');
    this.searchBar = document.forms['search-blogs'].querySelector('input');
    this.APIClient = new APIClient()
    this.bindEvents()
    this.render()
  }
  bindEvents() {
    this.list.addEventListener('click', this.onDeleteButtonClick.bind(this));
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.hideBox.addEventListener('change', this.onHideBoxChange.bind(this));
    this.searchBar.addEventListener('keyup', this.onSearchBarChange.bind(this));
  }
  onDeleteButtonClick(e) {
    if(e.target.className == 'delete'){
      const blog = e.target.previousSibling.innerText
      this.APIClient.deleteBlog(blog)
      this.render()
    }
  }
  async onSubmit(e) {
    e.preventDefault();
    const value = this.addInput.value
    await this.APIClient.createBlog(value)
    this.render()
  }
  onHideBoxChange(e) {
    if(this.hideBox.checked){
      this.list.style.display = "none";
    } else {
      this.list.style.display = "initial";
    }
  }
  onSearchBarChange(e) {
    const term = e.target.value.toLowerCase();
    const blogs = this.list.getElementsByTagName('li');
    Array.from(blogs).forEach((blog) => {
      const title = blog.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        blog.style.display = 'block';
      } else {
        blog.style.display = 'none';
      }
    });
  }
  async render() {
    const blogs = await this.APIClient.getBlogs()
    var lis = ''
    blogs.forEach((blog) => lis += `<li><span class="name">${blog}</span><span class="delete">delete</span></li>`)
    this.list.innerHTML = lis
  }
}

new BlogList()
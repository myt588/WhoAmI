// Module is self contained:
// Namespacing / no more global variables
// Less repetitive code
// More details on benefits: https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/

class BlogList {
  constructor() {
    this.blogs = [
      'DOM is so fun',
      'Baby Hit me one more time'
    ]
    this.list = document.querySelector('#blog-list ul');
    this.form = document.forms['add-blog'];
    this.hideBox = document.querySelector('#hide');
    this.searchBar = document.forms['search-blogs'].querySelector('input');
    this.bindEvents()
  }
  bindEvents() {
    this.list.addEventListener('click', this.onDeleteButtonClick.bind(this));
    this.form.addEventListener('submit', this.onSubmit.bind(this));
    this.hideBox.addEventListener('change', this.onHideBoxChange.bind(this));
    this.searchBar.addEventListener('keyup', this.onSearchBarChange.bind(this));
  }
  onDeleteButtonClick(e) {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  }
  onSubmit(e) {
    e.preventDefault();
    console.log('dddd')
    // create elements
    const value = this.form.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const blogName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    blogName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    blogName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(blogName);
    li.appendChild(deleteBtn);
    this.list.appendChild(li);
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
}

new BlogList()
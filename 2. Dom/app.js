// What you will learn:
// Search / Filter Element

const list = document.querySelector('#blog-list ul');
const forms = document.forms;

// delete blogs
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add blogs
const addForm = forms['add-blog'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
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
  list.appendChild(li);

  addForm.querySelector('input[type="text"]').value = ''
});

// hide blogs
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
  if(hideBox.checked){
    list.style.display = "none";
  } else {
    list.style.display = "initial";
  }
});

// filter blogs
const searchBar = forms['search-blogs'].querySelector('input');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const blogs = list.getElementsByTagName('li');
  Array.from(blogs).forEach((blog) => {
    const title = blog.firstElementChild.textContent;
    if(title.toLowerCase().indexOf(e.target.value) != -1){
      blog.style.display = 'block';
    } else {
      blog.style.display = 'none';
    }
  });
});

document.addEventListener('DOMContentLoaded', function(){ 
  console.log('Loaded')
})
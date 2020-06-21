// What you will learn:
// Add a new Element into the DOM
// Update the css of an Element

// delete
const list = document.querySelector('#blog-list ul');

list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// add
const forms = document.forms;
console.log(forms);
console.log(forms['add-blog']);

Array.from(forms).forEach(function(form){
  console.log(form);
});

const addForm = forms['add-blog'];
addForm.addEventListener('submit', function(e){
  e.preventDefault();
  // const value = addForm.querySelector('input[type="text"]').value;
  // console.log(value);

  // create elements
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const blogName = document.createElement('span');
  const deleteBtn = document.createElement('span');

   // add text content
   blogName.textContent = value;
   deleteBtn.textContent = 'delete';

   // add class
   blogName.className = 'name';
   deleteBtn.className = 'delete';
 
   // append to DOM
   li.appendChild(blogName);
   li.appendChild(deleteBtn);
   list.appendChild(li);
});

// const input = document.querySelector('#add-blog > input')
// input.addEventListener('keydown', function(e) {
//   const value = addForm.querySelector('input[type="text"]').value;
//   const newValue = e.key
//   console.log(value + newValue)
// })

// const li = document.querySelector('#blog-list li:last-child')
// li.style.color = 'red'
// li.style.marginTop = '60px'
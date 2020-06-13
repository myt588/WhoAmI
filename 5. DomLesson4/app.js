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
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

   // add text content
   bookName.textContent = value;
   deleteBtn.textContent = 'delete';

   // add class
   bookName.className = 'name';
   deleteBtn.className = 'delete';
 
   // append to DOM
   li.appendChild(bookName);
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

// Change / Remove HTML elements in the DOM

// Change & add CSS styles to elements

// Read & Change elements attributes (href, src, alt, custom)

// Create new HTML elements and insert them into the DOM

// Attach event listeners to elements (click, keypress, submit)
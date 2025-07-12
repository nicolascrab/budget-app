//GLOBAL SCOPE
const scriptURL = 'https://script.google.com/macros/s/AKfycbx9QYnhii0ya1_vhuZznkUhIFD8akkSpLtqUHh-1N9xTn9XE_cGx3P3f0xO74AB95Mn1A/exec'
const form = document.querySelector('form.form_flex');

//TESTING
form.addEventListener('submit', e => {
  e.preventDefault();
  const submitData = new FormData(form);

  //---outputs a specific key if the name is known---
  //console.log("Description: " + submitData.get('Description'));
  
  //---converts it to a js object and outputs every key-value pair---
  //entires() method returns an Iterator with all the values
  const submitDataIterator = submitData.entries(); 
  const readableObject = Object.fromEntries(submitDataIterator);
  console.log(readableObject);



});

/*FORM SUBMIT EVENTLISTENER
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})*/
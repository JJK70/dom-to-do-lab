const input = document.querySelector('input')
const btn = document.querySelector('button')
document.querySelector('ul').addEventListener('click', handleclick)

function handleclick(evt){
  console.log(evt)
}
btn.addEventListener('click', function(evt) {
  const li = document.createElement('li')


  //// access the text from the input & store the text in the <li>
  li.textContent = input.value
  console.log(li)
  //// add the <li> (with the text included) to HTML (in the <ul>)
  document.querySelector('ul').appendChild(li)
  input.value = ''


})
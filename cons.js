
let submit  = document.getElementById('submit');
let table = document.getElementById('table');




let myLibrary = [{title: "wife", author: "ana", pages: 20, readStatus: "yes"}];

submit.addEventListener('click', function(){
  let title = document.getElementById('booktitle');
  let author = document.getElementById('authorname');
  let pages = document.getElementById('pagescount');
  let readStatus = document.getElementById('status');
  addBookToLibrary(title, author, pages, readStatus);
  console.log(myLibrary);
});

function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = read;
  //this.info = function(){
    //  return(this.title +" by "+ this.author+ ", has "+this.pages+" pages, "+ read)
 // }
}

function addBookToLibrary(title, author, pages, readStatus){
  let userBook = new Book(title.value, author.value, pages.value, readStatus.value);
  myLibrary.push(userBook); 
  table.innerHTML += `   
    <td>${userBook.title}</td>
    <td>${userBook.author}</td>
    <td>${userBook.pages}</td>
    <td>
      <select id="newStatus">
        <option value="userStatus">${userBook.readStatus}</option>
        <option value="Read">Not read yet</option>
        <option value="Not read">Read already</option>
      </select>
    </td>
    <td><button class="delete">${"Delete"}</button></td>
    `;
  }
  let remove = document.querySelectorAll(".delete");
  remove.forEach(function(element){
    element.onclick = function(){
      let grandpa = this.parentElement.parentElement;
      grandpa.remove();
    }
})





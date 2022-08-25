
// const fetchBooks = async ()=>{

//   let res = await fetch("https://anapioficeandfire.com/api/books")
//   .then((res)=>res.json())

//   console.log("done")

//   console.log(res)

//   renderBooks(res)

// }


function fetchBooks(){

  // let res = await fetch("https://anapioficeandfire.com/api/books'")
  //   .then((res)=>res.json())

  // console.log("done")

  // console.log(res)

  // renderBooks(res)

  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => renderBooks(json))


  // To pass the tests,   don't forget to return your fetch!
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

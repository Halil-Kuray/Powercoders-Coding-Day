const btn = document.getElementById("add-btn")

let bookList = [
    {
        title:'x',
        author:'y',
        price: 20,
        cuurency: 'CHF',
        stock:5
    },
    {
        title:'a',
        author:'b',
        price: 15,
        cuurency: 'CHF',
        stock:4
    },
    {
        title:'k',
        author:'l',
        price: 10,
        cuurency: 'CHF',
        stock:6
    }
];


function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}


function renderList(pArray) {
    
    let sortedList = pArray.sort( compare );
    const list = document.getElementById("books");

    list.innerHTML = sortedList.map((book, index) => {

        return `
        <li class="book${index + 1}">
            <h2>Title: ${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price} ${book.cuurency}</p>
            <p>Stock: ${book.stock}</p>
        </li>
        `;
  })
  .join("");
}
renderList(bookList);
 
function addItem() {

const title = document.getElementById("title")
const author = document.getElementById("author")
const price = document.getElementById("price")
const currency = document.getElementById("currency")
const stock = document.getElementById("stock")
    
let newBook =  {
    title: `${title.value}`,
    author:`${author.value}`,
    price: `${price.value}`,
    currency:`${currency.value}`,
    stock:`${stock.value}`
}

bookList.push(newBook);
renderList(bookList)
}

btn.addEventListener("click", addItem);


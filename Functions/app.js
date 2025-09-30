//! Functions

//? 📌 Example : Bank Account System

let customers = [
    {name: "Eve", balance: 500},
    {name: "Frank", balance: 300},
    {name: "Grace", balance: 700}
];  
function addCustomer(customers) {
let newCustomerName = prompt(`enter name `);
let newCustomerBalance = +prompt(`enter your blance`);
customers.push({name: newCustomerName , balance: newCustomerBalance});
alert (` Successful ${newCustomerName} added `);
}

function depositWithdraw(customers) {  //para yatirma ve cekme
let customName = prompt(`enter name `);
let select = prompt (` Islem seciniz depozite or withdraw  ( deposiz ise D yazin ) ( Withdraw ise W yazin )`)
let miktar = +prompt(`Islem yapmak istediginiz tutari girin lutfen`);
let customer = customers.find(cust => cust.name === customName);
 if (!customer)  alert(`Dont find the customer`)
 else{
     if(select=== `d` || select === `D`)
    {
        customer.balance += miktar;
        alert(` ${customName} New blance  ${customer.balance}`)
    }
    else if (select=== `w` || select === `W`)
    {
        if (customer.balance >= miktar){

            customer.balance -= miktar;
            alert(` ${customName} New blance  ${customer.balance}`)
        }
         
    }
    else return (` gecersiz deger .`)
 }
   
}
depositWithdraw(customers);

function calculateTotalBalance(customers) {
  return customers.reduce((sum, customer) => sum + customer.balance, 0);
}


function totalNameLength(customers) {
  if (customers.length === 0) return 0;
    return customers[0].name.length + totalNameLength(customers.slice(1));  
}
addCustomer(customers);





//? 📌 Example : Library Book System

let books = [
    {title: 'Book A', author: 'Author A', inStock: true,  borrowedBy: null},
    {title: 'Book B', author: 'Author B', inStock: false ,  borrowedBy: null},
    {title: 'Book C', author: 'Author C', inStock: true ,  borrowedBy: null}
];  


function addBooks(books)
{
 let newBook = prompt(`Enter book title: `);
 let newAuthor = prompt(`Enter book author: `);
 let newInStock = confirm(`Is the book in stock? `); // confirm true veya false deger dondurur  
 books.push({title: newBook, author: newAuthor, inStock: newInStock , borrowedBy: null});
}
addBooks(books);
console.log(books);

function deleteBooks(books)
{
let oldBook = prompt(`Enter book title`);
let oldAuthor = prompt(`Enter book author: `);
// filtre dizinin tamamini gezer ve sadece kosullari saglayani icinde tutar
let updateBooks = books.filter(
    book => book.title !=oldBook || book.author !==oldAuthor) // kitap isimleri ve yazarlari esitdegilse listede kalir esitse listeden ciakrir
    
if (updateBooks.length ===  books.length) {console.log(`kitap bulunamadi`)}
else{console.log(`kitap silindi`)}
return updateBooks;
}

books = deleteBooks(books);
console.log(books);

function  borrowBook (books)
{
 let bookTitle = prompt("Enter book title to borrow: ");
 let customerName = prompt("Enter your name: ");

 let book = books.find(book=>book.title === bookTitle);
 if (!book){ console.log("Kitap bulunamadı!");}
 else if (!book.inStock) {console.log("Üzgünüm, bu kitap zaten ödünçte!");}
 else  {
     book.inStock = false;
    book.borrowedBy = customerName;
    console.log(`${customerName} adlı kişi "${book.title}" kitabını ödünç aldı.`);
 }
}
borrowBook(books);

function  returnBook (books)
{
  let bookTitle = prompt("Enter book title to return: ");
  let book = books.find(book => book.title === bookTitle);
   if (!book) {
    console.log("Kitap bulunamadı!");
  }
  else if (book.inStock) {
    console.log("Bu kitap zaten rafta");
  } else {
    console.log(`${book.borrowedBy} adlı kişi "${book.title}" kitabını geri getirdi.`);
    book.inStock = true;       // tekrar rafta
    book.borrowedBy = null;    // artık kimseye ait değil
  }
}
returnBook(books);
console.log(books);
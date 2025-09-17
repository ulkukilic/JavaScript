//! Fonksiyonlar

// fonskiyonlar gereksiz yere tekrar tekrar yazılmaması için kullanılır
// belirli bir işi yapan kod bloklarıdır
// tanımlanması ve çağrılması gerekir
// parametre alabilirler ve geriye değer döndürebilirler    


function  sumNames(num1, num2) {
    console.log(num1 + num2);

}
sumNames(3, 5); // 8
sumNames(10, 20);


//? bir banka uygulaması yapalım obje ile 3 musteri tanimlayalim ve daha sonra fonsiyonlar ile islemlerini yaptirtalim 

let customer1 = {
    name: 'Ece',
    surname: 'Yilmaz',
    age: 30,
    balance: 5000
}

let customer2 = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    balance: 10000
}   
let customer3 = {
    name: 'Jane',
    surname: 'Smith',
    age: 25,
    balance: 7000
}   

function showBalance(customer) {
    console.log(`Dear ${customer.name} ${customer.surname} your balance is ${customer.balance} USD`);
}

showBalance(customer1);
showBalance(customer2);
showBalance(customer3);

function deposit(customer, amount) { // para yatirma
if (amount > 0 && typeof amount === 'number') {
    let amount =+ prompt('Enter amount to deposit: ');
    customer.balance += amount;
    console.log(`Dear ${customer.name} ${customer.surname}, your new balance is ${customer.balance} USD`);  
} else {
    console.log('Invalid amount. Please enter a positive number.'); 
}   
}
deposit(customer1, 2000);


function withdraw(customer, amount) { // para cekme
    if (amount > 0 && typeof amount === 'number' && amount <= customer.balance) {
     let amount =+ prompt('Enter amount to withdraw: ');
        customer.balance -= amount;
        console.log(`Dear ${customer.name} ${customer.surname}, your new balance is ${customer.balance} USD`);  
    } else {
        console.log('Invalid amount. Please enter a positive number less than or equal to your balance.'); 
    }   
}
withdraw(customer2, 1000);



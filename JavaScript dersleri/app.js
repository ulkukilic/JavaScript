console.log('--------');
let birthday = "21.04.2025";   
console.log( birthday);

let name ="ahmet";
let age=80;
console.log(typeof name);
console.log(typeof age);



let number1=15;
let number2 =20;
console.log(number1+number2);


console.log(" iki sayinin toplami "  + (number1+number2));

let total= number1+number2;
console.log("toplam "+ total);

console.log(" iki sayinin toplami "   + (number1 + number2) );
console.log (`${total}`);
console.log (` toplam sayi ${total}`);  

let total2=number1*number2;
console.log(total2);


 let marka = ["Stradivarius", "Zara", "Bershka", "Pull and Bear", "H&M"];
      console.log(marka); 
      console.log(marka[0]);
      console.log(marka[1]);
      console.log(marka[4]);
      console.log("en sevdigim marka " + marka[0]);


      let nameSurname2;

function printNameSurname() {
  nameSurname2 = "Erdem Gir"; 
}

printNameSurname();
console.log(nameSurname2); 


/*let isim = prompt("Aadini git :");
alert("Merhaba " + isim);


let sayi1 = prompt("birinci");
let sayi2 = prompt("ikicinci");

let toplam = Number(sayi1) + Number(sayi2);

alert("Toplam: " + toplam);*/

// let name3 = prompt("ad");
// let age3 = prompt("yas");
// let  birthday2 = prompt("yilini yaz"); 

// yas = Number(age3);
// birthday2=  2025 - Number(birthday2);
// alert("Merhaba " + name3 + ", yas: " + age3 + "hesaplanmis hali " + birthday2);

// console.log("Merhaba " + name3 + ", yas: " + age3 + "hesaplanmis hali " + birthday2);



// let sayi1 = prompt("birinci");
// let sayi2 = prompt("ikicinci");
// let sayi3=prompt("ucuncu");

// let toplam = (Number(sayi1) + Number(sayi2) + Number(sayi3))/3;
// // let total3 = (toplam/3);

// alert("Toplam: " + toplam + " Total " +  total3);
// console.log("Toplam: " + toplam + " Total " +  total3);
// console.log(toplam);

let ortalama = (Number(prompt("birinci")) + Number(prompt("ikinci")) + Number(prompt("ucuncu"))) / 3;
alert("Ortalama: " + ortalama);

  //  console.log('Hello Word!');  // basic bir string deger yazdirmak icin bu formatta kullanilir .
  // Note : degisken mantigi  $data = 'JavaScript' ;   a= $data  yani  data degiskeni iceriisnde javascript  a  ya atandi 
  // CRTL K C 
  
//   name = ' Ece ';
//   console.log(name);
//   name = ' Eda';
//   console.log(name);    // bu bir atama islemidir ve degisiklik yapilabilri fakat 


// let name = "ece";
// console.log(name);
// name = "edA";
// console.log(name);
// let surname = "efecan";
// console.log(surname);

/* let ile const arasindaki fark ise let degisicek degiskenlerde kullanilir 
const ise bir daha asla dgeistirilmeyecek degerlerde kullanilir pi sayisi 3,14  ornegin ya da haftanin kac gun oldugu */ 


const pi =3.14;
console.log(pi);

// const pi     //  Identifier 'pi' has already been declared   // 'pi' tanımlayıcısı zaten tanımlanmıştır.



//let birtday = 21.04.2025;  // bu bir tarih ama js bunu matematik islemi gibi algiliyor ve okumuyor 

let birthday = "21.04.2025";   
console.log( birthday);

// let myBirthday = new Date("2003-04-21");
// console.log(myBirthday);

let story="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(story);



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


/* Ust alma islmei */
let number3=4;
console.log(`${number3 ** 2}`);


let operator=3;
operator= ++ operator;
console.log(operator);
operator= operator ++ ;
console.log(operator);


/* Kelime uzunlugu */
let story2="What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(story2);
console.log(story2.length);  

/* \n */  // TERS /  \  // new line anlamina geliyor
let story3="What is Lorem    Ipsum Lorem \n Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
console.log(story3);

console.log(story3.length);
console.log(story3.length-10);


/* DEGISKENLER */

/*
BOOL = mantiksal deggerler true veya false gibi   suyun kaynama degeri 10 derecedir false 
hava cok sicak   true  kullanilir 


string = text icerikleri icin 


int = 4 4 52


*/
let yas = 16;
let yetiskinMi = (yas >= 18);

console.log(yetiskinMi); 
// Çıktı: false

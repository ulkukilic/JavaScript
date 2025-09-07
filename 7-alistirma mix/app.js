//! OPERATORLER

//TODO   Kullanicidan bir sayi al , bu sayiyi 3 veya 5 e ayni anda bolup bolunmedigini yazdir .

// let num1 = +prompt('please enter a number')
// if (num1 % 3 === 0){
//     console.log("sayi 3 e bolunuyor ");
// }else if (  num1 % 5 === 0){
//     console.log('sayi 5 e bolunuyor');
// }else {
//     console.log('sayi 3 e de 5 e  bolunmuyor ');
// }

//TODO Kullanicidan 2 sayi al , buyuk olani yazdir 
// let num1 = +prompt('please enter a number');
// let num2 = +prompt('please enter a number');
// if(num1>num2){
// console.log(num1 + 'buyuktur ' + num2);
// }else if (num2>num1){
// console.log(num2 + 'buyuktur ' + num1);
// }else{
//     console.log('sayi esittir');
// }


//TODO  Kullanicidan bir sayi al , bu sayinin karesini ve kupunu yazdir 
// let num1 = +prompt('please enter a number');
// console.log("girilen sayinin karesi :" + num1**2 + " girilen sayinin kupu:" + num1**3);


//TODO Kullanicidan bir yas al 18 den kucukse resit degil yazdir 
// let num1 = +prompt('please enter a number');
// if (num1 > 18 ){
//     console.log("resitsin");
// }else if (num1 < 18){
//  console.log("daha kucuksun");
// }else{
//     console.log("resitligin hayirli olsun  :) ")
// }

//TODO  ne kadardir yasiyorsun 
// let birthday=new Date (prompt("please enter your birthday (yy-mm-dd)"));
// let now = new Date ();

// let age =  now - birthday ;  // 200706376617722    milisaniye cinsinden verir
// let day = Math.floor(age/(1000 * 60 *60 * 24)); //gün = 24 saat = 1000 × 60 × 60 × 24 ms
// let saat = Math.floor( age / (1000 * 60 * 60))  // 1 saat = 60 dakika = 1000 × 60 × 60 ms
// let month = Math.floor ( day / 30 );
// // let year = now.getFullYear() - birthday.getFullYear();
// // let month =  now.getMonth() - birthday.getMonth();
// // let totalmonth = year *12 + month ;
// // console.log(totalmonth + " aydir") // 269
// console.log( day +" gundur yasiyorsun "  + saat + "saatdir yasiyorsun " + "ve yaklasik olarak bu " +  month + " aydir " );

//! DIZILER

//TODO bir dizi tanimla ve ilk ve son elemaini ekrana yazdir 
// let array = [1, 15, 25, 45];

// console.log("İlk eleman:", array[0]);
// console.log("Son eleman:", array[array.length - 1]);



//TODO kullanicidan 3 sayi al ve diziye ekle en buyuk en kucuk degeri bul 
// let num1 = +prompt("please enter a number") ;
// let num2 = +prompt("please enter a number") ;
// let num3 = +prompt("please enter a number") ;

// let numbers =[1, 15, 18, 25];
// numbers.push(num1,num2,num3);
// console.log(numbers);

//? ya ayniis varsa zaten dizide kontrol et yoksa ekle 
// let num1 = +prompt("please enter a number") ;
// let num2 = +prompt("please enter a number") ;
// let num3 = +prompt("please enter a number") ;

// let numbers =[1, 15, 18, 25];
// if (!numbers.includes(num1)){
//     numbers.push(num1);
// }else if (!numbers.includes(num2)){
//     numbers.push(num2);
// }else if (!numbers.includes(num3)){
//     numbers.push(num3);
// } else {
//     console.log("hepsi zaten ekli")
// }
//  console.log(numbers);

//TODO dizide bulunanlari cift olanlari diziye al ve yazidr 

// let num1 = +prompt("please enter a number") ;
// let num2 = +prompt("please enter a number") ;
// let num3 = +prompt("please enter a number") ;
// let numbers =[1, 15, 18, 25];
// if(num1 % 2 === 0){
//     numbers.push(num1);
// }if (num2 % 2 === 0){
//  numbers.push(num2);
// } if (num3 % 2 === 0){
//  numbers.push(num3);
// } if (num1 % 2 !== 0 && num2 % 2 !== 0 && num3 % 2 !== 0){
//     console.log('hic biri cift degil !!!!!!!!');
// }
// if(num1 % 2 == 0 && num2 % 2 == 0 && num3 % 2 == 0){
//     console.log('hepsi cift ve eklendi ');
// }
//  console.log(numbers);


//TODO dizi tanimla kullanicidan bir  sey girmesini iste dizide yoksa bulunamadi yazsin 
// let idNumbers =[1, 15, 18, 25];
// let num1 = +prompt(" hangi id  numarasini ariyorsun ") ;
// if (idNumbers.includes(num1))
// {
//     console.log('id bulundu ');
// }
// else {
//     console.log('id yok')
// }

//TODO  kullanicidan bir dizi tanimlattir 3 sayi olucak sekilde daha sonra onun ortalamasini yazdir 
// let num1 = +prompt("please enter a number") ;
// let num2 = +prompt("please enter a number") ;
// let num3 = +prompt("please enter a number") ;
// let array= [];
// array.push(num1,num2,num3);
// console.log( ' sayilarin ortalamasi :' + ( (num1 +num2 +num3) /3  )  + ' ve yazilan sayilar ise sirasi ise ' +array);

//! Donguler 
//TODO 1 den 10 a kadar tek sayilari yazdir 
// for(let i=0; i < 10 ;  i++)
// {
//     if (i % 2 !== 0)
//     {
//         console.log(i);
//     }
// }
// console.log('________________');
// //? cift olurs eger 
// for(let i=0; i < 10 ;  i++)
// {
//     if (i % 2 !== 0)
//     {
//         i++
//         console.log(i);
//     }
// }

//TODO dizi tanimla ve her ismin yanina hosgeldin yazdir ornek ['ayse' , 'fatma' ]  Hosgeldin fatma
// let personName = ["ayse", "fatma" , "zehra" , "yalcin" , "tuhaf", 'Selam']
// for (let i = 0 ; i <personName.length; i++){
// console.log(personName[i] + ' hosgeldin ');
// }


//TODO Kullanıcıdan bir sayı al → 1’den o sayıya kadar olan asal sayıları yazdır.  // YANLISSSSS
// let num1= +prompt('please enter a number');
// for (let i = 0 ; i < num1 ; i ++){
// if(i %2 !== 0 && i % 3 !== 0  && i % 5 !== 0  && i % 7 !== 0  )
// {
//     console.log('sayi asaldir :' +i );
// }
// }


//TODO Kullanıcıdan bir kelime al → kelimeyi ters çevir (örn: "Ali" → "ilA").
let kelime = prompt("Bir kelime gir:");
let ters = kelime.split("").reverse().join("");
console.log("Ters hali:", ters);
 
// split  parcalari ayirir    -> "Ali" → ["A", "l", "i"]
// reverse  ters ceviri  ve dizi mantiginda calisir   -> ["A", "l", "i"].reverse() → ["i", "l", "A"]
// join stringe ceviri  -> ["i", "l", "A"].join("") → "ilA"

//TODO Bir dizide [2,4,6,8,10] → döngüyle her elemanı 2 ile çarpıp yazdır.

//TODO Bir dizide [“elma”, “muz”, “armut”] → for döngüsüyle dizinin elemanlarını numaralandırarak yazdır:
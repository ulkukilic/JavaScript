//! 1) Fonksiyon & Koşullar
// Bir fonksiyon yaz:
// - Parametre olarak bir sayı alsın.  
// - Eğer sayı tek ise "Tek sayı" yazsın.  
// - Eğer çift ise "Çift sayı" yazsın.  
// - Eğer sayı negatif ise "Negatif sayı" yazsın.  
// - Eğer sayı 0 ise "Sıfır" yazsın.  
// // num = +prompt('Bir sayı girin:');
// // function checkNumber(num)
// // {
// //      if (num === 0 || isNaN(num) || num === '' || num === null)
// //     {
// //      alert('Geçersiz sayı');
     
// //     } 
// //     else if (num < 0)
// //     {
// //         alert('Negatif sayı');
// //     } 
// //     else if (num %2 === 0 )
// //     {
// //         alert("Çift sayı");
// //     }
// //     else if (num %2 !==0)
// //     {
// //         alert('Tek sayi');
// //     }
        
// //     else
// //     {
// //         alert('Geçersiz sayı')  ;
// //     }
    
// // }
// // checkNumber(num);

//! 2) Array ve Döngü
// - İçinde 10 rastgele sayı (0–100 arası) üreten bir array oluştur.  
// - Daha sonra:  
//   - Dizideki en büyük sayıyı bul.  
//   - Dizideki çift sayıların toplamını bul.  
//   - Dizideki her sayıyı 2 ile çarpıp yeni bir dizi oluştur.   array.contact()  yeni birleştirilmiş array oluşturur array.filter() yeni bir array oluşturur belirli koşullara göre
//

//let newArray = [];
// let array = [];
// let max=0;
// let sum =0;
// for ( let i =0; i<10; i++)
// {
//     array.push(Math.floor(Math.random()*100));
//     //console.log(array[i]);
//     if (array[i]> max)
//     { 
//         // console.log(max);
//         max = array[i];
//         //TODO let max = Math.max(...array);
//     }
//     if (array[i]%2 ===0)
//     {
//         // console.log(array[i]);
//         //console.log(sum);
//         sum = sum + array[i];
//     }
//       newArray.push(array[i] * 2);

// }
// console.log(array);
// console.log("En büyük sayi: " + max);
// console.log("Çift sayıların toplamı: " + sum);
// console.log("Her sayının 2 ile çarpılmış hali: " + newArray);

//! 3) Object ve String
// Bir kisi objesi oluştur:
// {
//    ad: "Ali",
//    soyad: "Yılmaz",
//    yas: 25,
//    meslek: "developer"
// }
// - Bu objeden bir cümle üret:  
//   "Benim adım Ali Yılmaz, 25 yaşındayım ve developer olarak çalışıyorum."  
// - ad ve soyad değerlerini birleştirip büyük harfe çevir.  
// - meslek alanını "Frontend Developer" olarak değiştir.  



// let person = {
//     name:'Elif',
//     surmame:'Akcali',
//     age:22,
//     job:'developer'
// }
// console.log(`Benim adım ${person.name} ${person.surmame}, ${person.age} yaşındayım ve ${person.job} olarak çalışıyorum.`);
// console.log((person.name + ' ' + person.surmame).toUpperCase());
// person.job = 'Frontend Developer';
// console.log(person.job);


//! 4) While / Do While
// Kullanıcıdan (prompt ile) sürekli sayı girmesini iste:
// - Kullanıcı 0 girdiğinde dur.  
// - Girilen sayıların ortalamasını hesapla ve yazdır.  

// let num ;
// while (num !== 0)
// {
//     let num = +prompt('Bir sayı girin (Çıkmak için 0 girin):');
//     if (num === 0)
//     {
//         break;
//     }
//  }

//! 5) Switch & String Methods
// Kullanıcıdan bir dosya adı al (ör: "belge.pdf", "foto.png", "veri.xls").
// - endsWith() kullanarak dosya uzantısını bul.  
// - Switch-case ile şu çıktıyı ver:  
//   - "pdf → Doküman dosyası"  
//   - "png → Resim dosyası"  
//   - "xls → Excel dosyası"  
//   - Diğerleri → "Bilinmeyen dosya türü"  

// //TODO  if else ile yapimi 
//let fileName = prompt("bir dosya adi giriniz");
// //console.log(fileName);
// if ( fileName === null || fileName === ''  )
// {
//     alert('Geçersiz dosya adı');
// }
// else if ( fileName.endsWith('.pdf') || fileName.endsWith('.PDF')  || fileName.endsWith('pdf'))
// {
//     alert('Doküman dosyası');
// }
// else if ( fileName.endsWith('.png') || fileName.endsWith('.PNG') || fileName.endsWith('png'))
// {
//     alert('Resim dosyası');
// }
// else if ( fileName.endsWith('.xls') || fileName.endsWith('.XLS') || fileName.endsWith('xls'))
// {
//     alert('Excel dosyası');
// }
// else
// {
//     alert('Bilinmeyen dosya türü');
// }
// //TODO switch case ile yapimi
//let fileName = prompt("bir dosya adi giriniz");
//  if (fileName === null || fileName === '' )
//  {
//    /* !!!!! */   throw new Error('Geçersiz dosya adı');   // throw ile hatayi durdurduk new Error ile hata mesaji verdik
//  }
// let endText =  fileName.toLowerCase().split(".").pop();  // split . dan sonrasini ayrir ve diziye ceviri pop() ise  dizilerde sonuncuyu alir
 
// switch(endText)
// {
//     case 'pdf':
//         alert('Doküman dosyası');
//         break;

//     case 'png':
//         alert('Resim dosyası');
//         break;

//     case 'xls': 
//         alert('Excel dosyası');
//         break; 

//     default:
//         alert('Bilinmeyen dosya türü');
//         break;
// }



//! 6) Fonksiyon + Array + Filter / Map
// Bir fonksiyon yaz:
// - Parametre olarak bir array alsın.  
// - Array içindeki asal sayıları bulup yeni bir array döndürsün.  

// let numbers = [10, 15, 23, 4, 7, 8, 11, 13, 16, 17];
// let onlyPrime = [];
// console.log(`Tum liste : ` , numbers)
// function findPrimes(numbers) {
//   for (let i = 0; i < numbers.length; i++) {  // burda array icerisinde bulunan tum elamnlar icinde geziyoruz 
//     let num = numbers[i];
//     let asal = true;

//     if (num <= 1) {
//       asal = false;
//     } else {
//       for (let j = 2; j < num; j++) {  // sayilari 2 den baslayarak kendisine kadar her deger uzerinde geziyorz
//         if (num % j === 0) {   // bolme yapiyoruz j degerleri kadar 
//           asal = false;
//           break;
//         }
//       }
//     }

//     if (asal) {
//       onlyPrime.push(num);
//       console.log(`Asal sayi bulundu: ${num}`);
//     }
//   }
// }

// findPrimes(numbers);
// console.log("Tüm asal sayilar:", onlyPrime);


//! 7) Bonus: Karışık
// Bir urun array’in olsun:
// [
//  {ad:"Telefon", fiyat:12000, stok:5},
//  {ad:"Bilgisayar", fiyat:25000, stok:2},
//  {ad:"Kulaklık", fiyat:2000, stok:0},
// ]
// - Stokta olan ürünleri yazdır.  
// - Fiyatı 5000’den büyük olan ürünleri bul.  
// - Toplam stok sayısını hesapla.   



// let  products = [
//     {name:"Telefon", price:12000, stock:5},
//     {name:"Bilgisayar", price:25000, stock:2},
//     {name:"Kulaklık", price:2000, stock:0},
// ]
// // - Stokta olan ürünleri yazdır.
// let inStockProducts= products.filter(products => products.stock > 0);  // stok durumu 0 dan buyukse filtrele
// console.log("Stokta olan ürünler: ", inStockProducts);
// // - Fiyatı 5000’den büyük olan ürünleri bul.
// let expensiveProducts = products.filter(products => products.price > 5000); // fiyat 5000 den buyukse filtrele
// console.log("Fiyatı 5000'den büyük olan ürünler: ", expensiveProducts);
// // - Toplam stok sayısını hesapla.
//    let totalStock = 0;
//  for ( let i =0; i< products.length; i++)
//     {    
//         totalStock = totalStock + products[i].stock;
//     }
// console.log("Toplam stok sayısı: ", totalStock);


//! 8) Fonksiyon + String
// Bir fonksiyon yaz:
// - Parametre olarak bir string alsın.  
// - String’in ilk harfini büyük, diğerlerini küçük yaparak geri döndürsün.  
//   Örn: "jaVAsCript" → "Javascript"
// let str = prompt('Bir metin giriniz:');
// function string(str)
// {
// if (str === null || str === ''  )  //   || VEYA           && VE 
// {
//     throw new Error('Geçersiz metin'); 
// }
// let updateStr = str.toUpperCase()[0] + str.toLowerCase().slice(1);  // ilk harfi buyuk digerlerini kucuk yapar
// console.log(updateStr);

// }
// string(str);

//! 9) Array + For + If
// Kullanıcıdan 5 sayı alıp bir array’e koy.  
// - Daha sonra bu dizideki tek sayıların karesini yazdır.  
// - Çift sayıların küpünü yazdır.

// let userNumbers = [];
// for (let i = 0; i < 5; i++) {
//     let num = +prompt(`Lütfen ${i + 1}. sayıyı girin:`);
//     if (isNaN(num) || num === null || num === '') {
//         alert('Geçersiz sayı, lütfen tekrar deneyin.');
//         i--; // Geçersiz girişte döngü sayacını azaltarak tekrar denemeyi sağlar
//     } else {
//         userNumbers.push(num);
//     }
// }

// console.log("Girilen sayılar: ", userNumbers);
// for (let i = 0; i < userNumbers.length; i++) {
//     if (userNumbers[i] % 2 === 0) {
//         console.log(`${userNumbers[i]}  küpü:  ${userNumbers[i] ** 3}`);   //Math.pow(sayi, üs)
//     } else {
//         console.log(`${userNumbers[i]}  karesi: ${userNumbers[i] ** 2}`); 
//     }         
// }

//! 10) Object + Array
// Bir ogrenciler array’i olsun:
// [
//   {ad:"Ayşe", not:85},
//   {ad:"Ahmet", not:40},
//   {ad:"Mehmet", not:72}
// ]
// - Ortalamanın üstünde not alan öğrencileri bul.  
// - Notu 50’nin altında olan öğrencilerin adlarını büyük harflerle yazdır.  
// - En yüksek notu alan öğrenciyi bul.  


//! 11) While Döngüsü + String
// Kullanıcıdan sürekli kelime girmesini iste.  
// - Kullanıcı "STOP" yazana kadar devam et.  
// - Girilen her kelimeyi ters çevirerek ekrana yazdır.  
//   Örn: "Merhaba" → "abahreM"


//! 12) Switch + Math
// Kullanıcıdan bir işlem seçmesini iste (toplama, çıkarma, çarpma, bölme).  
// - İki sayı al.  
// - Switch-case yapısı kullanarak sonucu hesapla ve yazdır.  


//! 13) Fonksiyon + Array Methods
// Bir fonksiyon yaz:  
// - Parametre olarak [10, 25, 30, 45, 50] gibi bir sayı array’i alsın.  
// - map() ile her sayının yarısını hesaplasın.  
// - filter() ile sadece 20’den büyük olanları döndürsün.  
// - return edilen array’i console.log ile yazdır.  


//! 14) Bonus Object & String Methods
// Bir kitap objesi oluştur:
// {
//   baslik: "Suç ve Ceza",
//   yazar: "Dostoyevski",
//   sayfa: 550
// }
// - "baslik" ve "yazar" bilgisini birleştirip cümle haline getir.  
// - "baslik" bilgisindeki tüm karakter sayısını yazdır.  
// - "yazar" bilgisini ters çevir (split, reverse, join kullanarak).  

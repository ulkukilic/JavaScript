//! 1) Kullanıcıdan alınan bir cümlenin içindeki sesli harflerin sayısını bulan programı yazınız.

//TODO 2) 1’den 100’e kadar olan sayıların sadece 3 ve 5’e tam bölünebilenlerini ekrana yazdırınız.
// for (let i = 1; i <=100; i++)
// {
//    // console.log(i);
//     if (i % 3 === 0 && i % 5 === 0)
//     {
//       console.log(`${i} sayiyi 3 e ve 5 e tam bolunur  `);
//     }
// }
//! 3) Kullanıcıdan alınan bir sayının basamakları toplamını hesaplayan programı yazınız. 
// Örn: 123 → 1+2+3 = 6
// let number = prompt('bir syai giriniz');
// let toplam = 0 ;
// for (let i = 0 ; i < number.length ; i++)
// {
//   // console.log(Number(number[i]));
//      toplam += Number(number[i]); 
// }
// console.log(`number degeri ${number} ve toplamlari ${toplam} `);

//! 4) 10 elemanlı bir dizi tanımlayın. İçine 0-50 arası random sayılar atayın. 
// let randomD = [];

// for ( let i =0; i < 10 ; i ++)
// {
//     let number=Math.floor(Math.random()*50);
//     randomD.push(number)
// }
// console.log(`olusan dizi ${randomD}`);
////////////////////////////////////! 5) Kullanıcıdan alınan bir kelimenin palindrom olup olmadığını kontrol eden programı yazınız.
// Örn: "kayak" → palindrom


//! 6) Kullanıcıdan alınan bir sayının faktöriyelini hesaplayınız.
// Örn: 5 → 5*4*3*2*1 = 120
// let number = +prompt ('enter a number');
// console.log(number**number);

// let number = +prompt("Enter a number");
// let carpi = 1;

// for (let i = 1; i <= number; i++) {
//   carpi = carpi * i;
// }

// console.log(`${number} sayinin faktoriyeli = ${carpi}`);


//! 7) Kullanıcıdan alınan bir string içerisindeki boşlukları silip 
// sadece ilk harflerini büyük yaparak formatlayınız.
// Örn: "   meRhaBa   duNya  " → "Merhaba Dunya"

//! 8) Kullanıcıdan 5 sayı alıp bir diziye atınız. Daha sonra bu dizideki sayıların 
// ortalamasını ve ortalamanın üstünde olan sayıları ekrana yazdırınız.

//! 9) 1 ile 100 arasındaki asal sayıları bulan programı yazınız.

//! 10) Kullanıcıdan bir cümle alın. Cümlede en çok tekrar eden harfi ve tekrar sayısını bulunuz.
// Örn: "merhaba" → "a" harfi 2 kez tekrar etti

//! 11) Kullanıcıdan alınan bir kelimenin tüm harf kombinasyonlarını (permutasyonlarını) ekrana yazdırınız.
// Örn: "abc" → abc, acb, bac, bca, cab, cba

//! 12) Kullanıcıdan bir sayı alın. Bu sayıyı binary (ikilik) sisteme çeviren programı yazınız.
// Örn: 10 → 1010

//! 13) 1’den 50’ye kadar olan tüm sayıları yazdırın ama 
// 3’e bölünebilenlere "Fizz", 5’e bölünebilenlere "Buzz", 
// hem 3 hem 5’e bölünebilenlere "FizzBuzz" yazdırın.

//! 14) Bir dizi içerisindeki tekrar eden sayıları bulunuz.
// Örn: [1,2,3,2,4,5,1] → Tekrar edenler: 1,2

//! 15) Kullanıcıdan alınan bir cümlenin kelimelerini ters çevirip yazdırınız.
// Örn: "Ben Javascript öğreniyorum" → "nEJ tpircsavaJ muryoinreğ"


    
let day = 5;
let dayName;

switch (day) {
  case 1:
    dayName = "Pazartesi";
    break;
  case 2:
    dayName = "Salı";
    break;
  case 3:
    dayName = "Çarşamba";
    break;
  case 4:
    dayName = "Perşembe";
    break;
  case 5:
    dayName = "Cuma";
    break;
  case 6:
    dayName = "Cumartesi";
    break;
  case 7:
    dayName = "Pazar";
    break;
  default:
    break;
}

console.log(dayName);
// BREAK ISE DURDUMAK ANLAMINA GELIYOR EGER O KOSUL DOGRUYSA DURDUR DEVAM ETME AMA DOGRU DEGILSE DEVAM ET 



let grade = "a";
let message;

switch (grade) {
  case "A":
  case "a":
    message = "Mükemmel!";
    break;
  case "B":
    message = "Güzel ";
    break;
  case "C":
    message = "Geçtin ";
    break;
  case "D":
    message = "Daha çok çalışman lazım!";
    break;
  case "F":
    message = "Kaldın ";
    break;
  default:
    message = "Geçersiz not";
    break;
}
console.log(message);
// Ya da soyle bir kullanim ypailabilir 
  grade = grade.toUpperCase(); //  tum degerleri buyuk harfe cevirecegi icin buyuk kuuck ayrimi yapilmak zorunda kalinmaz
console.log("-----------------------------------------------------");


 /* Donguler While ve Do While Donguleri */
 let i = 1;

while (i <= 5) {
  console.log("While döngüsü → sayı:", i);
  i++; // her turda 1 artır
}
console.log("-----------------------------------------------------");

let sarj = 5; // %5 şarj var

while (sarj > 0) {
  console.log("Şarj seviyesi: %" + sarj);
  sarj--; // her turda 1 düş
}

console.log("Telefon kapandı! ");



// bu dogruysa calisyor fakat 
// Do While yanlisa bile en az 1 kez calisiyor 

let j = 6;

do {
  console.log("Do-While döngüsü → sayı:", j);
  j++;
} 
while (j <= 5);


console.log("-----------------------------------------------------");
let sifre;
let dogruSifre = "1234";
let deneme = 0;

do {
  deneme++;
  sifre = deneme === 3 ? "1234" : "0000";    // uc kez girilsin 3 yanlissa o zaman 0000 olsun sifre 
  console.log("Deneme " + deneme + ": Girilen şifre → " + sifre);
} while (sifre !== dogruSifre);

console.log("Şifre doğru! ✅");


console.log("-----------------------------------------------------");
let x = 1;

while (x <= 5) {
    console.log(x);
    x += 1;
}

// x degeri ilk kontrol ediliyor 5 den kucukse
//  1 artiriliyor ama eger 5 e estir veya buyuk olursa duuryor 


/* While dongusu  
 while (kosul) ture ise 
{
    // kosul true oldugu surece calisir
    // sayac degerini artirmak veya azaltmak gerekir
}

//! 1 den 10 a kadar yazdiralim 
let sayac = 1;
while (sayac <= 10) {
    console.log(sayac);
    sayac++; // sayaci 1 artir
}       
// sayac degeri 10 dan buyuk olunca durur

//! 1 den 10 a kadar cift sayilari yazdiralim
let sayac2 = 1;
while (sayac2 <= 10) {
    if (sayac2 % 2 === 0) {
        console.log(sayac2);
    }   
    sayac2++; // sayaci 1 artir
}


//! 1 den 10 a kadar tek sayilari yazdiralim
let sayac3 = 1;
while (sayac3 <= 10) {
    if (sayac3 % 2 !== 0) {
        console.log(sayac3);
    }

    sayac3++; // sayaci 1 artir
}   
 
//!  asal sayilari yazdiralim 1 den 10 a kadar
let sayac4 = 1;
while (sayac4 <= 10) {
    let asal = true;    
    if (sayac4 <= 1) {
        asal = false;
    } else {
        for (let i = 2; i < sayac4; i++) {
            if (sayac4 % i === 0) {
                asal = false;
                break;
            }
        }
    }         
    sayac4++; // sayaci +1 
}       

//! kullanici 0 girene kadar sayi girmeye devam etsin 
let sayi;

//! 1 den n  sayisina kadar sayilari toplayalim



//!
*/
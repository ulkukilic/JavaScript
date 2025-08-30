let age = 17;
console.log(age);

if (age > 18) 
{
    console.log('ehliyet alabilir');
} 

else if (age === 18) 
{
    console.log('hadi yine iyisin');
} 

else 
{
    console.log('not yet');
}


console.log('___________________________________________');
/* VE =  &&  isareti    VEYA = ||  */

let country = "turkiye";
let country2 = "Germany";

if (country === "turkiye" && country2 === "Polska") {  /// iki kosulu da saglamasi gerekiyor 
    console.log("ulkeye girebilirsiniz");
} else {
    console.log("git vize al");
}

/* Diger kosul durumu VEYA ICIN */

if (country === "turkiye" || country2 === "Polska") {  // birinden birini yap 
    console.log("ulkeye girebilirsiniz");
} else {
    console.log("git vize al");
}

console.log('___________________________________________');


let month = 3;
let monthName;

if (month == 1) {
  monthName = "Ocak";
} else if (month == 2) {
  monthName = "Şubat";
} else if (month == 3) {
  monthName = "Mart";
} else if (month == 4) {
  monthName = "Nisan";
} else {
  console.log("Nisan sonrası");
}

console.log(monthName);

console.log('___________________________________________');


/* Vicut Kitle endeksi */

let weight = 50 ;
let height = 1.60;
let index=weight/ (height*height);
let result;

if (index < 18.5)
{
result="dusuk kilo ";
}
else if (index > 29.9)
{
result="buyuk";
}
else 
{
  result = " normal";
}

console.log(result);

console.log('___________________________________________');


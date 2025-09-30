//? Bir alışveriş sepetindeki ürün fiyatlarını ekrana sırayla yazdır. (forEach)
let products = [120, 250, 50, 89, 300, 25, 70, 90, 200];
products.forEach((p) => console.log(p));

//? Bir alışveriş sepetindeki ürünlerin toplam tutarını bul. (forEach / reduce)

const totalProduct = products.reduce((acc,item)=> acc + item ,0);
 console.log(totalProduct);

//? Bir öğrenci isimleri listesindeki tüm isimleri büyük harfe çevir. (map)
let students = ["ali", "ayşe", "ahmet", "mehmet"];
const big =students.map((big) => big.toUpperCase());
console.log(big);

const onlyOne =students.map((item) =>{
 return item[0].toUpperCase() + item.slice(1);
});
console.log(onlyOne);

//? Bir ürünler listesindeki her ürün fiyatına %18 KDV ekle ve yeni liste oluştur. (map)
let newPrice = products.map((item) => {
    return Math.trunc(item * 1.18);
})
console.log(newPrice);
//? Bir şirket çalışanları maaş listesinden 20.000 TL’den yüksek maaş alanları listele. (filter)

let salaries2 = [15000, 18000, 22000, 25000, 30000, 12000];
const bigsal= salaries2.filter((s) => s >= 20000);
console.log(bigsal);

//? Bir sınıf notları listesinden 50’nin altındaki notları filtrele. (filter)

let grades = [45, 67, 89, 23, 56, 78, 90, 34];
const lowGrades = grades.filter((g) => g < 50);
console.log(lowGrades);

//? Bir marketteki ürün fiyatlarının ortalamasını bul. (reduce)

let priceList = [100, 200, 300, 400, 500];
let ort = priceList.reduce((arr, item ) => arr + item , 0);
let  finalOrt = ort / priceList.length;
console.log(finalOrt);

//? Bir kütüphanedeki kitap listesinden “Ahmet” adlı yazarın kitaplarını filtrele. (filter)
 let books = [
    {title: "Book1", author: "Ahmet"},
    {title: "Book2", author: "Mehmet"},
    {title: "Book3", author: "Ahmet"},
    {title: "Book4", author: "Ali"},
];

let filterName = books.filter((book) => book.author === "Ahmet");
console.log(filterName);


//? Bir spor salonundaki üyeler listesinden aktif üyelerin isimlerini ekrana yazdır. (filter + map)
let person = [
    {name: "John", active: true},
    {name: "Jane", active: false},
    {name: "Mike", active: true},
    {name: "Sara", active: false},
];
let isActive = person.filter((p) => p.active).map((p) => p.name);
console.log(isActive);

//? Bir bankadaki müşterilerin bakiyelerinden toplam parayı hesapla. (reduce)
let accounts = [    1000, 2500, 3000, 1500, 4000];
let totalMoney = accounts.reduce((sum, acc) => sum + acc, 0);
console.log(totalMoney);    
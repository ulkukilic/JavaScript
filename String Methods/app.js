//! Length 

let str = "Hello World";
console.log(str.length);  // 11
// length property returns the length of a string

//! toUpperCase() and toLowerCase()
console.log(str.toUpperCase());  // "HELLO WORLD"
console.log(str.toLowerCase());  // "hello world"

//! charAt()
console.log(str.charAt(0));  // "H"
console.log(str.charAt(6));  // "W" 
// charAt() method returns the character at the specified index

//! indexOf() and lastIndexOf()
console.log(str.indexOf("o"));  // 4
console.log(str.lastIndexOf("o"));  // 7

//! substring()
console.log(str.substring(0, 5));  // "Hello"
console.log(str.substring(6));  // "World"      
// substring() method returns the part of the string between the start and end indexes, or to the end of the string

//! replace()
console.log(str.replace("World", "JavaScript"));  // "Hello JavaScript"

//! split() 
let str2 = "Hello, how are you?";
let words = str2.split(" ");
console.log(words);  // ["Hello,", "how", "are", "you?"]
// split() method splits a string into an array of substrings based on a specified separator


//! trim()
let str3 = "   Hello World   ";
console.log(str3.trim());  // "Hello World"
// trim() method removes whitespace from both ends of a string

//? Example for practice
// A product ID consists of a two-letter country code followed by an underscore and a series of numbers (e.g., "TR_5894").
// Write a program that extracts the country code from the product ID and prints a message based on the country code.

let urunID= "TR_5894";
let country = urunID[0] + urunID[1];
console.log(country);

if(urunID === "TR"){
    console.log("bu TR ulkesine ait ");
}else if(urunID === "DE"){
    console.log("bu de ulkesine ait ");
}else if(urunID === "PL"){
    console.log("bu PL ulkesine ait ");
}else{
    console.log("bilinmeyen ulkeye ait ");
}
// output: bu TR ulkesine ait

//? Example for practice
// Write a program that checks if a given password is at least 6 characters long. 
// If the password is valid, print "Password is valid". If not, print "Please enter a valid password".
let password = ("please enter your password");
if(password.length >= 6){
    console.log("password is valid");
}else {
    console.log("please enter a valid password");
}

//? Example for practice
let text =  "euroTech Frontend Bootcamp, Javascript, React";
let newtext= text.slice(-5);
console.log(newtext.toUpperCase());  
// output: REACT
let finalText  = newtext[0].toUpperCase() + newtext.slice(1);
console.log(finalText);  
// output: React


//? Example for practice
//Replace the unnecessary characters in the given sentence with '' and print it again: %, @, #, $, &, ;, !
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is Boot#C&amp &is al@so $the $resu@lt of &love& of tea&ching.';
let replay = sentence
  .replaceAll("%","")
  .replaceAll("@","")
  .replaceAll("#","")
  .replaceAll("$","")
  .replaceAll("&","")
  .replaceAll(";","")
  .replaceAll("!","");
  sentence = replay;
  console.log(sentence);


//! includes()
    let country2 = "Finland";
    console.log(country2.includes("Fin"));  // true
    console.log(country2.includes("land"));  // true
    console.log(country2.includes("Sweden"));  // false

//!search
    console.log(country2.search("Fin"));  // 0
    console.log(country2.search("land"));  // 4
    console.log(country2.search("Sweden"));  // -1


//? Example for practice
// Write a program that checks the file extension of a given filename and prints a message based on the extension.
let file = "rapor.pdf";

switch (true) {
  case file.endsWith(".pdf"):
    console.log("PDF dosyası");
    break;
  case file.endsWith(".jpg"):
    console.log("Resim dosyası");
    break;
  case file.endsWith(".txt"):
    console.log("Metin dosyası");
    break;
  default:
    console.log("Bilinmeyen format");
}
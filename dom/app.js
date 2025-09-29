
/*
DOM NEDIR ?  Document Object Model 
HTML, XML gibi dökümanların yapısını ve içeriğini temsil eden bir standarttır.
JavaScript ile HTML ve XML dökümanlarını dinamik olarak değiştirmemizi sağlar.
DOM, dökümanları bir ağaç yapısı olarak temsil eder. Her düğüm (node) bir elementi, metni veya diğer döküman bileşenlerini temsil eder.
DOM API'si, JavaScript'in döküman içeriğini, yapısını ve stilini değiştirmesine olanak tanır.   
*/

// document nesnesi html dökümanını temsil eder.
const title = document.querySelector('h1');
 // title.remove(); // Removes the <h1> element from the DOM
console.log(title); // Logs the removed <h1> element  to the console
 title.style.color = 'red';



const subtitle = document.getElementById('subtitle');
subtitle.style.color = 'blue';





// . classi secer # id yi secer 
    const paragraph = document.querySelector('.text');
    paragraph.style.fontSize = '20px';


    const subtitle2 = document.getElementById('subtitle');
    subtitle2.textContent = 'New Subtitle'; // Changes the text content of the <h
    subtitle2.style.color = 'green'; // Changes the text color of the <h2> element to green
/*1-TOP---parse till js file then parse stop and loading js after loading js exucution
--got error bexause in middle parse is stop 
 2-Buttom--- parsing whole html file then load js and then js excution
 -- it take lots of time that why it is not optimal
 3-Top with async---in this html parsing and js loading done simultaneously 
 if whole js is loaded then parsing is stop and start js excution-
 --- thats why we got error 
 4- Top with defer--- in this html parsing and js loading done simultaneously
    --if loading is complete the parsing doesn't stop it pasre whole file then it excute
*/
///DOCUMENT OBJECT MODEL


const mainHeading = document.getElementById("main-heading");
const navItems= document.getElementsByClassName("nav-iteams")

const header = document.querySelector(".header");

const navItem = document.querySelectorAll(".nav-item")
console.log(navItem);



//textContent
 mainHeading = document.getElementById("main-heading");

mainHeading.textContent= " Hey, This this Ranjeet"

console.log(mainHeading.textContent)


innerText

const mainHeading = document.getElementById("main-heading");

console.log(mainHeading.innerText)


//Change the style of elements

const mainHeading= document.querySelector("div.headline h2");
mainHeading.style.backgroundColor ="gray";

mainHeading.style.border="2px solid white"


///get and set attribute


const link= document.querySelector("a")

console.log(link.getAttribute("href"))



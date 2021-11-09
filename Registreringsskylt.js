/*
Jag ska ta fram 1000 olika tre-siffriga kombinationer
och 1000 olika tre-siffriga nummer-kombinationer varav alla ska vara olika från varandra

Jag bör också kontrollera att varje regskylt inte förekommer två gånger efter
Jag borde ha mellanrum mellan varje regskylt

*/

let bokstaver=["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let skylt="";
let skyltar=[];

let x=Math.floor((Math.random() * bokstaver.length) );
console.log(bokstaver[x]);

for (let i = 0; i < 1000; i++) {
    let x=Math.floor((Math.random() * bokstaver.length) );
    bokstav=(bokstaver[x]);
    skylt=skylt+bokstav

}

for (let i = 1; i < 1000; i++) {
    let x=Math.floor((Math.random() * bokstaver.length) );
    bokstav=(bokstaver[x]);
    skylt=skylt+bokstav
  }


 var str='';
for(let i=1;i<=5;i++){

        str=str+'*'
        console.log(str); 
    }

// let string = "";

// for (let i = 1; i <= 5; i++) {
  
//   for (let j = 0; j < i; j++) {
//     string ='*'+ string;
    
//   }
//   string += "\n";
//   console.log(string);
// }

/* problem2 */
let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

/* problem 3 */
let n = 5; 
let string = "";

for (let i = 1; i <= n; i++) {
  
  for (let j = 0; j < i; j++) {
    string += String.fromCharCode(j + 65);
  }
  string += "\n";
}
console.log(string);
/* problem 4*/
let n=5;
let string = "";
for (let i = 1; i <= n; i++) {
  
  for (let j = 0; j <n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
} 
console.log(string);


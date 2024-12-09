let mainString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
// expanding functionality

const rows = mainString.split("\n");

const arr2D = rows.map((row) => row.split(","));
const headers = arr2D[0];
// console.log(arr2D)

//Part 3: Transforming Data
let objArray = [];

for (let i = 1; i < arr2D.length; i++) {
  let obj = {};

  arr2D[i].forEach((item, idx) => {
    obj[headers[idx].toLowerCase()] = item;
  });
  objArray.push(obj);
}

//Part 4: Sorting and Manipulating Data

// removing the last element 

objArray.pop()

// adding element to index 1

objArray.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })
//adding element to the end of an array

objArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
// console.log(objArray);

// calculating the average of age

let sum = 0 ;
let avg
for (i=0; i < objArray.length; i++) {
    sum +=  parseInt(objArray[i].age)
}

avg = sum / objArray.length
// console.log(avg)

// full circle
let csvFormat = '';
const head =  Object.keys(objArray[0]).join(",") + "\n";
let body = ''
for (val of objArray) {
  body += Object.values(val).join(",") + "\n"
}
csvFormat = head + body
console.log(csvFormat)
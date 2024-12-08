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
    obj[headers[idx]] = item;
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
console.log(objArray);
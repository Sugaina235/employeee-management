

/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

// 1. Print Developer by Map
function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 2. Print Developer by ForEach
function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 3. Add Data
function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

// 4. Remove Admin
function removeAdmin() {
  let filteredArray = arr.filter((employee) => employee.profession !== "admin");
  console.log(filteredArray);
}

// 5. Concatenate Array
function ConcatinateArray() {
  let newArray = [
    { id: 5, name: "david", age: "25", profession: "designer" },
    { id: 6, name: "sarah", age: "22", profession: "manager" },
    { id: 7, name: "mike", age: "24", profession: "tester" }
  ];
  let combinedArray = arr.concat(newArray);
  console.log(combinedArray);
}
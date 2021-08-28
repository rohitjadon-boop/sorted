let arr = [{ name: "Rohit Jadon", age: "22y 33d" }, { name: "Mohit Jadon", age: "23y 35d" }, { name: "Deepak Sharma", age: "21y 34d" }, { name: "parth Khandelwal", age: "19y 23d" }, { name: "Vivek Jain", age: "27y 32d" }];

console.table(arr);

let dayArray= arr.map((item) => {
    let age=item.age;
    let name=item.name;
    let ageArray=age.split(" ");
    let years=Number(ageArray[0].slice(0, ageArray[0].length-1));
    let days=Number(ageArray[1].slice(0, ageArray[1].length-1));

    let total=years*365+days;

    return {
        name: name,
        age: age,
         ageIndays: total,
    }
});

console.table(dayArray);


let sortedArray=dayArray.sort((objA, objB) => {
  return objA.ageIndays- objB.ageIndays;
})

console.table(sortedArray);

let finalArray=sortedArray.map((item) => {
    return {
        name :item.name,
        age: item.age,
    }
})

console.table(finalArray);
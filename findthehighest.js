var valuesay = [1, 3, 5, 7, 9];
let highestvalue = highvalue(valuesay);

function highvalue(values) {
    if (values.length === 0) {
        return null;
    }
    let high = values[0];

    for (let i = 1; i < values.length; i++) {
        if (values[i] > high) {
            high = values[i];
        }
    }
    return high;
}
console.log("highest value is:", highestvalue);


//   const myvaluesay = [10, 5, 8, 20, 3];
//   const highestElement = findHighestElement(myvaluesay);

// function findHighestElement(values) {
//     if (values.length === 0) {
//       return null; // Return null for an empty valuesay
//     }
  
//     let highest = values[0]; // Assume the first element is the highest
  
//     for (let i = 1; i < values.length; i++) {
//       if (values[i] > highest) {
//         highest = values[i]; // Update the highest if a larger element is found
//       }
//     }
  
//     return highest;
//   }
  

  //   console.log("The highest element is:", highestElement); // Output: The highest element is: 20
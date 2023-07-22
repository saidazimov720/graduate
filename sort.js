var unsorted = [1, 5, 4, 6, 3];
let sorted = sorting(unsorted);

function sorting(values) {
  values.sort(function(c, b) {
    return b - c;
  });
  return values;
}

console.log(sorted); 

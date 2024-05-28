function findMinMaxValues(arr) {
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    console.log(`Minimum value: ${min}`);
    console.log(`Maximum value: ${max}`);
  }
  
  let numbers3 = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
  findMinMaxValues(numbers3);
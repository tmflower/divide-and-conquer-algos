function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length -1;
  
  while (rightIdx >= leftIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) /2);
    if (arr[middleIdx] === 1) {
        leftIdx = middleIdx + 1;
      }
    else if (arr[middleIdx] === 0) {
        rightIdx = middleIdx -1;
    }
  } return arr.length - (rightIdx + 1);
}

module.exports = countZeroes

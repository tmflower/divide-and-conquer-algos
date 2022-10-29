function findFloor(arr, num) {
  let L = 0;
  let R = arr.length - 1;
  let M = Math.floor((L + R)/2);
  let floor;
  
  while (L !== R) {

    if (arr[M] === num) {
        floor = arr[M];
    }
    else if (num < arr[L]) {
        floor = -1;
    }
    else if (num > arr[R]) {
        floor = arr[R];
    }
    else if (arr[M] > num) {
        R = M - 1;
        M = Math.floor((L + R)/2);
        floor = arr[M];
    }
    else if (arr[M] < num) {
        L = M + 1;
        M = Math.floor((L + R)/2);
        floor = arr[M];
    }
    if (floor > num) {
        floor = arr[L];
    }
    return floor;
  }
}

module.exports = findFloor
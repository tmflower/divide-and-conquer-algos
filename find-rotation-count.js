function findRotationCount(arr) {
    const sortedArr = [...arr].sort((a,b) => a - b);
    const minVal = sortedArr[0];

    let L = 0;
    let R = arr.length -1;
    let M;

    while (arr[M] !== minVal) {
        M = Math.floor((L + R)/2);
        if (arr[M] === minVal) {
            return M;
        }
        else if (arr[L] === minVal) {
            return 0;
        }
        else if (arr[R] === minVal) {
            return R;
        }
        else if (arr[M] <= arr[R]) {
            R = M + 1;
        }
        else if (arr[M] >= arr[R]) {
            L = M + 1;
        }
        else {
            return M;
        }
    }
}

module.exports = findRotationCount
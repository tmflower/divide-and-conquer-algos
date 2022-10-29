function findRotatedIndex(arr, num) {
    // const originalArr = arr;
    const sortedArr = [...arr].sort()
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((rightIdx + leftIdx)/2);
        let middleVal = sortedArr[middleIdx]
        if (middleVal < num) {
            leftIdx = middleIdx + 1;
        }
        else if (middleVal > num) {
            rightIdx = middleIdx - 1;
        }
        else if (middleVal === num) {
            let idx = arr.indexOf(middleVal);
            return idx;
        }
    }
    return -1;
}

module.exports = findRotatedIndex
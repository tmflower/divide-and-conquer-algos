function sortedFrequency(arr, num) {
    let L = 0;
    let R = arr.length -1;
    let M = Math.floor((L + R) /2);
    let first;
    let last;

    while (L !== R) {
        if (num < arr[L] || num > arr[R]) {
            return -1;
        }
        else if (arr[M] >= num) {
            R = M - 1;
            M = Math.floor((L + R)/2);
            first = M;
        }
        else {
            L = M + 1;
            M = Math.floor((L + R)/2);
            first = M;
        }        
    } 

    L = first;
    R = arr.length - 1;
    M = Math.floor((L + R)/2);
    
    if (L === R) {
        return 1;
    }

    while (L !== R) {
 
        if (arr[M] === num) {
            L = M + 1;
            M = Math.floor((L + R)/2);
            last = M;
        }
        else if (arr[M] > num) {
            R = M - 1;
            M = Math.floor((L + R)/2);
            last = M;
        }

    }

    let numOccurrences = last - first;
    return numOccurrences;   
}

module.exports = sortedFrequency
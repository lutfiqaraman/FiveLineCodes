function average(arr: number[]) {
    return sum(arr) / size(arr);
}

function sum(arr: number[]) {
    let result: number = 0;

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

function size(arr: number[]) {
    return arr.length;
}

let target: number[] = [4, 7, 10, 25];
let result: number   = average(target);

console.log(result);

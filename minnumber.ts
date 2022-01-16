function minimum(arr: number[][]) {
    let result = Number.POSITIVE_INFINITY;
    for (let x = 0; x < arr.length; x++)
        for (let y = 0; y < arr[x].length; y++)
            result = min(result, arr, x, y);

  return result;
}

function min(result: number, arr: number[][], x: number, y: number) {
  if (result > arr[x][y])
    result = arr[x][y];

  return result;
}

let x: number[][] = [[2,1, 6], [32, 65,56]];
let result: number = minimum(x);
console.log(result);

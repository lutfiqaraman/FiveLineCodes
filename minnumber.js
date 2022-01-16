function minimum(arr) {
    var result = Number.POSITIVE_INFINITY;
    for (var x_1 = 0; x_1 < arr.length; x_1++)
        for (var y = 0; y < arr[x_1].length; y++)
            result = min(result, arr, x_1, y);
    return result;
}
function min(result, arr, x, y) {
    if (result > arr[x][y])
        result = arr[x][y];
    return result;
}
var x = [[2, 1, 6], [32, 65, 56]];
var result = minimum(x);
console.log(result);

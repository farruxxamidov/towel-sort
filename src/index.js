
// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    if (matrix === undefined || matrix.length == 0) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if ((i+1)%2===0) {
            matrix[i].reverse();
        }
        newArr = newArr.concat(matrix[i]);
    }

    return newArr;
}

/**
 * @param {number} n
 * @return {number}
 */
var coloredCells = function(n) {
    return ((2*(n-1)*(n-1))+(2*n-1))
};

console.log(coloredCells(5))

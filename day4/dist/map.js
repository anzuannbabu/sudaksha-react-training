var map = new Map();
map.set('John', 'author');
map.set('arry', 'publisher');
map.set('Mary', 'subscriber');
map.set('James', 'Distributor');
console.log(map.size);
console.log(map);
var colors = new Map([
    ['1', 'Red'],
    ['2', 'Green'],
    ['3', 'Yellow'],
    ['4', 'Violet']
]);
for (var _i = 0, _a = colors.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
for (var _b = 0, _c = colors.values(); _b < _c.length; _b++) {
    var col = _c[_b];
    console.log(col);
}
console.log(" ");
for (var _d = 0, _e = colors.entries(); _d < _e.length; _d++) {
    var col = _e[_d];
    console.log("".concat(col[0], ": ").concat(col[1]));
}

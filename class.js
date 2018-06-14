function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';obj
};

var p = new Point(1, 2);


// ES6
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }

    // 私有方法 ???
    _bar(baz) {
        return this.snaf = baz;
    }
}
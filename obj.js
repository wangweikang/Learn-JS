function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
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

class Logger {
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

//  this
const logger = new Logger();
const {
    printName
} = logger;
printName(); // TypeError: Cannot read property 'print' of undefined

// ====> 1,2
class Logger {
    constructor() {
        this.printName = this.printName.bind(this);
    }
    // ...
}
class Logger {
    constructor() {
        this.printName = (name = 'World') => {
            this.print(`Hello ${name}`);
        };
    }
    // ...
}

// extends
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); // 调用父类的constructor(x, y)
        this.color = color;
    }

    toString() {
        return this.color + ' ' + super.toString(); // 调用父类的toString()
    }
}
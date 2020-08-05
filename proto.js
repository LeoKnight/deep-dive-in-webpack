function Shape() {
    this.x = 0;
    this.y = 0;
    this.move2 = function() {
        this.x += 1;
        this.y += 1;
        console.info('Shape moved2.');
    };
}
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

const demo = new Shape();
demo.move2();
demo.move(2,2)
function Rectangle() {
    Shape.call(this); // call super constructor.
}
const demo2 = new Shape();
demo2.move2();
demo2.move(2,2)

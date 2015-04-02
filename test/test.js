var test = require('tape').test;
var Vector = require('../lib/index');

test('equivalence', function(t) {
    var vec = new Vector.Vector2([1, 1, 1]);

    t.equal(vec.elements[0], 1, 'these two numbers are equal');
    t.end();
});

test('copy', function(t){
    var vec = new Vector.Vector2([1, 1, 1]);
    var vecCopy = vec.copy(vec.elements);

    t.equal(vecCopy.elements[0], 1, 'these two numbers are equal');
    t.end();
});

test("subtract", function(t){
    var vec1 = new Vector.Vector2([2, 2, 2]);
    var vec2 = new Vector.Vector2([1, 1, 1]);
    vec1.subtract(vec2);

    t.equal(vec1.elements[0], 1, 'these two numbers are equal');
    t.end();

});

test('multiply', function(t){
    var vec = new Vector.Vector2([2, 2]);
    vec.multiply(10);

    t.equal(vec.elements[0], 20, 'these two numbers are equal');
    t.end();
});

test('calculatrion', function(t){
    var vec = new Vector.Vector2([2, 2]);
    var vec1 = new Vector.Vector2([1, 1]);
    vec.multiply(2).subtract(vec1);

    t.equal(vec.elements[0], 3, 'these two numbers are equal');
    t.end();
});

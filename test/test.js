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

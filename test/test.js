var test = require('tape').test;
var Vector2 = require('../lib/index').Vector2;


test('equivalence00', function(t) {
  var vec = new Vector2();

  t.equal(vec.x, 0, 'x property of the vector is 0');
  t.equal(vec.y, 0, 'y property of the vector is 0');
  t.end();
});

test('equivalence01', function(t) {
  var vec = new Vector2( 10, 20 );

  t.equal(vec.x, 10, 'x property of the vector is 10');
  t.equal(vec.y, 20, 'y property of the vector is 20');
  t.end();
});

test('copy', function(t) {
  var vec = new Vector2(10, 20);
  var copiedVec = vec.copy();

  t.equal(copiedVec.x, 10, 'x property of the copied vector is 10');
  t.equal(copiedVec.y, 20, 'x property of the copied vector is 20');
  t.end();
});

test('set method', function(t){
  var vec = new Vector2();
  vec.set(10, 20);

  t.equal(vec.x, 10, 'x property of the vector is 10');
  t.equal(vec.y, 20, 'y property of the vector is 20');

  vec.set(3, 12);

  t.equal(vec.x, 3, 'x property of the vector is 3');
  t.equal(vec.y, 12, 'y property of the vector is 12');

  t.end();
});

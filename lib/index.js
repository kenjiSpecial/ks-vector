/**
 * ks-vector
 *
 * @package ks-vector
 * @author Kenji Saito <k.saito.1985@gmail.com>
 */

/**
 * Constructor
 */
var Vector2 = function(xx, yy) {
  this.x = xx || 0;
  this.y = yy || 0;
};

Vector2.prototype.copy = function() {
    var vec = new Vector2(this.x, this.y);

    return vec;
};

Vector2.prototype.subtract = function(vec) {
    this.x = this.x - vec.x;
    this.y = this.y - vec.y;

    return this;
};

Vector2.prototype.set = function(x, y) {
  this.x = x;
  this.y = y;

  return this;
};

Vector2.prototype.subtractMultipledVector = function( value, vector) {
  this.x -= value * vector.x;
  this.y -= value * vector.y;

  return this;
};

Vector2.prototype.addMultipledVector = function( value, vector) {
  this.x += value * vector.x;
  this.y += value * vector.y;

  return this;
};

Vector2.prototype.multiply = function(value) {

    this.x = this.x * value;
    this.y = this.y * value;

    return this;
};

/**
 *
 * @param {Vector2} value
 * @return {Vector2}
 */

Vector2.prototype.divide = function(value){
    this.x = this.x / value;
    this.y = this.y / value;

    return this
};


/**
* @function
* @desc add vector
*
* @param {Vector2} vec
*/

Vector2.prototype.add = function(vec) {

    this.x = this.x + vec.x;
    this.y = this.y + vec.y;

    return this;
};

// =============================

/**
* @function
* @desc get the length of the vector
*
* @return {Number}
*/

Vector2.prototype.getLength = function() {
  return Math.sqrt( this.x * this.x + this.y * this.y );
}

/**
* @function
* @desc get the normalized vector
*
* @return {Vector2}
*/

Vector2.prototype.getNormal = function() {
  var length = this.getLength();
  return new Vector2( this.x / length, this.y / length );
}

/**
* @function
* @desc get the vector compare with vector of minVec to see which is smaller
*
* @param {Vector2} minVec
* @return {Vector2}
*/

Vector2.prototype.min = function( minVec ) {
  if(this.x > minVec.x) this.x = minVec.x;
  if(this.y > minVec.y) this.y = minVec.y;

  return this;
}

/**
* @function
* @desc get the vector compared with the vector of maxVector to see which is bigger
*
* @param {Vector2} maxVec
* @return {Vector2}
*/

Vector2.prototype.max = function( maxVec ) {
  if(this.x < maxVec.x) this.x = maxVec.x;
  if(this.y < maxVec.y) this.y = maxVec.y;

  return this;
}

/**
* @function
* @desc get the vector compare with vector between minVec and maxVec
*
* @param {Vector2} minVec
* @param {Vector2} maxVec
*/
Vector2.prototype.clamp = function( minVec, maxVec ) {
  return this.max(minVec).min(maxVec);
}

/**
* @function
* @desc
* @see http://mathworld.wolfram.com/RotationMatrix.html
*
* @param {Number} theta
*/

Vector2.prototype.rotate = function(theta) {
  var rotatedX = this.x * Math.cos(theta) - this.y * Math.sin(theta);
  var rotatedY = this.x * Math.sin(theta) + this.y * Math.cos(theta);

  return this.set(rotatedX, rotatedY)
};


/**
* @function
* @see http://en.wikipedia.org/wiki/Dot_product
*
* @param  {Vector2} vec
* @return {Vector2}
*/

Vector2.prototype.dotProduct = function(vec) {
  return this.x * vec.x + this.y * vec.y;
}







/**
 * Export
 */
module.exports = {
    Vector2: Vector2
};

/**
 * ks-vector
 *
 * @package ks-vector
 * @author Kenji Saito <k.saito.1985@gmail.com>
 */

/**
 * Constructor
 */
var Vector2 = function(obj) {
    var v = new Float32Array(2);

    if (obj) {
        if (arguments.length == 1) {
            v[0] = obj[0];
            v[1] = obj[1];
        } else if (arguments.length == 2) {
            v[0] = arguments[0];
            v[1] = arguments[1];
        }
    }else{
      v[0] = 0;
      v[1] = 0;
    }

    this.elements = v;
};

Vector2.prototype.copy = function() {
    var vec = new Vector2(this.elements);

    return vec;
};

Vector2.prototype.subtract = function(vec) {
    if (vec && typeof vec === 'object') {
        this.elements[0] = this.elements[0] - vec.elements[0];
        this.elements[1] = this.elements[1] - vec.elements[1];
    }

    return this;
};

Vector2.prototype.set = function(x, y) {
  this.x = x;
  this.y = y;

  return this;
}

Vector2.prototype.subtractMultipledVector = function( vale, vector) {
  this.x -= value * vector.x;
  this.y -= value * vector.y;

  return this;
}

Vector2.prototype.addMultipledVector = function( vale, vector) {
  this.x += value * vector.x;
  this.y += value * vector.y;

  return this;
}

Vector2.prototype.multiply = function(value) {
    if (value && typeof value === 'number') {
        this.elements[0] = this.elements[0] * value;
        this.elements[1] = this.elements[1] * value;
    }

    return this;
};

/**
* @function
* @desc add vector
*
* @param {Vector2} vec
*/

Vector2.prototype.add = function(vec) {
    if (vec && typeof vec === 'object') {
        this.elements[0] = this.elements[0] + vec.elements[0];
        this.elements[1] = this.elements[1] + vec.elements[1];
    }

    return this;
};

// =============================

Vector2.prototype.getLength = function() {
  return Math.sqrt( this.elements[0] * this.elements[0] + this.elements[0] * this.elements[1] )
}

Vector2.prototype.getNormal = function() {
  var length = this.getLength();
  return new Vector2( this.elements[0] / length, this.elements[1] / length );
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

  this.set(rotatedX, rotatedY)
};


// =============================

Object.defineProperty(Vector2.prototype, 'x', {
    get: function() {
        return this.elements[0];
    },
    set: function(val) {
        this.elements[0] = val;
    }
});


Object.defineProperty(Vector2.prototype, 'y', {
    get: function() {
        return this.elements[1];
    },
    set: function(val) {
        this.elements[1] = val;
    }
});




/**
 * Export
 */
module.exports = {
    Vector2: Vector2
};

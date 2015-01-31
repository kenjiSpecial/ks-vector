/**
 * ks-vector
 *
 * @package ks-vector
 * @author Kenji Saito <k.saito.1985@gmail.com>
 */

/**
 * Constructor
 */
var Vector2 = function(obj){
    var v = new Float32Array(2);

    if(obj && typeof obj === "object"){
        v[0] = obj[0];
        v[1] = obj[1];
    }

    this.elements = v;
};

Vector2.prototype.copy = function(){
    var vec = new Vector2(this.elements);

    return vec;
};

Vector2.prototype.subtract = function(vec){
    if(vec && typeof  vec === 'object'){
        this.elements[0] = this.elements[0] - vec.elements[0];
        this.elements[1] = this.elements[1] - vec.elements[1];
    }

    return this;
};

Vector2.prototype.multiple = function(value){
    if(value && typeof value === 'number' ){
        this.elements[0] = this.elements[0] * value;
        this.elements[1] = this.elements[1] * value;
    }

    return this;
};

Vector2.prototype.addMultipleVector = function(vec, value){

    if(vec &&  typeof  vec === 'object' && value && typeof value == "number"){
        var curVec = vec.copy();
        this.add(curVec.multiple(value));
    }

    return this;
}

Vector2.prototype.add = function(vec){
    if(vec && typeof vec === 'object'){
        this.elements[0] = this.elements[0] + vec.elements[0];
        this.elements[1] = this.elements[1] + vec.elements[1];
    }

    return this;
};



/**
 * Export
 */
module.exports = {
    Vector2 : Vector2
};

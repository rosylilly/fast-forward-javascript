var Abstruct = function() {
  this.prop = 'property';
}
Abstruct.prototype.func = function(){};

var Class = function() {
}
Class.prototype = {};

for(var method in Abstruct.prototype) {
  Class.prototype[method] = Abstruct.prototype[method];
}

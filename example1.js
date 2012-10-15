var object = {
  name: 'obj',
  func: function(){
    console.log(this.name);
  }
}

object.func(); // → obj

var f = object.func;
f(); // → undefined

var other = {name: 'other', func: f};
other.func(); // → other

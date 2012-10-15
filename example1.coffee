class Example
  name: 'obj'
  func: ()=>
    console.log @name

object = new Example
object.func() # → obj

f = object.func
f() # → obj

other = {
  name: 'other'
  func: f
}
other.func() # → obj

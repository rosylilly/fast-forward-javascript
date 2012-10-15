var object = {
  a: 1,
  b: 2,
  c: 3
}

for(var key in object) {
  if(object.hasOwnProperty(key))
    console.log(object[key]);
}

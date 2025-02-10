let byteSize = 64
//buffer
var buffer = new ArrayBuffer(byteSize)
//view 
var i32View = new Int32Array(buffer) 
console.log(buffer.byteLength)
console.log(i32View.byteLength)
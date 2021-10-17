// this 
var a = 10;
console.log(this.a);

this === window;

// literal
var obj = {};
obj.halo = function() {
    console.log(this);
    console.log("Halo");
}
obj.halo
// this mengembalikan object yang bersangkutan

// constructor
function Halo() {
    console.log(this);
    console.log("Halo");
}
new Halo();
// this mengembalikan object yang baru dibuat
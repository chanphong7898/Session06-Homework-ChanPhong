const pi = Math.PI;

var radius = Number(prompt("Nhập vào bán kính hình tròn"));

var perimeter = 2*pi*radius;

var acreage = pi*Math.pow(radius,2);

console.log("Chu vi hình tròn là: ",perimeter);

console.log("Diện tích hình tròn là: ",acreage);
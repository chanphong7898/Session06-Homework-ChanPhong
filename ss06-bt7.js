const pi = Math.PI;

var width = Number(prompt("Nhập vào chiều dài của hình chữ nhật"));

var length = Number(prompt("Nhập vào chiều rộng của hình chữ nhật"));

var diameter = Math.sqrt((Math.pow(width,2) + Math.pow(length,2)));

var radius = diameter/2;

var perimeter = 2*pi*radius;

var acreage = pi*Math.pow(radius,2);

console.log("Chu vi hình tròn là: ",perimeter);

console.log("Diện tích hình tròn là: ",acreage);

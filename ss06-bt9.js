let a = 5;
let b = "5";
console.log(a==b); 
// So sánh bằng theo giá trị giữa a và b (b = "5" vẫn tính là 5) --> trả kết quả True 
console.log(a===b);
// So sánh bằng theo cả kiểu dữ liệu và giá trị giữa a và b (b = "5" là kiểu dữ liệu string, còn a là number) --> trả kết quả False
console.log(a!=b); 
// So sánh không bằng theo giá trị giữa a và b --> trả kết quả False
console.log(a!==b);
// So sánh không bằng theo cả kiểu dữ liệu và giá trị giữa a và b --> trả kết quả True
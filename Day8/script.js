let diem = 100;
if (diem >= 90) {
  console.log("Giỏi");
} else if (diem >= 70 && diem < 89) {
  console.log("Khá");
} else if (diem >= 50 && diem < 69) {
  console.log("Trung bình");
} else if (diem < 50) {
  console.log("Yếu");
}

function bang() {
  for (let i = 1; i <= 9; i++) {}
}

function showName(name) {
  console.log("My Name is " + name);
}
showName("Chiến");

const hello = function () {
  console.log("Xin chào học viên !");
};
hello();

// const nhandoi = (x) => {
//     x = prompt("Nhap x") // hàm nhập giá trị

//     return x * 2;};
// console.log(nhandoi(2)); 

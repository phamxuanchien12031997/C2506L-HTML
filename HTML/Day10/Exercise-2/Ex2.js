// Bài 2 — Thay đổi màu nền
// Mô tả: Có thẻ div có width và height là 100px, background mặc định là gray, và 3 nút: Đỏ, Xanh, Vàng.
// Yêu cầu: Khi bấm từng nút, đổi màu nền của #box tương ứng.

const re = document.getElementById("red");
const gr = document.getElementById("green");
const ye = document.getElementById("yellow");

re.addEventListener("click", () => {
      re.style.backgroundColor = "red";
    });
gr.addEventListener("click", () => {
    gr.style.backgroundColor = "green";
});
ye.addEventListener("click", () => {
    ye.style.backgroundColor = "yellow";
});
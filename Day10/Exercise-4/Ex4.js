// Bài 4 — Thêm phần tử vào danh sách
// Mô tả: Có một danh sách và một nút Thêm.
// Yêu cầu: Khi bấm Thêm, tạo một li mới với nội dung "Item mới" rồi chèn vào danh sách.
// Gợi ý: document.createElement("li"), appendChild.
const se = document.getElementById("section");
const ad = document.getElementById("add");
ad.addEventListener("click", () => {
   const newLi = document.createElement("li");
   newLi.textContent = "0904009671";
   se.appendChild(newLi);
});
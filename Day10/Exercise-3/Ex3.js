// Bài 3 — Ẩn/hiện phần tử
// Mô tả: Có đoạn văn trong thẻ p và 2 nút Ẩn và Hiện.
// Yêu cầu:
// Bấm Ẩn → đoạn văn biến mất.
// Bấm Hiện → đoạn văn xuất hiện lại.
// Gợi ý: element.style.display = "none";
const na = document.getElementById("name");
const ap = document.getElementById("appear");
const hi = document.getElementById("hidden");
ap.addEventListener("click", () => {
  na.style.display = "block";
});
hi.addEventListener("click", () => {
  na.style.display = "none";
});

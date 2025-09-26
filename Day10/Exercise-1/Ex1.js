// Bài 1 — Thay đổi nội dung phần tử
// Mô tả: Có thẻ p và một nút Đổi nội dung.
// Yêu cầu: Khi bấm nút, nội dung trong thẻ p đổi thành "Chào bạn đến với JavaScript DOM".

const ch = document.getElementById("change");
ch.addEventListener("click", () => {
  document.getElementById("content").innerHTML =
    "Chào bạn đến với JavaScript DOM";
});

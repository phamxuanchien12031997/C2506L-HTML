// Bài 5 — Lấy giá trị từ input
// Mô tả: Có input nhập tên của bạn và nút Chào.
// Yêu cầu: Khi bấm nút, hiển thị alert "Xin chào, {tên}" với tên lấy từ input.
// Gợi ý: document.getElementById("name").value

const input = document.getElementById("name");
const hi = document.getElementById("hello");
const se = document.getElementById("section");
hi.addEventListener("click", ()  => {
    const na = input.value;
    se.innerHTML = "Hello " + na;
});
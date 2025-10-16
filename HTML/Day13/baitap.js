// Tạo 1 nút "Ẩn/Hiện"
// Click để ẩn hoặc hiện một đoạn văn
$(document).ready(() => {
    console.log('Hello Chiến');
});
$('#button').click(() => {
    console.log('Ok !!!');
});
const na = document.getElementById("name");
const ap = document.getElementById("presently");
const hi = document.getElementById("hidden");
$('hi').click(() =>{
    $('#na').hide();
});
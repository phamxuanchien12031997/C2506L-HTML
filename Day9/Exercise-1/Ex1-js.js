// Bài 1: Tạo một Promise giả lập việc tải tài liệu:
// Sau 2 giây, resolve("Tải thành công!")
// Nếu isFail = true, thì reject("Tải thất bại!")

function loadDocument(isFail = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFail) {
        reject("Tải thất bại!");
      } else {
        resolve("Tải thành công!");
      }
    }, 2000);
  });
}

loadDocument(false)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

loadDocument(true) 
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

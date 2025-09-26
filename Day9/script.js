let count = 0;
const btn = document.getElementById("countBtn");
const res = document.getElementById("result");

btn.addEventListener("click", () => {
  count++;
  res.textContent = "Số lần:" + count;
  localStorage.setItem("name", "Phạm Chiến");
  localStorage.setItem("date", "12/03/1997");

  localStorage.getItem("name");

  localStorage.removeItem("date");

  localStorage.clear();
});

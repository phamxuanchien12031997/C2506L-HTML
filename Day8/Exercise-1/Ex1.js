//Ex1: Viết một hàm getGrade(score) nhận vào điểm số (0 → 100) và trả về kết quả:
// "A" nếu điểm ≥ 85
// "B" nếu điểm từ 70 → 84
// "C" nếu điểm từ 50 → 69
// "D" nếu điểm < 50

function getGrade(score) {
  if (score >= 85) {
    return "A";
  } else if (score >= 70 && score < 85) {
    return "B";
  } else if (score >= 50 && score < 70) {
    return "C";
  } else score < 50;
  {
    return "D";
  }
}
score = prompt("Nhập điểm");
console.log(getGrade(score));

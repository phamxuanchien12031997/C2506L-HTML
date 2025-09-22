// Ex2: Viết một hàm calculateElectricBill(kwh) tính tiền điện theo quy tắc:
// 0 – 50 kWh: 1.500 đ/kWh
// 51 – 100 kWh: 2.000 đ/kWh
// Trên 100 kWh: 3.000 đ/kWh

function calculateElectricBill(kwh) {
  let total = 0;
  if (kwh <= 50) {
    total = kwh * 1500;
  } else if (kwh > 51 && kwh <= 100) {
    total = 50 * 1500 + (kwh - 50) * 2000;
  } else if (kwh > 100) {
    total = 50 * 1500 + 50 * 2000 + (kwh - 100) * 3000;
  }
  return total;
}
kwh = prompt("Nhấp số điện đã tiêu thụ")
console.log(calculateElectricBill(kwh));

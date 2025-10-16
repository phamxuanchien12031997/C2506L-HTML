const names = [
  { name: "Chiến", age: 20 },
  { name: "Chung", age: 20 },
  { name: "Hương", age: 24 },
  { name: "Thư", age: 23 },
  { name: "Long", age: 23 },
];
const grouped = names.reduce((acc, search) => {
  if (!acc[search.age]) {
    acc[search.age] = [];
  }
  acc[search.age].push(search.name);
  return acc;
}, {});

const resultDiv = document.getElementById("result");
for (let age in grouped) {
  const p = document.createElement("p");
  p.textContent = `Tuổi ${age}: ${grouped[age].join(", ")}`;
  resultDiv.appendChild(p);
}

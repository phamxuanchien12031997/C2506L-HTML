document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("userTablebody");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.foreach((user) => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = user.name;
        tr.appendChild(tdname);

        const tdUsername = document.createElement("td");
        tdUsername.textContent = user.username;
        tr.appendChild(tdUsername);

        const tdEmail = document.createElement("td");
        tdEmail.textContent = user.email;
        tr.appendChild(tdEmail);

        const tdAddress = document.createElement("td");
        tdAddress.textContent = `${user.address.street}, ${user.address.city}`;
        tr.appendChild(tdAddress);

        const tdAction = document.createElement("td");
        const btn = document.createElement("button");
        btn.textContent = "Xem chi tiết";

        btn.addEventListener("click", () => {
          fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
            .then((res) => res.json())
            .then((detail) => {
              alert(`
Tên: ${detail.name}
Username: ${detail.username}
Email: ${detail.email}
Phone: ${detail.phone}
Website: ${detail.website}
Địa chỉ: ${detail.address.street}, ${detail.address.city}
              `);
            })
            .catch((err) => console.error("Lỗi khi lấy chi tiết:", err));
        });

        tdAction.appendChild(btn);
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
      });
    })
    .catch((error) => console.error("Lỗi fetch:", error));
});

function hello() {
  const a = (callback) => {
    setTimeout(() => {
      console.log("phạm chiến");
       console.log(callback());
    }, 2000);   
  };
  const b = () => {
    let a = 2;
    let b = 3;
    return a + b;
  };
  a(b);
}
const fruits = ['Táo', 'Chuối', 'Cam'];
fruits.forEach(function(fruit, index) {
  console.log(index + ': ' + fruit);
});

const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

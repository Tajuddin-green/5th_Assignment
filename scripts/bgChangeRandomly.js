document.getElementById("color-change-btn").addEventListener("click", (e) => {
  e.preventDefault();

  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let a = parseInt(Math.random() * 255);

  let color = `rgba(${r},${g},${b},${a})`;
  let body = document.body;

  body.style.backgroundColor = color;
});

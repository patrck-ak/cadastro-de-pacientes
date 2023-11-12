import { adminuser, adminpass } from "./app/data.js";

// adicionar função de enviar com a tecla ENTER
addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    auth();
  }
});

// função de login
function auth() {
  const u = document.getElementById("usr").value;
  const p = document.getElementById("passwd").value;
  if (u == adminuser && p == adminpass) {
    window.location = "dashboard.html";
  } else {
    const x = document.getElementById("passwd");
    x.classList.add("shake");
    x.value = null;
    setTimeout(() => {
      x.classList.remove("shake");
    }, 1000);
  }
}

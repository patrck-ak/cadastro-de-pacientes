
// adicionar função de enviar com a tecla ENTER
addEventListener("keyup", function (event) {
  if (event.code === "Enter") {
    auth();
  }
});

// função de login
import {adminpassword, adminuser} from "/data.js"




function auth() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("password").value;
  if (u == adminuser && p == adminpassword) {
    window.location = "./dashboard.html";
  } else {
    const x = document.getElementById("password");
    x.classList.add("shake");
    x.value = null;
    setTimeout(() => {
      x.classList.remove("shake");
    }, 1000);
  }
}

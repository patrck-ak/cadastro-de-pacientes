// adicionar função de enviar com a tecla ENTER
addEventListener('keyup', function(event) {
  if (event.code === 'Enter') {auth()}
})


function auth() {
  const u = document.getElementById("usr").value;
  const p = document.getElementById("passwd").value;
  if (u == "a" && p == "a") {window.location = 'dashboard.html';} 
    else {
    console.error('Senha inválida ou null')
    const x = document.getElementById("passwd")
    x.classList.add("shake");
    x.value = null
    setTimeout(() => { document.getElementById("passwd").classList.remove("shake" )}, 1000)}}

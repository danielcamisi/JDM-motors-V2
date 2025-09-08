// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const app = express();

// app.use(cors());

// // Servir arquivos estáticos (HTML, CSS, JSON, imagens, etc)
// app.use(express.static(path.join(__dirname, "..")));

// // Rota principal (abre o index.html por padrão)
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "index.html"));
// });

// // Inicia servidor
// app.listen(4000, () => {
//   console.log("Server escutando na porta 4000");
// });

function carregar() {
  fetch("http://localhost:4200/cars/list")
    .then((response) => response.json())
    .then((cars) => {
      const container = document.getElementById("cars-container");
      container.innerHTML = ""; // limpar cards antigos

      cars.forEach((car) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = img.src = car.img.startsWith("/uploads/")
          ? `http://localhost:4200${car.img}`
          : `http://localhost:4200/uploads/${car.img}`; // ✅ certifique-se que este caminho está acessível
        img.alt = car.announceName;

        const title = document.createElement("h3");
        title.textContent = car.announceName;

        const button = document.createElement("button");
        button.textContent = "Ver Anúncio";
        button.classList.add("btn-show");

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(button);
        container.appendChild(card);
      });
    });
}

function carregarPeace() {
  fetch("http://localhost:4200/peace/list")
    .then((response) => response.json())
    .then((peaces) => {
      const container = document.getElementById("peace-container");
      container.innerHTML = ""; // limpar cards antigos

      peaces.forEach((peace) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const img = document.createElement("img");
        img.src = peace.img.startsWith("/uploads/")
          ? `http://localhost:4200${peace.img}`
          : `http://localhost:4200/uploads/${peace.img}`; // ✅ certifique-se que este caminho está acessível
        img.alt = peace.announceName;

        const title = document.createElement("h3");
        title.textContent = peace.announceName;

        const button = document.createElement("button");
        button.textContent = "Ver Anúncio";
        button.classList.add("btn-show");

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(button);
        container.appendChild(card);
      });
    });
}
 

function viewStorage() {
  window.location.href = "cars.html";
}

function checkLoginStatus() {
  const token = localStorage.getItem("token");

  if (token) {
    document.getElementById("logout-ul")?.classList.add("hidden");
    document.getElementById("login-ul")?.classList.remove("hidden");

    document.getElementById("logged-in")?.classList.remove("hidden");
    document.getElementById("img-announce")?.classList.remove("hidden");
  } else {
    document.getElementById("desc-announce")?.classList.remove("hidden");
    document.getElementById("logout-ul")?.classList.remove("hidden");
  }
}

function logout() {
  localStorage.removeItem("token");
  alert("Você foi desconectado com sucesso!");
  window.location.href ="index.html";
}

function goToProfile() {
  const userId = localStorage.getItem("userId");
  if (userId) {
    window.location.href = `profile.html?id=${userId}`; // Redireciona para a página de perfil
  } else {
    alert("Usuário não está logado.");
  }
}

window.onload = function () {
  carregarPeace();
  carregar();
  checkLoginStatus();
};

  function dropdown() {
  const myDropdown = document.getElementById("dropdown-nav");
  const myNavDrop = document.getElementById("menu-hamb");

  myDropdown.classList.toggle("hidden");
  myNavDrop.classList.toggle("hidden");


}
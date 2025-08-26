const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

app.use(cors());

// Servir arquivos estáticos (HTML, CSS, JSON, imagens, etc)
app.use(express.static(path.join(__dirname, "..")));

// Rota principal (abre o index.html por padrão)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Inicia servidor
app.listen(4000, () => {
  console.log("Server escutando na porta 4000");
});

function carregar() {
    fetch("http://localhost:3000/cars")
      .then(response => response.json())
      .then(cars => {
        const container = document.getElementById("cars-container");
  
        cars.map(car => {
          const card = document.createElement("div");
          card.classList.add("card");
  
          const img = document.createElement("img");
          img.src = car.image;
          img.alt = car.name;
  
          const title = document.createElement("h3");
          title.textContent = car.name;
  
          const button = document.createElement("button");
          button.textContent = "Ver Anúncio"
          button.classList.add("btn-show")

          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(button);
          container.appendChild(card);
        });
      });
  }

  function carregarPeace(){
    fetch("http://localhost:3000/peace")
      .then(response => response.json())
      .then(cars => {
        const container = document.getElementById("cars-container");
  
        cars.map(car => {
          const card = document.createElement("div");
          card.classList.add("card");
  
          const img = document.createElement("img");
          img.src = car.image;
          img.alt = car.name;
  
          const title = document.createElement("h3");
          title.textContent = car.name;
  
          const button = document.createElement("button");
          button.textContent = "Ver Anúncio"
          button.classList.add("btn-show")

          card.appendChild(img);
          card.appendChild(title);
          card.appendChild(button);
          container.appendChild(card);
        });
      });
  }
  
  function viewStorage(){
     window.location.href = "cars.html";
  }
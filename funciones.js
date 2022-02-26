document.addEventListener("DOMContentLoaded", function () {
  let imagenes = [
    {
      img: "imagenes/p1.jpg",
      name: "Capitana",
    },

    {
      img: "imagenes/p2.jpg",
      name: "Thanos",
    },

    {
      img: "imagenes/p3.jpg",
      name: "Thor",
    },

    {
      img: "imagenes/p4.jpg",
      name: "Ironman",
    },

    {
      img: "imagenes/p5.jpg",
      name: "Vision",
    },

    {
      img: "imagenes/p6.jpg",
      name: "Capitan America",
    },

    {
      img: "imagenes/p1.jpg",
      name: "Capitana",
    },

    {
      img: "imagenes/p2.jpg",
      name: "Thanos",
    },

    {
      img: "imagenes/p3.jpg",
      name: "Thor",
    },

    {
      img: "imagenes/p4.jpg",
      name: "Ironman",
    },

    {
      img: "imagenes/p5.jpg",
      name: "Vision",
    },

    {
      img: "imagenes/p6.jpg",
      name: "Capitan America",
    },
  ];

  let tablero = document.querySelector(".tablero");
  let imgElegida = [];
  let imgElegidaId = [];
  let aciertos = document.querySelector(".conteo");
  let conteo = [];
  let rutaImg = "";

  imagenes.sort(() => 0.5 - Math.random());

  // Función para colocar las imagenes en HTML
  function crearTablero() {
    for (let i = 0; i < imagenes.length; i++) {
      let img = document.createElement("img");
      img.setAttribute("data-id", i);
      img.setAttribute("src", "imagenes/pregunta.jpg");
      img.setAttribute("width", "100px");
      img.setAttribute("height", "80px");
      img.setAttribute("style", "border-radius:5px");
      tablero.appendChild(img);
      img.addEventListener("click", descubrirImagen);
    }
  }

  function descubrirImagen() {
    let imgClick = this.getAttribute("data-id");
    rutaImg = this.getAttribute("src");
    imgElegida.push(imagenes[imgClick].name);
    imgElegidaId.push(imgClick);

    console.log("rutaImg 2: ", rutaImg);

    if (rutaImg !== "imagenes/chulo.jpg") {
      this.setAttribute("src", imagenes[imgClick].img);
    } else {
      this.setAttribute("src", rutaImg);
    }

    if (imgElegida.length === 2) {
      setTimeout(compararImagen, 300);
    }
  }

  function compararImagen() {
    let todasLasImg = document.querySelectorAll("img");

    let opcion1 = imgElegidaId[0];
    let opcion2 = imgElegidaId[1];

    if (
      imgElegida[0] === imgElegida[1] &&
      opcion1 !== opcion2 &&
      rutaImg !== "imagenes/chulo.jpg"
    ) {
      alert("Bien...");
      todasLasImg[opcion1].setAttribute("src", "imagenes/chulo.jpg");
      todasLasImg[opcion2].setAttribute("src", "imagenes/chulo.jpg");
      conteo.push(imgElegida);
    } else {
      if (rutaImg == "imagenes/chulo.jpg") {
        alert("Selecciona otra imagen, petard@!!!");
      } else {
        if (opcion1 === opcion2) {
          alert("Selecciona otra imagen, petard@!!!");
          todasLasImg[opcion1].setAttribute("src", "imagenes/pregunta.jpg");
        } else {
          alert("Paila...");
          todasLasImg[opcion1].setAttribute("src", "imagenes/pregunta.jpg");
          todasLasImg[opcion2].setAttribute("src", "imagenes/pregunta.jpg");
        }
      }
    }

    imgElegida = [];
    imgElegidaId = [];
    aciertos.textContent = conteo.length;

    if (conteo.length === 6) {
      aciertos.textContent = "Ganaste :)";
    }
  }

  crearTablero();
});

let juegosData = [
  {
    name: "Shutterstock",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/1324/1324921.png",
  },
  {
    name: "Consola ninja",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYDlai2dw4lMFOZdMQk79Tp740ylzsUM6ZW4J7_uD6yS1R5Gycb8H5JD_M-D2M0IYY9k&usqp=CAU",
  },
  {
    name: "Looptuga",
    imgUrl:
      "https://img.freepik.com/vector-premium/ilustracion-tortuga-caminando-sendero-forestal-hojas-otono_932695-6197.jpg?semt=ais_incoming&w=740&q=80",
  },
  {
    name: "codemonkey",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWB5jf2fN7llO2wqym076_luTVW62D67qTQ&s",
  },
  {
    name: "RubyQuest",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
  },
  {
    name: "Scratch",
    imgUrl:
      "https://images.seeklogo.com/logo-png/43/1/scratch-cat-logo-png_seeklogo-431721.png",
  },
];

let cardContainer = document.getElementById("card-container");

for (let i = 0; i < juegosData.length; i++) {
  cardContainer.innerHTML += `
        <div class="imagen">
            <img
                src="${juegosData[i].imgUrl}"
                alt="${juegosData[i].name}"
            />
            <p>${juegosData[i].name}</p>
        </div>
    `;
}

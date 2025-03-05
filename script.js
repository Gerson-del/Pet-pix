
pets = ["assets\pet-images\aniquilator.jpeg",
        "assets\pet-images\doggy.jpg",
        "assets\pet-images\luneta.jpeg",
        "assets\pet-images\mike tyson.jpg",
        "assets\pet-images\millow.jpeg",
        "assets\pet-images\whiskers.jpeg"]


let currentIndex = 0;


// Esta funcion se encarga de mostrar la imagen

function updateImage(){
    const petImage = document.getElementById("pet-image");
    petImage.src = pets[currentIndex]; // Aqui se muestra la primera imagen de nuestro array
}


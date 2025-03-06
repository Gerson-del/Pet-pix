// Array con la url de las imagenes
const pets = [
    {name: "Aniquilador",
    age: 2,
    image: "assets/pet-images/aniquilator.jpeg",
    description: "Un poderoso animal que invoca el poder de la ternura"
    },
    {name: "Doggy",
    age: 3,
    image: "assets/pet-images/doggy.jpg",
    description: "Un perrito jugueton que adora morder muebles y comer"
    },
    {
        name: "Millow",
        age: 4,
        image: "assets/pet-images/millow.jpeg",
        description: "Millow es amoroso y el perro mas cariñoso del mundo, pero cuidado porque muerde"
    },
    {
        name: "Whiskers",
        age : 3,
        image: "assets/pet-images/whiskers.jpeg",
        description: "Whisker es maldad pura"
    },
    {
        name: "Mordelon",
        age : 5,
        image: "assets/pet-images/mordelon.jpeg",
        description: "El perro con mas energia del mundo y mordidas mas tiernas"
    }
];


let currentIndex = 0;

// actualiza la imagen
function updatePetInfo() {
    const petImage = document.getElementById("pet-image");
    const petAge = document.getElementById("pet-age");
    const petName = document.getElementById("pet-name");
    const petDescription = document.getElementById("pet-description");

    petImage.src = pets[currentIndex].image;
    petName.textContent = pets[currentIndex].name;
    petDescription.textContent = pets[currentIndex].description;
    petAge.textContent = pets[currentIndex].age + " años";
}


// Esta funcion muestra la imagen siguiente 
function nextImage() {
    currentIndex = (currentIndex + 1) % pets.length;
    updatePetInfo();
}


// funcion que muestra la imagen previa
function prevImage(){
    currentIndex = (currentIndex - 1 + pets.length) % pets.length;
    updatePetInfo();
}



window.onload = updatePetInfo;
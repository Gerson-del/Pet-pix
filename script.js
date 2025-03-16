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

function updatePetInfo() {
    const petImage = document.getElementById("pet-image");
    const petAge = document.getElementById("pet-age");
    const petName = document.getElementById("pet-name");
    const petDescription = document.getElementById("pet-description");

    // Agrega la clase fade-out antes de cambiar la imagen
    petImage.classList.add("fade-out");


    setTimeout(() => {
        petImage.src = pets[currentIndex].image;
        petName.textContent = pets[currentIndex].name;
        petDescription.textContent = pets[currentIndex].description;
        petAge.textContent = pets[currentIndex].age + " años";

        // Una vez cambiada la imagen, activa la clase fade-in
        petImage.classList.remove("fade-out");
 
    }, 300); // Tiempo suficiente para la transición
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


// cargamos la imagen al inicio
window.onload = updatePetInfo;


// Todo esto es para darle funcionalidad al boton de favoritos

//ARREGLAR ESTO

// Función para agregar a favoritos
function toggleFavorite() {
    const pet = {
        name: document.getElementById("pet-name").textContent,
        image: document.getElementById("pet-image").src,
        description: document.getElementById("pet-description").textContent,
        age: document.getElementById("pet-age").textContent
    };

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isAlreadyFavorite = favorites.some(fav => fav.name === pet.name);

    if (isAlreadyFavorite) {
        alert("¡Esta mascota ya está en tus favoritos!");
        console.log("favorites : " + favorites);
    } else {
        favorites.push(pet);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("¡Mascota añadida a tus favoritos!");
        
    }

}


document.addEventListener("DOMContentLoaded",function() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || []);
    const favoritesSection  = document.getElementById("favorites-section");

    if (favorites.length > 0){
        favorites.forEach(pet => {
            const petDiv = document.createElement("div");
            petDiv.classList.add("favorite-pet");
            
            petDiv.innerHTML = `
                <img src="${pet.image}" alt="Pet image">
                <h3>${pet.name}</h3>
                <p>${pet.age}</p>
                <button onclick="removeFavorite('${pet.name}')">Eliminar</button>
            `;
            favoritesSection.appendChild(petDiv);
        });
    }
})

function removeFavorite(petName) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(fav  => fav.name !== petName);
    localStorage.setItem("favorites", JSON.stringify(favorites));

    document.getElementById("favorites-section").innerHTML = '';
    displayFavorites();
}


function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const favoritesSection = document.getElementById("favorites-section");

    favorites.forEach(pet => {
        const petDiv = document.createElement("div");
        petDiv.classList.add("favorite-pet");

        petDiv.innerHTML = `
            <img src="${pet.image}" alt="Pet image">
            <h3>${pet.name}</h3>
            <p>${pet.age}</p>
            <button onclick="removeFavorite('${pet.name}')">Eliminar</button>
        `;
        favoritesSection.appendChild(petDiv);
    });
}



// Inicializa la página mostrando la primera mascota
updatePetInfo();
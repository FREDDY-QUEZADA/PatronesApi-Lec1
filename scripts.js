const API = 'https://swapi.dev/api/people/';

function displayCharacterName(name,index) {
    const contenedor = document.getElementById('contenedor');
    const p = document.createElement('p');
    p.textContent = `${index}. ${name}`;
    contenedor.appendChild(p);
}

function fetchCharacterName(index) {
    return fetch(`${API}${index}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error("La respuesta de la red no fue correcta");
            }
            return response.json();
        })
        .then(character => character.name);
}

async function fetchFirst80Names() {
    for (let i = 1; i <= 80; i++) {
        try {
            const name = await fetchCharacterName(i);
            displayCharacterName(name,i); //orden de numero
        } catch (error) {
            console.error(`Error al recuperar el carácter en el índice ${i}:`, error);
        }
    }
}

window.onload = fetchFirst80Names;
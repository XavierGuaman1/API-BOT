interface Character {
    id: number;
    nombre: string;
    especilidad: string;
    
  }
  
  const url = "http://localhost:8081/Doctor"; 
  async function fetchCharacters() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error al obtener datos: ${response.statusText}`);
      }
      const data = await response.json();
      displayCharacters(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  }
  
  function displayCharacters(characters: Character[]) {
    const container = document.getElementById('characters-container');
    if (container) {
      container.innerHTML = ""; 
      characters.forEach(character => {
        container.innerHTML += `
          <div class="character-card">
            <h2>ID: ${character.id}</h2>
            <p>Nombre: ${character.nombre}</p>
            <p>Especialidad: ${character.especilidad}</p>
          </div>
        `;
      });
    }
  }
  
  fetchCharacters();
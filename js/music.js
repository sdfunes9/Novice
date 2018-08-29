/* document.getElementById("getText").addEventListener("click", getData); */
const albumCovers = document.getElementById("cover");

function getData() {
  fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
    .then(response => response.json())
    .then(data => {
      const { entry } = data.feed;
      let output = " ";
      entry.forEach(album => {                    
        output += `
            <div>
                <a href="${album.id.label}" target="_blank"><img class="rounded" alt="${album["im:name"].label}" src="${
          album["im:image"][2].label
        }"></a>
                <a href="${album.id.label}" target="_blank"><span class="title">${album["im:name"].label}</span></a>
            </div>
            `;
      });
      albumCovers.innerHTML = output;
    })
    .catch(error => console.log(error));
}

function showInfo(record) {
  /* $("#ModalInfo").modal("toggle"); */
  console.log('hello');

  /* $("#modalInfo").html(`
                    <div>
                        Planet Name:  ${planet.name} 
                        <br>Diameter:  ${planet.diameter}
                        <br>Gravity: ${planet.gravity}
                        <br>Rotation Period:  ${planet.rotation_period}
                        <br>Orbital Period:  ${planet.orbital_period}
                        <br>Terrain:  ${planet.terrain}
                        <br>Surface water: ${planet.surface_water}
                        </div>`); */
}

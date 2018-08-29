const albumCovers = document.getElementById("cover");

//Function that gets the data from apple API
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


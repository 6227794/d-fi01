import './data.json';

async function fetchAndDisplayJson() {
    try {
        const response = await fetch('data.json'); 
        const data = await response.json();

        const dataList = document.getElementById("suggestions-list");
        dataList.textContent = JSON.stringify(data, null, 2); 
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
        document.getElementById('jsonDisplay').textContent = 'Error loading data.';
    }
}

fetchAndDisplayJson();


async function researchData(){

    const response = await fetch('data.json'); 
    const data = await response.json();

    let input = document.getElementById('search-input').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let obj = data[i];
    
        if (obj.nom.toLowerCase().includes(input)) {
          const elem = document.createElement("li")
          elem.innerHTML = `${obj.nom} - ${obj.genre}`
          x.appendChild(elem)
        }
      }

}

researchData();


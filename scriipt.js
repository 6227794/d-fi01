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


async function fetchAndDisplayUsers() {
    try {
        const response = await fetch('data.json');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        const userDataDiv = document.getElementById('ppl');

        let htmlContent = '<ul>';
        data.users.forEach(user => {
            htmlContent += `<li> nom: ${user.nom}, age: ${user.age}, genre: ${user.genre}</li>`;
        });
        htmlContent += '</ul>';

        userDataDiv.innerHTML = htmlContent;

    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
        const userDataDiv = document.getElementById('ppl');
        userDataDiv.innerHTML = '<p>Failed to load user data.</p>';
    }
}

fetchAndDisplayUsers();
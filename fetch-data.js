// Asynchronous function to fetch and display user data
async function fetchUserData() {
	const apiUrl = 'https://jsonplaceholder.typicode.com/users';
	// Container element where API data will be rendered
	const dataContainer = document.getElementById('api-data');
    try {
        const response = await fetch(apiUrl);   
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const users = await response.json() ;
        if (dataContainer) {
            // Clear any existing content
            dataContainer.innerHTML = '';
            // Create a list to display user names and emails
            const ul = document.createElement('ul');
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = `${user.name} (${user.email})`;
                ul.appendChild(li);
            });
            dataContainer.appendChild(ul);
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
        if (dataContainer) {
            dataContainer.textContent = 'Failed to load user data.';
            dataContainer.style.color = '#dc3545';
        }
    }
}

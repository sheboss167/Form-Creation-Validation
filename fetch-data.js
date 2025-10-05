// Step 1: Initialize the Async Function
async function fetchUserData() {
  // Step 2: Define the API URL
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Step 3: Select the Data Container Element
  const dataContainer = document.getElementById('api-data');

  // Step 4: Fetch Data Using try-catch
  try {
    const response = await fetch(apiUrl); // Fetch data asynchronously
    const users = await response.json();  // Convert the response to JSON

    // Step 5: Clear the Loading Message
    dataContainer.innerHTML = '';

    // Step 6: Create and Append User List
    const userList = document.createElement('ul');

    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name; // Display each user's name
      userList.appendChild(listItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    // Step 7: Error Handling
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching data:', error);
  }
}

// Step 8: Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);

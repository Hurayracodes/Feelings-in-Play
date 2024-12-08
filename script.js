// Select elements
const name1Input = document.querySelector('#name1');
const name2Input = document.querySelector('#name2');
const calculateButton = document.querySelector('#calculateButton');
const resultDisplay = document.querySelector('#resultDisplay');

// Add animation for "falling in love" text
function displayFallingText(message) {
    resultDisplay.innerHTML = `<span class="falling-text">${message}</span>`;
}

// Function to calculate love percentage or show empty message
calculateButton.addEventListener('click', () => {
    const name1 = name1Input.value.trim().toLowerCase();
    const name2 = name2Input.value.trim().toLowerCase();

    // Check if either input is empty
    if (!name1 || !name2) {
        resultDisplay.innerText = 'Dear, please write names!';
        resultDisplay.style.color = 'red';
        return;
    }

    // Check for Abu Hurayra/Maria or Hurayra/Maria (case-insensitive)
    if (
        ((name1 === 'abu hurayra' || name1 === 'hurayra') && name2 === 'maria') ||
        ((name2 === 'abu hurayra' || name2 === 'hurayra') && name1 === 'maria')
    ) {
        displayFallingText(`You are my lifeline, I can't say, but in code I love you Maria.`);
        resultDisplay.style.color = 'pink';
    } else {
        // Calculate random love percentage
        const lovePercentage = Math.floor(Math.random() * 100) + 1;
        displayFallingText(`Love Percentage: ${lovePercentage}%`);
        resultDisplay.style.color = lovePercentage > 50 ? 'green' : 'red';
    }

    // Clear input fields
    name1Input.value = '';
    name2Input.value = '';
});

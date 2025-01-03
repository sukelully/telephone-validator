const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

const PHONE_REGEX = /^[1]?\s?(\(\d{3}\)|\d{3})\s?-?\d{3}\s?-?\d{4}$/;

const validateNumber = () => {
    const input = userInput.value;

    if (input === '') {
        alert('Please provide a phone number');
        return;
    }

    const isValid = PHONE_REGEX.test(input);
    resultsDiv.textContent = isValid ? `Valid US number: ${input}` : `Invalid US number: ${input}`;
    resultsDiv.style.display = 'block';
}

const clearInput = () => {
    userInput.value = '';
    resultsDiv.style.display = 'none';
    resultsDiv.textContent = '';
}

checkBtn.addEventListener('click', validateNumber);
window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        validateNumber();
    }
});

clearBtn.addEventListener('click', clearInput);
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

const validateNumber = () => {
    const input = userInput.value;

    if (input === '') {
        alert('Please provide a phone number');
        return;
    }

    const regex = /\d?\s?\d{3}\s?-?\d{3}\s?-?\d{4}/g;
    const match = input.match(regex);
    const isValid = match ? true : false;
    console.log(isValid);
    if (isValid) {
        console.log(isValid);
        resultsDiv.textContent = `Valid US number: ${match}`;
        resultsDiv.style.display = 'block';
    } else {
        resultsDiv.textContent = `Invalid US number: ${input}`;
        resultsDiv.style.display = 'block';
    }
}

const clearInput = () => {
    userInput.value = '';
    resultsDiv.style.display = 'none'
    resultsDiv.textContent = '';
}

checkBtn.addEventListener('click', validateNumber);
window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        validateNumber();
    }
});

clearBtn.addEventListener('click', clearInput);
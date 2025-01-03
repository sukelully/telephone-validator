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

    const regex = /\d{3}-\d{3}-\d{4}/g;
    const isValid = input.match(regex) ? true : false;
    console.log(isValid);
    if (isValid) {
        console.log(isValid);
        resultsDiv.textContent = input.match(regex);
        resultsDiv.style.display = 'block';
    }
}

const clearInput = () => {
    userInput.value = '';
    resultsDiv.style.display = 'none'
}

checkBtn.addEventListener('click', validateNumber);
window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        validateNumber();
    }
});

clearBtn.addEventListener('click', clearInput);
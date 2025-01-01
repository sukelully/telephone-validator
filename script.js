const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');

const validateNumber = () => {
    console.log(userInput.value);
}

checkBtn.addEventListener('click', validateNumber);
window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        validateNumber();
    }
});
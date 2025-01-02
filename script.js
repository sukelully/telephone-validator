const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');

const validateNumber = () => {
    const input = userInput.value;
    const regex = /([0-9])/g;
    console.log(input.match(regex));
}

checkBtn.addEventListener('click', validateNumber);
window.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        validateNumber();
    }
});
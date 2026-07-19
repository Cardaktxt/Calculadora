const input = document.getElementById('result');
const numbers = document.getElementById('numbers');
const operations = document.getElementById('operations');

const deleteButton = document.getElementById('delete');
const deleteAllButton = document.getElementById('deleteAll');

const operators = ['+', '-', '*', '/'];

document.addEventListener('keydown', function (event) {
    const key = event.key
    //console.log(event.key); "9", "a", "Enter", "Backspace", etc.
    if (key >= 0 && key <= 9) {
        addDigit(key);
    } else if (operators.includes(key)) {
        checkAndAdd(key);
    }
    else if (key == 'Backspace') {
        deleteNumber();
    } else if (key == 'Delete') {
        deleteAllNumbers();
    }

});


function deleteNumber() {
    input.value = input.value.slice(0, -1);

}

function deleteAllNumbers() {
    input.value = ''

}

function addDigit(digit) {
    input.value += digit
}

function checkAndAdd(digit) {

    if (digit >= 0 && digit)
        const lastDigit = input.value.slice(-1);
    if (operators.includes(lastDigit)) {
        deleteNumber();
        addDigit(digit);
    } else {
        addDigit(digit);
    }

}

deleteButton.addEventListener('click', function (event) {
    deleteNumber();
})

deleteAllButton.addEventListener('click', function (event) {
    deleteAllNumbers();
})

numbers.addEventListener('click', function (event) {
    const number = event.target.closest('button')

    if (!number) { return }
    else {
        console.log(number.textContent)
        addDigit(number.textContent);
    }

});

operations.addEventListener('click', function (event) {
    const operator = event.target.closest('button');

    if (operator.id == 'add') {
        checkAndAdd('+')
    } else if (operator.id == 'rest') {
        checkAndAdd('-')
    } else if (operator.id == 'multi') {
        checkAndAdd('*')
    } else if (operator.id == 'divide') {
        checkAndAdd('/')
    }
});
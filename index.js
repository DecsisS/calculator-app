// -------------------------
const calcContainer = document.createElement('div');
calcContainer.className = 'calc-container';
document.body.prepend(calcContainer);

const screenContainer = document.createElement('div');
screenContainer.className = 'screen-container';
calcContainer.append(screenContainer);

const screenValue = document.createElement('p');
screenValue.className = 'screen-value';
screenValue.textContent = 0;
screenContainer.append(screenValue);

createButton('Clear All', 'clear-button', 'clear');

const buttonsContainer = document.createElement('div');
buttonsContainer.className = 'buttons-container';
calcContainer.append(buttonsContainer);

const buttonsNumbers = document.createElement('div');
buttonsNumbers.className = 'buttons-numbers';
buttonsContainer.append(buttonsNumbers);

const buttonsMaths = document.createElement('div');
buttonsMaths.className = 'buttons-maths';
buttonsContainer.append(buttonsMaths);

createButton('1');
createButton('2');
createButton('3');
createButton('4');
createButton('5');
createButton('6');
createButton('7');
createButton('8');
createButton('9');
createButton('0');
createButton('.');
createButton('=', 'result-button', 'result')
createButton('+', 'plus-button', 'maths');
createButton('-', 'minus-button', 'maths');
createButton('x', 'x-button', 'maths');
createButton('/', 'division-button', 'maths');


function createButton (name, buttonClass = 'number-button', group = 'numbers') {
    const button = document.createElement('button');
    button.className = buttonClass;
    button.innerText = name;

    if (group === 'numbers' || group === 'result') {
        buttonsNumbers.append(button);
    } else if (group === 'maths') {
        buttonsMaths.append(button);
    } else {
        calcContainer.append(button);
    };
};

// ---------------------------------

let a = ''; // first number
let b = ''; //second number
let sign = '';
let finish = false; // answer

const action = ['+', '-', 'x', '/'];

const clearButton= document.querySelector('.clear-button');
clearButton.addEventListener('click', clearAll);

function clearAll() {
    a = ''; // first number
    b = ''; //second number
    sign = '';
    finish = false;
    screenValue.textContent = 0;
};

const numberButtons = document.querySelectorAll('.number-button');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (screenValue.textContent !== '0'
            || button.textContent === '.'
            || button.textContent === '0') {
            sign === '' 
            ? a = screenValue.textContent += button.textContent 
            : screenValue.textContent += button.textContent
        } else {
            sign === '' 
            ? a = screenValue.textContent = button.textContent 
            : screenValue.textContent = button.textContent;
        }
    });
});

const mathsButtons = document.querySelectorAll('.buttons-maths button');

mathsButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (sign === '') {
            switch (button.textContent) {
                case '+':
                    sign = '+';
                    break;
                case '-':
                    sign = '-'
                    break;
                case 'x':
                    sign = '*';
                    break;
                case '/':
                    sign = '/';
                    break;
            }
        } else {
            maths();
            a = finish;
            switch (button.textContent) {
                case '+':
                    sign = '+';
                    break;
                case '-':
                    sign = '-'
                    break;
                case 'x':
                    sign = '*';
                    break;
                case '/':
                    sign = '/';
                    break;
            }
        }
        screenValue.textContent = '';
    });
})

document.querySelector('.result-button').addEventListener('click', () => {
    maths();
    if (toString(finish).length > 18) {
        screenValue.textContent = 'Error';
    } else {
        screenValue.textContent = finish;
    }
});

function maths() {
    a = Number(a);
    b = Number(screenValue.textContent);
    switch (sign) {
        case '+':
            finish = a + b;
            break;
        case '-':
            finish = a - b;
            break;
        case '*':
            finish = a * b;
            break;
        case '/':
            finish = a / b;
            break;
    }
};
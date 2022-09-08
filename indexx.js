//Calculator

//  screen showing the result
let result = document.querySelector('#input');

// function to get number input
function pressNum(e) {
    if (result.innerHTML === ' ') {
        result.innerHTML = e.innerHTML;
    } else {
        result.innerHTML += e.innerHTML;
    }
}
// function to get operator in input
function pressOperator(e) {
    // checking last operator
    let lastOperator = result.innerHTML.slice(-1);
    if (lastOperator === '+' || lastOperator === '-' || lastOperator === '*' || lastOperator === '/') {
        result.innerHTML = result.innerHTML.slice(0, -1) + e.innerHTML;
    } else {
        result.innerHTML += e.innerHTML;
    }
}

// clear all
function pressAllClear() {
    result.innerHTML = '';
}

// clear one
function pressClear() {
    result.innerHTML = result.innerHTML.slice(0, -1);
}

// calculate button
function pressEqual() {
    let exp = result.innerHTML;
    result.innerHTML = exp;
    exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
    let answer;
    answer = eval(exp);
    result.innerHTML = answer;
}

function pressOperator(e) {
    // check last operator
    let lastOperator = result.innerHTML.slice(-1);
    if (lastOperator === '+' || lastOperator === '-' || lastOperator === '×' || lastOperator === '÷') {
        output.innerHTML = result.innerHTML.slice(0, -1) + e.innerHTML;
    }
    else {
        result.innerHTML += e.innerHTML;
    }
}

function pressDot() {
    result.innerHTML += '.';
}

//  If keys pressed from keyboard
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case '0':
            pressNum(document.querySelector('.number div:nth-child( 13)'));
            break;
        case '1':
            pressNum(document.querySelector('.number div:nth-child(9)'));
            break;
        case '2':
            pressNum(document.querySelector('.number div:nth-child(10)'));
            break;
        case '3':
            pressNum(document.querySelector('.number div:nth-child(11)'));
            break;
        case '4':
            pressNum(document.querySelector('.number div:nth-child(5)'));
            break;
        case '5':
            pressNum(document.querySelector('.number div:nth-child(6)'));
            break;
        case '6':
            pressNum(document.querySelector('.number div:nth-child(7)'));
            break;
        case '7':
            pressNum(document.querySelector('.number div:nth-child(1)'));
            break;
        case '8':
            pressNum(document.querySelector('.number div:nth-child(2)'));
            break;
        case '9':
            pressNum(document.querySelector('.number div:nth-child(3)'));
            break;
        case '+':
            pressOperator(document.querySelector('.number div:nth-child(4)'));
            break;
        case '-':
            pressOperator(document.querySelector('.number div:nth-child(8)'));
            break;
        case '*':
            pressOperator(document.querySelector('.number div:nth-child(12)'));
            break;
        case '/':
            pressOperator(document.querySelector('.number div:nth-child(16)'));
            break;
        case '.':
            pressDot(document.querySelector('.number div:nth-child(15)'));
            break;
        case 'Enter':
            // prevent default action
            e.preventDefault();
            pressEqual();
            break;
        case 'Backspace':
            pressClear();
            break;
        case 'Escape':
            pressAllClear();
            break;
    }
});
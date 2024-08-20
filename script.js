function clearScreen() {
    document.getElementById('screen').innerText = '0';
}
function deleteLast() {
    let current = document.getElementById('screen').innerText;
    document.getElementById('screen').innerText = current.slice(0, -1) || '0';
}
function appendNumber(number) {
    let current = document.getElementById('screen').innerText;
    if (current === '0') {
        current = '';
    }
    document.getElementById('screen').innerText = current + number;
}
function appendOperator(operator) {
    let current = document.getElementById('screen').innerText;
    document.getElementById('screen').innerText = current + ' ' + operator + ' ';
}
function calculate() {
    let current = document.getElementById('screen').innerText;
    try {
        let result = eval(current);
        document.getElementById('screen').innerText = result;
    } catch (error) {
        document.getElementById('screen').innerText = 'Error';
    }
}

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
    const screen = document.getElementById('screen');
    try {
        let result = eval(screen.innerText);
        screen.innerText = parseFloat(result.toFixed(3));
    } catch (error) {
        screen.innerText = "Error";
    }
}

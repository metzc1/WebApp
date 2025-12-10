function dis(val) {
    let input = document.getElementById("result");
    if (isNaN(val) && val !== '.') {
        input.value += val;
    } else {
        input.value = addCommasToInput(input.value + val);
    }
}

function clr() {
    document.getElementById("result").value = "";
}

function solve() {
    let expr = document.getElementById("result").value.replace(/,/g, '');
    let y = evaluateExpression(expr);
    document.getElementById("result").value = addCommasToInput(y.toString());
}

function evaluateExpression(expression) {
    if (expression.includes('/0')) {
        return 'Undefined';
    }
    try {
        return new Function('return ' + expression)();
    } catch (e) {
        return 'Error';
    }
}

function addCommasToInput(input) {
    let parts = input.replace(/,/g, '').split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

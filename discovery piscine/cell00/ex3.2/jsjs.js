document.getElementById('calculateButton').addEventListener('click', function() {
    const left = parseInt(document.getElementById('leftOperand').value);
    const right = parseInt(document.getElementById('rightOperand').value);
    const operator = document.getElementById('operator').value;

    if (isNaN(left) || isNaN(right) || left < 0 || right < 0) {
        alert("Error :(");
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            if (right === 0) {
                alert("It’s over 9000!");
                console.log("It’s over 9000!");
                return;
            }
            result = left / right;
            break;
        case '%':
            if (right === 0) {
                alert("It’s over 9000!");
                console.log("It’s over 9000!");
                return;
            }
            result = left % right;
            break;
        default:
            alert("Error :(");
            return;
    }

    alert(result);
    console.log(result);
});

// Alert every 30 seconds
setInterval(() => {
    alert("Please, use me...");
}, 30000);
function calculate(expression) {
    const parts = expression.split(" ")
    if (parts.length !==3) {
        return "invalid format! use valid operator!"
    }

    const num1 = Number(parts[0]);
    const operator = parts[1];
    const num2 = Number(parts[2]);

    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case  "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            }


}
console.log(calculate("10 + 5"));
console.log(calculate("20 - 5"));
console.log(calculate("20 * 4"));
console.log(calculate("15 / 3"));

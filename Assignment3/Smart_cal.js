const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

function calculate(operation, num1, num2) {
    try {
        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "divide":
                if (num2 === 0) throw new Error("Cannot divide by zero.");
                result = num1 / num2;
                break;
            case "power":
                result = Math.pow(num1, num2);
                break;
            case "root":
                if (num1 < 0) throw new Error("Cannot take root of a negative number.");
                result = Math.sqrt(num1);
                break;
            default:
                throw new Error("InvalidOperationError: Operation not recognized.");
        }
        console.log(`The result of ${operation} is: ${result}`);
    } catch (error) {
        console.error(error.message);
    }
}


calculate("divide", num1, num2);
calculate("root", num1, -1);

calculate("multiply", num1, num2);

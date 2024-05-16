//do not export with func with the brackets !paren

function validateBrackets(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let b = str[i];
        if (b === '(') stack.push(")");
        else if (b === "{") stack.push("}");
        else if (b === "[") stack.push("]");
        else if (stack.length !== 0 || b !== stack.pop()) { //OR NOT &&
            return false;
        }
    }
    return stack.length === 0;
}

console.log(
    "running",validateBrackets('}')
)
module.exports = validateBrackets //no parens!


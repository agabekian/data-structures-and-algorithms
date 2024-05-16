//do not export with func with the brackets !paren

function validateBrackets(str) {
    let stack = [];
    if(str.length < 2) return false; //edge
    for (let i = 0; i < str.length; i++) {
        let b = str[i];
        if (b === '(') stack.push(")");
        else if (b === "{") stack.push("}");
        else if (b === "[") stack.push("]");
        else if (stack.length !== 0 && b !== stack.pop()) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(
    validateBrackets(')[')
)
module.exports = validateBrackets //no parens!


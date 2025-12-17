function capitalize(text) {
    if (text === undefined || text.trim().length === 0) {
        return '';
    }

    const text_split = text.split('');

    text_split[0] = text_split[0].toUpperCase()
    
    return text_split.join('');
}

function reverseString(text) {
    if (text === undefined || text.trim().length === 0) {
        return '';
    }

    return text.split('').reverse().join('')
}

// Calculator
class Calculator {
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }

    add() {
        return this.n1 + this.n2;
    }

    subtract() {
        return this.n1 - this.n2; 
    }

    divide() {
        return this.n1 / this.n2;
    }

    multiply() {
        return this.n1 * this.n2;
    }
}


// TODO: Ceasar Cipher
function caesarCipher() {

}

// TODO: Analyze Array
function analyzeArray(arr) {
    const output = {};

    if (arr === undefined || arr.length === 0) {
        return output;
    }

    arr_length = arr.length;

    output['average'] = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / arr_length;

    output['min'] = Math.min(...arr);

    output['max'] = Math.max(...arr);

    output['length'] = arr_length;

    return output;

}

module.exports = { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
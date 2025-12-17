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

// TODO: Calculator
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
function analyzeArray() {

}

module.exports = { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
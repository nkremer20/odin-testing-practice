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

module.exports = { capitalize, reverseString };
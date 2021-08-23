const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let answer = '';

    for (i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        if (letter == '**********') {
            answer = answer + ' ';
        } else {
            let Object = '';
            for (j = 0; j < letter.length; j = j + 2) {
                if (letter.slice(j, j + 2) == '10') {
                    Object += '.';
                }

                if (letter.slice(j, j + 2) == '11') {
                    Object += '-';
                }
            }
            answer += MORSE_TABLE[Object];
        }
    }
    return answer;
}

module.exports = {
    decode
}
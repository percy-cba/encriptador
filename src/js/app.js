/* Get items */

let btnEncrypt = document.querySelector('.btn-encrypt');
let btnDecrypt = document.querySelector('.btn-decrypt');
let doll = document.querySelector('.doll');
let empty = document.querySelector('.containerEmpty');
let textResult = document.querySelector('.textResult');

/* encrypt or decrypt the text */

btnEncrypt.addEventListener('click', () => {
    hide() 
    let textBox = recoverText() 
    textResult.textContent = encryptText(textBox) 
});

btnDecrypt.addEventListener('click', () => {
    hide();
    let textBox = recoverText(); 
    textResult.textContent = decryptText(textBox); 
});

/* returns the text written in textarea */

let recoverText = () => {
    let textBox = document.querySelector('.inputText'); // Textarea
    return textBox.value;
};

/* add a class to the elements to hide them */

let hide = () => {
    empty.setAttribute("id", "hide");
};

/* letters are added to the original text when encrypting */

function encryptText(messege) {
    let text = messege;
    let textEnd = '';

    for(let i = 0; i < text.length; i++) {
        if(text[i] == 'a') {
            textEnd += 'ai';
        }
        else if(text[i] == 'e') {
            textEnd += 'enter'
        }
        else if(text[i] == 'i') {
            textEnd += 'imes';
        }
        else if(text[i] == 'o') {
            textEnd += 'ober';
        }
        else if(text[i] == 'u') {
            textEnd += 'ufat';
        }
        else {
            textEnd += text[i];
        }
    }
    return textEnd;
}

/* subtract the added letters */

function decryptText(messege) {
    let text = messege;
    let textEnd = '';

    for(let i = 0; i < text.length; i++) {
        if(text[i] == 'a') {
            textEnd += 'a';
            i += 1;
        }
        else if(text[i] == 'e') {
            textEnd += 'e';
            i += 4;
        }
        else if(text[i] == 'i') {
            textEnd += 'i';
            i += 3;
        }
        else if(text[i] == 'o') {
            textEnd += 'o';
            i += 3;
        }
        else if(text[i] == 'u') {
            textEnd += 'u';
            i += 3;
        }
        else {
            textEnd += text[i];
        }
    }
    return textEnd;
}

/* copies the content of the encrypted text and saves it to the clipboard */

const btnCopy = document.querySelector('.btn-copy');
btnCopy.addEventListener('click', () => {
    let contenido = document.querySelector('.textResult').textContent;
    navigator.clipboard.writeText(contenido);
    console.log('prueba');
});


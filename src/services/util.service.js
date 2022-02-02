const CryptoJS = require("crypto-js");
const CRYPTED_KEY = 'this is the classical cipher algorithm'

export const utilService = {
    getRandomColor,
    camelCaseToWord,
    encrypt,
    decrypt,
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function camelCaseToWord(str) {
    const result = str.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}

function encrypt(txt) {
    return CryptoJS.AES.encrypt(txt, CRYPTED_KEY).toString();
}

function decrypt(txt) {
    return CryptoJS.AES.decrypt(txt, CRYPTED_KEY).toString(CryptoJS.enc.Utf8);
}
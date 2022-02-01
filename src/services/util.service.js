const CryptoJS = require("crypto-js");
const CRYPTED_KEY = 'this is the classical cipher algorithm'

export const utilService = {
    makeId,
    getRandomColor,
    debounce,
    encrypt,
    decrypt,
}

function makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

function encrypt(txt) {
    return CryptoJS.AES.encrypt(txt, CRYPTED_KEY).toString();
}

function decrypt(txt) {
    return CryptoJS.AES.decrypt(txt, CRYPTED_KEY).toString(CryptoJS.enc.Utf8);
}
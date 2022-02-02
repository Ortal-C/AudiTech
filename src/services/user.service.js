import { storageService } from './async-storage.service'
import { utilService } from './util.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const gUser = {
    username: 'guest',
    password: '123'
}

async function login(userCred) {
    const { username, password } = userCred;
    const isLogged = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null
    if (!isLogged && gUser.username === username && gUser.password === utilService.decrypt(password)) {
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, username)
        return username
    }
    return isLogged
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER);
}


export const userService = {
    login,
    logout,
    getLoggedinUser,
}

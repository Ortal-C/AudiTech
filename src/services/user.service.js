import { utilService } from './util.service'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const gUser = {
    username: 'guest',
    password: '123'
}

async function login(userCred) {
    const { username, password } = userCred;
    const user = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || null
    if (!user && gUser.username === username && utilService.encrypt(gUser.password) === (password)) {
        sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, username)
        return username
    }
    return user
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

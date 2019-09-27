import { setAuthorization } from "./general";

export function login(credentials) {
    return new Promise((res, rej) => {
        axios.post('http://adminsite.local/api/auth/login', credentials)
            .then((response) => {
                setAuthorization(response.data.access_token);
                res(response.data);
            })
            .catch((err) =>{
                rej("ユーザー情報が正しくない");
            })
    })
}

export function logout() {
    return new Promise((res, rej) => {
        axios.post('http://adminsite.local/api/auth/logout')
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) =>{
                rej("情報処理の中に、エーラが発生しました。");
            })
    })
}


export function getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }
    return JSON.parse(userStr);
}
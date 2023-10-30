import { BASE_URL } from './const'
import { getAccessTokenFromLocalStorage, saveAccessTokenToLocalStorage } from '../utils/accessTokenHandler'

export const login = async ({id, pw}) => {

    const loginResponse = await fetch(`${BASE_URL}/auth`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id,
            "pw": pw
        })
    })

    const loginResponseData = await loginResponse.json();
    
    if (loginResponse.ok) {
        saveAccessTokenToLocalStorage(loginResponseData.data.token)
        return loginResponseData.data
    }

    return loginResponseData.message
}

export const getCurrentUserInfo = async (token) => {

    const userInfoRes = await fetch(`${BASE_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${ token }`
        },
    })

    if (userInfoRes.ok) {
        const userInfoData = await userInfoRes.json();
        console.log(userInfoData.data)
        return userInfoData.data;
    }

    return null;
}
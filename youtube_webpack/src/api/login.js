import { BASE_URL } from './const'
import { getAccessTokenFromLocalStorage, saveAccessTokenToLocalStorage } from '../utils/accessTokenHandler'

export const Request = {
    id: string,
    pw: string
}

export const login = async () => {

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
        
        // 로그인 성공
        if (loginResponse.status === 200) {
            saveAccessTokenToLocalStorage(loginResponseData.data.token)
            return loginResponseData.message
        } 
        
    }

    return loginResponseData.message
}
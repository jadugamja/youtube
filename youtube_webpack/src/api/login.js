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
    
    console.log(loginResponse.ok)

    if (loginResponse.ok) {
        // 로그인 성공
        if (loginResponse.status === 200) {
            alert(loginResponseData.message)
            saveAccessTokenToLocalStorage(loginResponseData.data.token)
            return loginResponseData.data.token
        }
    }

    return loginResponseData.message
}
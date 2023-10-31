import { BASE_URL } from './const'
import { setCookie } from '../utils/accessTokenHandler'

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

    if (loginResponse.ok) {
        const result = await loginResponse.json();
        const token = result.data.token;
        setCookie("token", token, {
            path: "/",
            // Cf. Response Date: new Date().toUTCString()
        })
        return "success";
    }

    return "fail";
}

export const getCurrentUserInfo = async () => {

    const userInfoRes = await fetch(`${BASE_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })

    if (userInfoRes.ok) {
        const userInfoData = await userInfoRes.json();
        console.log(userInfoData.data)
        return userInfoData.data;
    }

    return null;
}
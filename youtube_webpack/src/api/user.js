import { BASE_URL } from './const'

export const signup = async ({id, pw, nickname}) => {

    console.log(id, pw, nickname)
    const signupRes = await fetch(`${BASE_URL}/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "id": id,
            "pw": pw,
            "nickname": nickname
        })
    })

    if(signupRes.ok)
        alert("성공~!")
    else
        alert("실패~!")
}

export const getUserInfo = async () => {

    const getUserRes = await fetch(`${BASE_URL}/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    debugger
    if(getUserRes.ok) {
        const data = await getUserRes.json().data;
    }
}

export const updateProfileImg = async (path) => {

    const updateProfileRes = await fetch(`${BASE_URL}/user/profile-img`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "imgPath": path,
        })
    })

    if(updateProfileRes.ok)
        console.log("프로필 이미지 업데이트 성공!!!")
    else
        console.log("프로필 이미지 업데이트 실패!!!")

}
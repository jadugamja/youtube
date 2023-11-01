import { BASE_URL } from './const'

export const selectAllVideo = async (page) => {

    const selectAllRes = await fetch(`${BASE_URL}/post/all?page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })

    if(selectAllRes.ok) {
        const result = await selectAllRes.json();
        console.log(result.data.postArray)
        return result.data.postArray;
    } else {
        console.log("유튜브 게시글 목록 가져오기 실패!!!")
    }

}
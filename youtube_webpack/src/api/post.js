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

export const getTimeAgo = (createdAt) => {
    const currentDate = new Date();
    const postedDate = new Date(createdAt);

    const timeDifference = currentDate - postedDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0)
        return `${years}년`
    else if (months > 0)
        return `${months}개월`
    else if (days > 0)
        return `${days}일`
    else if (hours > 0)
        return `${hours}시간`
    else if (minutes > 0)
        return `${minutes}분`
    else if (seconds > 0)
        return `${seconds}초`
    
}
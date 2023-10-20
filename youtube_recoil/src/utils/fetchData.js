// 매개 변수 1. url 2. 데이터 가공 함수
export const fetchData = async (url, setDataSet) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        setDataSet(data);
    } catch (error) {
        console.error('데이터를 불러오는 중 오류 발생: ', error);
    }
}
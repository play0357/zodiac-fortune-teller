import { useQuery } from "@apollo/client/react"
import { Card, CardList } from "../styles/styledCard"
import { Loading } from "../styles/styledLoading"
import { GET_ALL_ZODIAC } from "../queries/fortuneQuery"


export default function GetAllZodiac() {
    const { data, loading, error } = useQuery(GET_ALL_ZODIAC);
    const today = new Date();
    if (loading) { //로딩창
        return (
            <Loading>
                <h1>오늘의 운세를 불러오는 중...</h1>
                <p>오늘은 {today.toLocaleDateString('ko-KR', { month: '2-digit', day: '2-digit' }).replace(/\./g, '').replace(' ', '월') + '일 '} {today.toLocaleDateString('ko-KR', { weekday: 'long' })}이에요!</p>
            </Loading>

        );
    }
    if (error) { //에러
        return <h1>데이터를 갖고 오지 못했어요... 😥 {error.message}</h1>;
    }
    //별자리 데이터 받기
    return (
        <CardList>
            {data?.allZodiacs.map(zodiacs => (
                <Card key={zodiacs.sign}>
                     <li>{zodiacs.sign}</li>
                     <li>{zodiacs.period}</li>
                </Card>
            ))}
        </CardList>
    )
}
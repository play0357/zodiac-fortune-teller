import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client/react"

// 사용할 쿼리 정의
const GET_ZODIAC = gql`
    query GetZodiac($sign: String!) {
  getZodiac(sign: $sign) {
  sign
  date
  horoscope  
  }
}
`

const GET_ALL_ZODIAC = gql`
    query AllZodiacs {
  allZodiacs {
  sign
  date
  horoscope  
  }
} 
`



export const GetAllZodiac = () => {
    const { data, loading, error } = useQuery(GET_ALL_ZODIAC);
    if (loading) {
        return (
            <div>
                <h1>오늘의 운세를 불러오는 중...</h1>
                <p>오늘은 {new Date().toLocaleDateString('ko-KR', { weekday: 'long' })}</p>
            </div>

        );
    }
    if (error) {
        return <h1>데이터를 갖고 오지 못했어요... 😥</h1>;
    }
    return data?.allZodiacs.map(zodiacs => (
        zodiacs.sign
    ))
}

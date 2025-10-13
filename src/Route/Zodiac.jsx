import { useQuery } from "@apollo/client/react";
import { GET_ZODIAC } from "../queries/fortuneQuery";
import { ErrorMessage, Loading } from "../styles/styledLoading";
import { useParams } from "react-router-dom";

export default function DailyZodiac() {
    const { sign } = useParams(); //url에서 :sign 가져오기
    const { loading, data, error } = useQuery(GET_ZODIAC, {
        variables: { sign },
    });

    if (loading) {
        return (
            <Loading>
                <h1>당신의 운세를 불러오는 중이에요...</h1>
            </Loading>
        );
    }
    if (error) {

        return (
            <ErrorMessage>
                당신의 운세를 불러오지 못했어요...😥
                {error.message}
            </ErrorMessage>
        )
    }
    const zodiac = data.getZodiac; //data.getZodiac 객체 가져오기
    return (     
            <>
                <li>{zodiac.sign}</li>
                <li>{zodiac.date}</li>
                <li>{zodiac.horoscope}</li>
                <li>{zodiac.period}</li>
            </>
        )
}
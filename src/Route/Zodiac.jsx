import { useQuery } from "@apollo/client/react";
import { GET_ZODIAC } from "../queries/fortuneQuery";
import { ErrorMessage, Loading } from "../styles/styledLoading";

export default function DailyZodiac() {
    const { loading, data, error } = useQuery(GET_ZODIAC);

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
            </ErrorMessage>
        )
    }

    return (
        data?.getZodiac(zodiac => (
            <>
                <li>{zodiac.sign}</li>
                <li>{zodiac.date}</li>
                <li>{zodiac.horoscope}</li>
                <li>{zodiac.period}</li>
            </>
        ))


    )
}
import { TRANSLATE_QUERY } from "../queries/fortuneQuery";
import { useQuery } from "@apollo/client/react";
import { Result } from "../styles/styledBirthdaySelector";
function TranslateQuote({ text }) {
    const targetLanguage = 'ko'; //한국어로 고정

    const { data, loading, error } = useQuery(TRANSLATE_QUERY, {
        variables: { text, targetLanguage },
        skip: !text.trim(), //text 비어있으면 쿼리 실행 x
    });

    return (
        <>
            {loading && null}
            {error && error.message}
            {data && <p>{data.translate.translateText}</p>}
        </>


    )
}
export default TranslateQuote;
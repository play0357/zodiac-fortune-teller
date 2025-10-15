import { gql } from "@apollo/client"

// 사용할 쿼리 정의

//단일 별자리 쿼리
export const GET_ZODIAC = gql`
    query GetZodiac($sign: String!) {
  getZodiac(sign: $sign) {
  sign
  date
  horoscope
  period
  start {
    month
    day
  }
  end {
    month
    day
  }
  }
}
`
//모든 별자리 쿼리
export const GET_ALL_ZODIAC = gql`
    query AllZodiacs {
  allZodiacs {
  sign
  date
  horoscope
  period
  start {
    month
    day
  }
  end {
    month
    day
  }
  }
} 
`
//번역기 쿼리
export const TRANSLATE_QUERY = gql`
query Translate($text: String!, $targetLanguage: String!) {
  translate(text: $text, targetLanguage: $targetLanguage) {
    translateText
  }
}
`



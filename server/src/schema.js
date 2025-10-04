import { gql } from "graphql-tag"


//graphQL 스키마로 별자리 정의 하기


export const typeDefs = gql`
    type Zodiac {
        sign: String! #별자리 이름
        date: String! #날짜
        horoscope: String! #운세 텍스트
        
    }
    extend type Zodiac {
        period: String!
        start: String!
        end: String!
    }
    type Query {
        allZodiacs: [Zodiac!]! #모든 운세 반환
        getZodiac(sign: String!): Zodiac! #단일 운세 반환하기
    }
`
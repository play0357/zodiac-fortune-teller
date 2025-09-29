//클라이언트 파일을 따로 만들어서 불러다 쓰자

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache() // 데이터 캐싱 
})
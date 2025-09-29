//클라이언트 파일을 따로 만들어서 불러다 쓰자

import { createHttpLink } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const link = createHttpLink({
    uri: 'http://localhost:4000/',
})

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache() // 데이터 캐싱 
})
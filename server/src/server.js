import { ApolloServer } from "@apollo/server";
import { resolvers } from "./resolvers.js";
import { typeDefs } from "./schema.js";
import { startStandaloneServer } from '@apollo/server/standalone'
import { allZodiacs, fetchFortuneTeller } from "./data.js";

//Apollo Server 서버 인스턴스 생성
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// 테스트 코드(단일 객체 추출)
const testDatafetch = async (zodiac) => {
  try {
    const data = await fetchFortuneTeller(zodiac);
    console.log(`테스트 데이터 (${zodiac})`, JSON.stringify(data, null, 2))
  } catch (error) {
    console.error(`테스트 데이터 불러오기 실패 (${zodiac})`, error.message)
  }
}

//테스트 코드(모든 별자리 추출)
const testAllDataFetch = async () => {
  try {
    console.log(`모든 별자리를 불러옵니다.`)
    await allZodiacs();
  } catch (error) {
    console.error(`테스트 데이터 불러오기 실패 `, error.message)
  }

}

//apollo server 시작하기
const startServer = async () => { //promise를 반환하는 서버 시작 메소드
  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
      context: async ({ req }) => ({
        //인증 등 추가 후에 DB사용시 데이터 공유를 위해 필요
        user: req.headers.authorization || null, //user 인증 요청 준비
      }),
    });
    console.log(`서버가 ${url} 에서 실행중입니다.`);
    // 데이터 불러오기 테스트
    // await testAllDataFetch();
    // await testDatafetch('aries');
  } catch (error) {
    console.error('서버 시작 실패: ', error);
    process.exit(1); // 프로세스 종료
  }
}

//서버 실행
startServer();


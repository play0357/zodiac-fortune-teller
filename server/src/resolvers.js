
import { fetchFortuneTeller, allZodiacs } from "./data.js";

//리졸버 Query나 mutation 불러와서 상태를 조회하거나 업데이트 함


// 별자리 배열이나 각 별자리 해당 정보 불러오기
export const resolvers = {
  Query: {
    //단일 별자리
    getZodiac: async (_, { sign }) => {
      try {
        const data = await fetchFortuneTeller(sign);
        if (!data || typeof data !== 'object') {
          throw new Error('API 응답이 올바르지 않습니다.')
        }

        if (!data || !data.sign || !data.date || !data.horoscope) {
          throw new Error(`필수 필드 누락: ${JSON.stringify(data)}`);
        }
        return {
          date: data.date,
          sign: data.sign,
          horoscope: data.horoscope,
        };
      } catch (error) {
        console.error(`getZodiac(${sign}) 에러:`, error.message);
        throw new Error(`운세 데이터를 가져오는 데 실패했어요: ${error.message}`);
      }
    },
    //모든 별자리
    allZodiacs: async () => {
      try {
        const data = await allZodiacs();
        if (!data || !Array.isArray(data)) { //에러처리
          throw new Error(`별자리 데이터가 배열이 아니에요...`);

        }
        return data.map(item => {
          if(!item.sign || !item.date || !item.horoscope) {
            throw new Error(`필요한 필드가 누락되었습니다. ${JSON.stringify(item)}`);
          }
          return {
            sign: item.sign,
            date: item.date,
            horoscope: item.horoscope,
          }
        });
      } catch (error) { 
        console.log(`allZodiacs 쿼리 에러: `, error.message)
        throw new Error(`모든 운세 데이터를 가져오는데 실패했습니다. ${error.message}`);
      }


    }
  },
};
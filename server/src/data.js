//별자리 목록 및 데이터 외부 API 키 가져오기
import dotenv from 'dotenv' 

//api key env 파일로 불러오기
dotenv.config();
const apiKey = process.env.API_KEY; //api 키 가져옴

const normalizeZodiac = (sign) => {
  if (!sign) throw new Error(`별자리 이름이 제공되지 않았습니다.`);
  return sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase();
}

export const fetchFortuneTeller = async (sign) => {
  const normalizedZodiac = normalizeZodiac(sign);
  const apiUrl = `https://api.api-ninjas.com/v1/horoscope?zodiac=${sign}`
  // console.log(`API 호출: ${apiUrl}`); api 호출 코드

  const response = await fetch(apiUrl, {
    headers: {
      'X-Api-Key': apiKey,
    }
  });
  if (!response.ok) {
    const errorText = await response.text(); // 에러 응답 본문
    try {
      const errorData = JSON.parse(errorText); // JSON 파싱 시도
      console.error(`API 응답 에러 (${normalizedZodiac}):`, JSON.stringify(errorData, null, 2));
    } catch {
      console.error(`API 응답 에러 (${normalizedZodiac}):`, errorText); // JSON 아닌 경우
    }
    throw new Error(`API를 불러오는데 실패했습니다: ${response.status} - ${errorText}`);
  }

  const data = await response.json();
  // 성공 시 로그 생략
  return data; // { date, sign, horoscope }
};

//모든 별자리
const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
  'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
]

// 모든 별자리 추출
export const allZodiacs = async () => Promise.all(zodiacSigns.map(z => fetchFortuneTeller(z)));

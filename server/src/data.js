//별자리 목록 및 데이터 외부 API 키 가져오기
import dotenv from 'dotenv'

//api key env 파일로 불러오기
dotenv.config();
const apiKey = process.env.API_KEY; //api 키 가져옴

//별자리 고정 데이터
// 별자리 기간 데이터
export const zodiacPeriods = {
  Aries: '3월 21일 ~ 4월 19일',
  Taurus: '4월 20일 ~ 5월 20일',
  Gemini: '5월 21일 ~ 6월 20일',
  Cancer: '6월 21일 ~ 7월 22일',
  Leo: '7월 23일 ~ 8월 22일',
  Virgo: '8월 23일 ~ 9월 22일',
  Libra: '9월 23일 ~ 10월 22일',
  Scorpio: '10월 23일 ~ 11월 22일',
  Sagittarius: '11월 23일 ~ 12월 24일',
  Capricorn: '12월 25일 ~ 1월 19일',
  Aquarius: '1월 20일 ~ 2월 18일',
  Pisces: '2월 19일 ~ 3월 20일',
};

const zodiacSigns = [
    'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
  ]

const normalizeZodiac = (sign) => {
  if (!sign) throw new Error(`별자리 이름이 제공되지 않았습니다.`);
  return sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase();
}

export const fetchFortuneTeller = async (sign) => {
  const normalizedZodiac = normalizeZodiac(sign);
  const apiUrl = `https://api.api-ninjas.com/v1/horoscope?zodiac=${normalizedZodiac}`
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

export const fetchZodiacList = async () => {
  // const apiUrl = 'https://api.api-ninjas.com/v1/zodiacs'; // 가상 엔드포인트
  // try {
  //   const response = await fetch(apiUrl, { headers: { 'X-Api-Key': apiKey } });
  //   if (!response.ok) throw new Error('별자리 목록 API 호출 실패');
  //   const data = await response.json();
  //   return data.zodiacs || zodiacSigns; // API 응답 또는 대체
  // } catch (error) {
  //   console.error('별자리 목록 가져오기 실패:', error.message);
  //   return zodiacSigns; // 대체로 고정 배열
  // }
  return zodiacSigns;
}

// 모든 별자리 추출
export const allZodiacs = async () => {
  return Promise.all(zodiacSigns.map(z => fetchFortuneTeller(z)));
}

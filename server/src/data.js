//별자리 목록 및 데이터 외부 API 키 가져오기
import { Translate } from '@google-cloud/translate/build/src/v2/index.js';
import dotenv, { config } from 'dotenv'
import path from 'path'
import { GoogleAuth, JWT, JWTAccess } from 'google-auth-library';
import fs from 'fs';

//api key env 파일로 불러오기
dotenv.config({path: path.resolve(process.cwd(), '../.env')});
const apiKey = process.env.VITE_API_KEY; //api 키 가져옴
if (!apiKey) console.error('문제 발생')
//별자리 고정  기간 데이터

export const zodiacsInfo = [
  { sign: 'Aquarius', start: { month: 1, day: 20 }, end: { month: 2, day: 18 }, period: '1월 20일 ~ 2월 18일' },
  { sign: 'Pisces', start: { month: 2, day: 19 }, end: { month: 3, day: 20 }, period: '2월 19일 ~ 3월 20일' },
  { sign: 'Aries', start: { month: 3, day: 21 }, end: { month: 4, day: 19 }, period: '3월 21일 ~ 4월 19일' },
  { sign: 'Taurus', start: { month: 4, day: 20 }, end: { month: 5, day: 20 }, period: '4월 20일 ~ 5월 20일' },
  { sign: 'Gemini', start: { month: 5, day: 21 }, end: { month: 6, day: 20 }, period: '5월 21일 ~ 6월 20일' },
  { sign: 'Cancer', start: { month: 6, day: 21 }, end: { month: 7, day: 22 }, period: '6월 21일 ~ 7월 22일' },
  { sign: 'Leo', start: { month: 7, day: 23 }, end: { month: 8, day: 22 }, period: '7월 23일 ~ 8월 22일' },
  { sign: 'Virgo', start: { month: 8, day: 23 }, end: { month: 9, day: 22 }, period: '8월 23일 ~ 9월 22일' },
  { sign: 'Libra', start: { month: 9, day: 23 }, end: { month: 10, day: 22 }, period: '9월 23일 ~ 10월 22일' },
  { sign: 'Scorpio', start: { month: 10, day: 23 }, end: { month: 11, day: 22 }, period: '10월 23일 ~ 11월 22일' },
  { sign: 'Sagittarius', start: { month: 11, day: 23 }, end: { month: 12, day: 21 }, period: '11월 23일 ~ 12월 24일' },
  { sign: 'Capricorn', start: { month: 12, day: 22 }, end: { month: 1, day: 19 }, period: '12월 25일 ~ 1월 19일' },
];



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
  return data; // { date, sign, horoscope, period }
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
  return zodiacsInfo;
}

// 모든 별자리 추출
export const allZodiacs = async () => {
  //별자리 이름만 따로 배열 만들기
  const zodiacSigns = zodiacsInfo.map(z => z.sign);
  return Promise.all(zodiacSigns.map(z => fetchFortuneTeller(z)));
}

//번역기 호출하기
//구글 클라우드 서비스 계정 키 정보 불러오기

//환경 변수 검증
const keyFilename = process.env.GOOGLE_APPLICATION_CREDENTIALS;

// 필수 환경 변수 체크
if (!keyFilename) {
  console.error('❌ GOOGLE_APPLICATION_CREDENTIALS가 .env 파일에 없습니다.');
  process.exit(1);
}
let credentials;
try {
  credentials = JSON.parse(fs.readFileSync(keyFilename));
}catch(error){
  console.error('❌ JSON 파일 읽기 실패:', keyFilename, error.message);
  process.exit(1);
}
const auth = new JWT({
  keyFilename,
  scopes: 'https://www.googleapis.com/auth/cloud-platform',
})

//Translate 클라이언트 초기화

const translate = new Translate({ auth });
export default translate;

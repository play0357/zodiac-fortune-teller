
// 선택 된 월 일 기반 별자리 반환받아 페이지 전환
export default function getSignFromPeriod(month, day, zodiacs) {
  const cleanedDay = typeof day === 'string' ? day.replace('일', '') : day;
  const parsedDay = parseInt(cleanedDay);
  if (!month || !day || !zodiacs) return null;

  const currentYear = new Date().getFullYear();
  const selected = new Date(currentYear, month - 1, parsedDay);

  // 날짜 유효성 검사
  if (selected.getMonth() + 1 !== month || selected.getDate() !== day) {
    console.log("반환값이 null 이에요...");
    return null;
  }

  const zodiac = zodiacs.find(({ start, end }) => {
    let startDate, endDate;
    if (start.month > end.month) {
      startDate = new Date(currentYear - 1, start.month - 1, start.day);
      endDate = new Date(currentYear, end.month - 1, end.day);
    } else {
      startDate = new Date(currentYear, start.month - 1, start.day);
      endDate = new Date(currentYear, end.month - 1, end.day);
    }
    return selected >= startDate && selected <= endDate;
  });
  console.log("반환 별자리: ",zodiac);
  return zodiac ? zodiac.sign : null;
}




// 선택 된 월 일 기반 별자리 반환받아 페이지 전환
export default function getSignFromPeriod(month, day, zodiacs) {
  if (!month || !day || !zodiacs) return null;

  const currentYear = new Date().getFullYear();
  const selected = new Date(currentYear, month - 1, day);

  // 날짜 유효성 검사
  if (selected.getMonth() + 1 !== month || selected.getDate() !== day) {
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

  return zodiac ? zodiac.sign : null;
}



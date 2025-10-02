import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BirthdaySelectorBox, Container, Result, StyledSelect } from "../styles/styledBirthdaySelector";
// 월 생성
const months = [
    { value: '01', label: '1월', days: 31 },
    { value: '02', label: '2월', days: 28 },
    { value: '03', label: '3월', days: 31 },
    { value: '04', label: '4월', days: 30 },
    { value: '05', label: '5월', days: 31 },
    { value: '06', label: '6월', days: 30 },
    { value: '07', label: '7월', days: 31 },
    { value: '08', label: '8월', days: 31 },
    { value: '09', label: '9월', days: 30 },
    { value: '10', label: '10월', days: 31 },
    { value: '11', label: '11월', days: 30 },
    { value: '12', label: '12월', days: 31 },
]

//연도 생성
// const generateYears = () => {
//     const years = [];
//     for (let year = new Date().getFullYear(); year >= 1900; year--) {
//         years.push(year.toString());
//     }
//     return years;
// }
// const years = generateYears();


function BirthdaySelector() {
    // const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedDay, setSelectedDay] = useState('');

    // const handleYearChange = (event) => {
    //     setSelectedYear(event.target.value);
    //     if(selectedMonth) setSelectedDay('') //일 초기화
    // };
    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        setSelectedDay('') // 월 변경시 일 초기화
        console.log(event.target.value);
    };
    const handleDayChange = (event) => {
        setSelectedDay(event.target.value);
    };
    //선택 월 일 배열
    const selectedMonthData = months.find((m) => m.value === selectedMonth);
    const days = selectedMonthData ? Array.from({ length: selectedMonthData.days }, (_, i) => ({ value: (i + 1).toString().padStart(2, '0'), label: `${i + 1}일` })) : [];

    //선택된 월 일 표시
    const selectedDate = selectedMonth && selectedDay ? `${selectedMonth}월 ${selectedDay}` : '';

    return (
        <Container>
            <BirthdaySelectorBox>
                {/* <StyledSelect>
                    <select value={selectedYear} onChange={handleYearChange}>
                    <option >연도</option>
                    {years.map(year => <option key={year.value} value={year.value}> {year.label}</option>)}
                    </select> 
                </StyledSelect>
                */

                }
                <StyledSelect value={selectedMonth} onChange={handleMonthChange}>
                    <option value="" disabled>월</option>
                    {months.map(month => <option key={month.value} value={month.value}>{month.label}</option>)}
                </StyledSelect>


                <StyledSelect value={selectedDay} onChange={handleDayChange} disabled={!selectedMonth}>
                    <option value="" disabled>일</option>
                    {days.map(day => <option key={day.value} label={day.label}>{day.value}일</option>)}
                </StyledSelect>

            </BirthdaySelectorBox>
            <Result>
                <Link to={ selectedDate ? '/zodiac' : null} >
                    {selectedDate ? `당신의 생일: ${selectedDate}` : '아직 생일을 알려주지 않았어요'}
                </Link>
            </Result>

        </Container>
    )
}

export default BirthdaySelector;




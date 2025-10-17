import { Link } from "react-router-dom"
import { Title, HomeContainer, MoreBtn } from "../styles/styledHome"
import DailyFortune from "../components/getZodiac";
export default function Zodiac() {
    return (
        <>
            <HomeContainer>
                <>
                    {/* <Title>
                        당신의 오늘 운세는....!
                    </Title> */}
                    <DailyFortune />
                </>

                {/* <MoreBtn>
                    <Link to={'/'}></Link>
                    <Link to={'/zodiacs'}>다른 별자리 더 보기</Link>
                </MoreBtn> */}


            </HomeContainer>

        </>
    );
}
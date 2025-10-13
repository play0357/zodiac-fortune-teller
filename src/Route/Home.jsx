import { Link } from "react-router-dom"
import { Title, HomeContainer, MoreBtn } from "../styles/styledHome"
import BirthdaySelector from "../components/selectBirthday"
export default function Home() {
    return (
        <>
            <HomeContainer>
                <Title>
                    생일을 알려주시면 당신의 별자리와 오늘의 운세를 알아볼게요!
                </Title>
                <BirthdaySelector />
                <MoreBtn>
                    <Link to={'/zodiacs'}>다른 별자리 더 보기</Link>
                </MoreBtn>


            </HomeContainer>

        </>
    );
}
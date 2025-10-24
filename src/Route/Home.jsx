import { Link } from "react-router-dom"
import { Title, HomeContainer, MoreBtn, ContentCard } from "../styles/styledHome"
import BirthdaySelector from "../components/selectBirthday"
import Star from "../components/star";
export default function Home() {
    return (
        <>
            <HomeContainer>
                <Star />
                <Title>
                    생일을 알려주시면 당신의 별자리와 오늘의 운세를 알아볼게요!
                </Title>
                <ContentCard>
                    <BirthdaySelector />
                </ContentCard>
                
                <MoreBtn>
                    <Link to={'/zodiacs'}>다른 별자리 더 보기</Link>
                </MoreBtn>


            </HomeContainer>

        </>
    );
}
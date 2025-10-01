import { Link } from "react-router-dom"
import { Title, HomeContainer,MoreBtn } from "../styles/styledHome"

export default function Home() {
    return (
        <>
            <HomeContainer>
                <Title>
                    생일을 기반으로 오늘 운세를 알아볼까요?
                </Title>
                <MoreBtn>
                    <Link to={'/all-zodiacs'}>다른 운세 더 보기</Link>
                </MoreBtn>
                
            </HomeContainer>

        </>
    )
}
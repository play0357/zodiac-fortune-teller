import { Link } from "react-router-dom"
import { Title, HomeContainer, MoreBtn } from "../styles/styledHome"
import Star from "../components/star";
import backgroundImage from '../assets/backgroundImg/Homebg.jpg' 
export default function Home() {
    return (
        <>
            <HomeContainer bg={backgroundImage}>
                <Star />
                    <MoreBtn>
                        <Link to={'/birthday'}>내 생일 운세 알아보기</Link>
                    </MoreBtn>
                
            </HomeContainer>

        </>
    );
} 
import { Link } from "react-router-dom"
import { Title, HomeContainer, MoreBtn } from "../styles/styledHome"
import DailyFortune from "../components/getZodiac";
export default function Zodiac() {
    return (
        <>
            <HomeContainer>
                <DailyFortune />
            </HomeContainer>

        </>
    );
}
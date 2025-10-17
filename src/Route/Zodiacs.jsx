import { Link } from "react-router-dom"
import { Title, HomeContainer, MoreBtn } from "../styles/styledHome"
import GetAllZodiac from "../components/getZodiacs";
export default function Zodiacs() {
    return (
        <>
            <HomeContainer>
                
            <GetAllZodiac />

            </HomeContainer>

        </>
    );
}
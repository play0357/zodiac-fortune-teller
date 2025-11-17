import BirthdaySelector from "../components/selectBirthday";
import Star from "../components/star";  
import { HomeContainer } from "../styles/styledHome";




export default function InputBirthday() {


    return (
        <HomeContainer>
            <Star />    
            
                <BirthdaySelector />
            
        </HomeContainer>
    )
}
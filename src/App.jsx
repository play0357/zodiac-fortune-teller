import ShowAllZodiac from './Route/Zodiacs'
import Home from './Route/Home'
import DailyZodiac from './Route/Zodiac'
import { Routes, Route } from "react-router-dom";

function App() {
  //별자리 불러오기
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/zodiacs' element={<ShowAllZodiac/>}/>
        <Route path= '/zodiac/:sign' element={<DailyZodiac/>} />
      </Routes>
     
    </>
  )
}

export default App

import ShowAllZodiac from './Route/showAllZodiac'
import Home from './Route/Home'
import DailyZodiac from './Route/showOneZodiac'
import { Routes, Route } from "react-router-dom";

function App() {
  //별자리 불러오기
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all-zodiacs' element={<ShowAllZodiac/>}/>
        <Route path= '/zodiac' element={<DailyZodiac/>} />
      </Routes>
     
    </>
  )
}

export default App

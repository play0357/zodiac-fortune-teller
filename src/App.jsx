import ShowAllZodiac from './Route/showAllZodiac'
import { Routes, Route } from "react-router-dom";
import Home from './Route/Home'
function App() {
  //별자리 불러오기
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/all-zodiacs" element={<ShowAllZodiac/>}/>
      </Routes>
     
    </>
  )
}

export default App

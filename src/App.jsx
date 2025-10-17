import Zodiacs from './Route/Zodiacs'
import Home from './Route/Home'
import Zodiac from './Route/Zodiac'
import { Routes, Route } from "react-router-dom";

function App() {
  //별자리 불러오기
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/zodiacs' element={<Zodiacs/>}/>
        <Route path= '/zodiac/:sign' element={<Zodiac/>} />
      </Routes>
     
    </>
  )
}

export default App

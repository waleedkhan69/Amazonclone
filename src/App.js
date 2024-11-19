import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Cars from './Pages/Cars'
// import CarDetail from './Pages/CarDetail'
// import Bookcaar from './Pages/Bookcaar'
// import Order from './Pages/Order.jsx'
// import LocalStorage from './Pages/LocalStorage.jsx'
import Regestration from './AmazonColone/Regestration'
import Amazonehome from './AmazonColone/Amazonehome'
import ReturnForm from './AmazonColone/ReturnForm'
import Pakfrom from './AmazonColone/Pakfrom'
import Amcrousal from './AmazonColone/Amcrousal'
import SigninPage from './AmazonColone/SigninPage'
import AmazonPage3 from './AmazonColone/AmazonPage3'
// import Backtotop from './AmazonColone/Backtotop'




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} /> */}
        {/* <Route path='/' element={<Cars />} />
        <Route path='/detail' element={<CarDetail />} />
        <Route path='/form/:id'element={<Bookcaar />} />
        <Route path='/order'element={<Order />} />
        <Route path='/local'element={<LocalStorage />} /> */}
        <Route path='/' element={<Regestration />} />
        <Route path='/home' element={<Amazonehome />} />
        <Route path='/Rfom' element = {<ReturnForm/>}/>
        <Route path = 'pfom' element = {<Pakfrom/>}/>
        <Route path  ='Swip'element  = {<Amcrousal/>}/>
        <Route path = 'sign' element = {<SigninPage/>}/>
        <Route path = 'page3' element = {<AmazonPage3/>}/>
        {/* <Route path  ='/home' element = {<Backtotop/>}/> */}
        
      
      



      </Routes>
    </BrowserRouter>
  )
}

export default App
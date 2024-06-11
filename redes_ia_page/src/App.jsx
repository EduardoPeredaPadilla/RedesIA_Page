
import { useState } from 'react'
import './App.css'
import { RedesIAPage } from './components/view-structure/RedesIAPage'
import { Route, Routes } from 'react-router-dom';

function App() {
  
  



  return (
    // <Routes>
    //   {!controlInicio
    //     ? <>
    //         <Route path="/*" element={<RedesIAPage />} /> 
    //       </>

    //     : <>
    //         <Route path="/quienes-somos" element={<RedesIAPage />} /> 
    //       </>

    //   }
    // </Routes>
    <>
      <div>
        <RedesIAPage/>
      </div>
    </>
  )
}

export default App

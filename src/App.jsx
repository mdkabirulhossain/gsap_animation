import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

function App() {
  
  useGSAP(()=>{
    gsap.to('.box',{
      x:100,
      duration:2,
      delay:1
    })
  })
  return (
    <>
     <h1 className=' text-5xl text-center font-bold p-5'>Hello</h1>
     <div className='box'>

     </div>
    </>
  )
}

export default App

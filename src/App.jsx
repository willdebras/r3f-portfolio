import { useContext, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Leva } from 'leva'
import Cursor from './components/Cursor'
import Bio from './components/Bio'
import MobileNav from './components/MobileNav'

import { MouseContext } from "./context/mouse-context"

function App() {

  // const { cursorType, cursorChangeHandler } = useContext(MouseContext)

  const isMobile = screen.orientation.type==='portrait-primary' ? true : false

  const [sceneLetter, setSceneLetter] = useState()

  return (
    <>
      <Bio sceneLetter={sceneLetter} setSceneLetter={setSceneLetter}/>
      <Leva hidden />
      { isMobile && <MobileNav sceneLetter={sceneLetter} setSceneLetter={setSceneLetter}/> }
      {/* <Cursor /> */}
      <Canvas> 
        <Experience sceneLetter={sceneLetter} setSceneLetter={setSceneLetter} isMobile={isMobile}/>
      </Canvas>
    </>

  )
}


export default App

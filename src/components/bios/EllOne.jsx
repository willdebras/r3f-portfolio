import { useEffect, useRef, useState } from "react"

import MenuDesktop from './MenuDesktop.jsx'
import './bios.css'

import { useClickAway } from "../../hooks/useClickAway.js"

export default function EllOne({setSceneLetter, isMobile}) {

    // const wrapper = useRef()

    const wrapper = useClickAway(() => {
        setSceneLetter('')
      })
    

    const [visible, setVisible] = useState(false)

    const [windowSize, setWindowSize] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })

    const [scale, setScale] = useState(0)
    const [mapStyles, setMapStyles] = useState()


    useEffect(()=> {
        setVisible(true)
    }, [])

    useEffect(()=> {

        isMobile ? setScale(windowSize.width * 0.9 / 900) : setScale(windowSize.height * 0.9 / 1200)
        let newStyles
        newStyles = isMobile 
            ? newStyles = ({transform: `scale(${scale})`, top: `calc(50% - ${550*scale}px)`, left: `calc(50% - ${430*scale}px)`}) 
            : ({transform: `scale(${scale})`, left: `calc(50% - ${400*scale}px)`})
        setMapStyles(newStyles)

    }, [scale])

    function handleClose() {
        setVisible(false)
        setTimeout(() => setSceneLetter(''), 200)
    } 

    return <>
        <div className={`menu ${visible && 'visible'}`} style={mapStyles} ref={wrapper}>
            <div className='border-image'>
                <button className='menuReturn' onClick={handleClose}>Return</button>
                <button className='menuClose' onClick={handleClose}>Explore</button>
                <h1>PROJECTS</h1>
                <MenuDesktop />
            </div>
        </div>
    </>
}
import { useEffect, useRef, useState } from "react"
import { Html } from '@react-three/drei'

import './bios.css'


export default function ContactCard({sceneLetter, setSceneLetter}) {

    const wrapper = useRef()

    const closeButton = useRef()

    const [visible, setVisible] = useState(false)

    useEffect(()=> {
        setVisible(true)
    }, [])

    function handleClose() {
        setVisible(false)
        setTimeout(() => setSceneLetter(''), 300)
    }

    useEffect(()=> {
        handleClose()
    }, [closeButton])

    console.log(sceneLetter)
    

    return <>
        {sceneLetter === 'L2' && 
        <>
            <Html
                transform
                wrapperClass="macbookScreen"
                distanceFactor={ 1 }
                position={ [ -0.6, 2, 8.5 ] }
                rotation-x={ 0.05 }
                rotation-y={ -2.1 }
            >
                <div className={`contactCard ${visible && 'visible'}`} ref={wrapper}>
                    <div className='contactButtons'>
                        <button className='backButton' onClick={handleClose}>⌦</button>
                    </div>
                    <hr></hr>
                    <div className='contactTitle'>
                    where to find <span>me</span>
                    </div>
                    <hr></hr>
                    <div className='contactList'>
                        <ul>
                            <li><a href='https://twitter.com/_willdebras'>twitter dot com</a></li>
                            <li><a href='mailto:wbonnell123@gmail.com'>electronic mail</a></li>
                            <li><a href='https://github.com/willdebras'>github dot com</a></li>
                            <li><a href='https://www.linkedin.com/in/william-bonnell-85982b3a/'>linked in</a></li>
                        </ul>
                    </div>
                </div>
            </Html>
        </>
        }
    </>
}
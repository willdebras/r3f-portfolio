import { useEffect, useRef, useState } from "react"
import { Html } from '@react-three/drei'

import './bios.css'


export default function ContactCard({sceneLetter, setSceneLetter, isMobile}) {

    const wrapper = useRef()

    const closeButton = useRef()

    const [visible, setVisible] = useState(false)

    useEffect(()=> {
        setVisible(true)
    }, [])

    function handleClose() {
        setVisible(false)
        if(isMobile) setTimeout(() => setSceneLetter('topL2'), 300)
        else setTimeout(() => setSceneLetter(''), 300)
    }

    return <>
        {sceneLetter === 'L2' && !isMobile && 
        <>
            <Html
                transform
                wrapperClass="macbookScreen"
                distanceFactor={ 1 }
                position={ [ -1.1, 2.4, 10.5 ] }
                rotation-x={ 0.05 }
                rotation-y={ -2.4 }
            >
                <div className={`contactCard ${visible && 'visible'}`} ref={wrapper}>
                    {/* <div className='contactButtons'>
                        <button className='backButton' onClick={handleClose}>⌦</button>
                    </div> */}
                    <hr></hr>
                    <div className='contactTitle'>
                    <span>
                        <button className='backButton' onClick={handleClose}>⌦</button>
                    </span> | where to find <span>me</span>
                    </div>
                    <hr></hr>
                    <div className='contactList'>
                        <ul>
                            <li><a href='https://twitter.com/_willdebras'>twitter dot com</a></li>
                            <li><a href='mailto:wbonnell123@gmail.com'>electronic mail</a></li>
                            <li><a href='https://github.com/willdebras'>github dot com</a></li>
                        </ul>
                    </div>
                </div>
            </Html>
        </>
        }
        {sceneLetter === 'L2' && isMobile &&
        <>
            <Html
                transform
                wrapperClass="macbookScreen"
                distanceFactor={ 0.75 }
                position={ [ -1, 2.3, 8.78 ] }
                rotation-x={ 0.00 }
                rotation-y={ -1.8 }
            >
                <div className={`contactCard ${visible && 'visible'}`} ref={wrapper}>
                    {/* <div className='contactButtons'>
                        <button className='backButton' onClick={handleClose}>⌦</button>
                    </div> */}
                    <hr></hr>
                    <div className='contactTitle'>
                    <span>
                        <button className='backButton' onClick={handleClose}>⌦</button>
                    </span> | where to find <span>me</span>
                    </div>
                    <hr></hr>
                    <div className='contactList'>
                        <ul>
                            <li><a href='https://twitter.com/_willdebras'>twitter dot com</a></li>
                            <li><a href='mailto:wbonnell123@gmail.com'>electronic mail</a></li>
                            <li><a href='https://github.com/willdebras'>github dot com</a></li>
                        </ul>
                    </div>
                </div>
            </Html>
        </>
        }
    </>
}
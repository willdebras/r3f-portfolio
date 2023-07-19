import { useEffect, useState } from 'react'
import './bios/nav.css'

export default function MobileNav({sceneLetter, setSceneLetter}) {

    const inputs = [["W", "topW"], ["I", "topI"], ["L", "topL"], ["L", "topL2"]]


    const [navSelected, setNavSelected] = useState('topW')

    const changeLetter = (value) => {
        setNavSelected(value)
        setSceneLetter(value)
    }

    return <>
        <div className='mobilenav'>
            <form className='navform'>
            {
            inputs.map(([text, value], i) => (
                <div key={ i } id={`${value}Wrapper`} className={navSelected === value ? 'navselected mobilenavitem' : 'mobilenavitem'}>
                    <label htmlFor={value}>{text}
                    <input type="radio" id={value}
                        checked={navSelected === value}
                        onChange={() => changeLetter(value)} 
                        value={ value } />
                    </label>
                </div>
            ))
            }
            </form>
        </div>
    </>

}
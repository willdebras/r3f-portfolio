import Eye from './bios/Eye.jsx'
import EllOne from './bios/EllOne.jsx'
import DoubleYou from './bios/DoubleYou.jsx'

export default function Bio({sceneLetter, setSceneLetter}) {

    return <>
        {/* {sceneLetter === 'W' && <DoubleYou setSceneLetter={setSceneLetter} />} */}
        {sceneLetter === 'I' && <Eye setSceneLetter={setSceneLetter} />}
        {sceneLetter === 'L1' && <EllOne setSceneLetter={setSceneLetter} />}
    </>

}
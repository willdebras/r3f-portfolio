import { useContext, useState } from "react"

import { MouseContext } from "../context/mouse-context"

export default function IntersectionChecks({handlePopUp}) {

    const [hoveredLetter, setHoveredLetter] = useState('')

    return <>
        <CheckerIntersection position={[-1.8, 2, 1.7]} size={[3.5, 4]} letterId='W' handlePopUp={handlePopUp} setHoveredLetter={setHoveredLetter} />
        <CheckerIntersection position={[-1.8, 2, 4.7]} size={[3.5, 1]} letterId='I' handlePopUp={handlePopUp} setHoveredLetter={setHoveredLetter}  />
        <CheckerIntersection position={[-1.8, 2, 6.2]} size={[3.5, 1]} letterId='L1' handlePopUp={handlePopUp} setHoveredLetter={setHoveredLetter}  />
        <CheckerIntersection position={[-1.8, 2, 8.2]} size={[3.5, 1]} letterId='L2' handlePopUp={handlePopUp} setHoveredLetter={setHoveredLetter}  />
        <Underline position={[-0.5, 2, 2.25]} rotationZ={Math.PI / 12} width={1.3} visible={hoveredLetter=='W'} />
        <Underline position={[-3.9, 2, 4.45]} rotationZ={-Math.PI / 2}  width={1.1} visible={hoveredLetter=='I'} />
        <Underline position={[-3.6, 2, 4.05]} rotationZ={-Math.PI / 2}  width={0.7} visible={hoveredLetter=='I'} />
        <Underline position={[-1.5, 2, 6.85]} rotationZ={Math.PI}  width={1.1} visible={hoveredLetter=='L1'} />
        <Underline position={[0.03, 2, 8.4]} rotationZ={-Math.PI / 2}  width={1.3} visible={hoveredLetter=='L2'} />
    </>
}

function CheckerIntersection({position, size, letterId, handlePopUp, setHoveredLetter}) {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext)

    return <>
            <mesh
                rotation-x={-Math.PI / 2} 
                position={position}
                onPointerEnter={ ()=> {
                    cursorChangeHandler('ringWide')
                    setHoveredLetter(letterId)
                    } 
                }
                onPointerLeave={ ()=> {
                    cursorChangeHandler('')
                    setHoveredLetter('')
                    }
                }
                onClick={()=>{handlePopUp(letterId)}}
            >
            <planeBufferGeometry args={size}/>
            <meshBasicMaterial transparent opacity={0.0} color={0xffffff} />
        </mesh>
    </>
}

function Underline({position, letterId, width, rotationZ, visible}) {
    return <>
        <mesh
                rotation-x={-Math.PI / 2} 
                rotation-z={rotationZ} 
                position={position}
                onPointerEnter={ ()=> {} }
                onPointerLeave={ ()=> {} }
            >
            <planeBufferGeometry args={[width, 0.03]} />
            <meshBasicMaterial transparent={!visible} opacity={visible ? 1.0 : 0.0} color='orange'/>
        </mesh>
    </>
}
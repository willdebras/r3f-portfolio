import { useContext } from "react"

import { MouseContext } from "../context/mouse-context"

export default function IntersectionChecks({handlePopUp}) {

    return <>
        <CheckerIntersection position={[-1.8, 2, 1.7]} size={[3.5, 4]} letterId='W' handlePopUp={handlePopUp} />
        <CheckerIntersection position={[-1.8, 2, 4.7]} size={[3.5, 1]} letterId='I' handlePopUp={handlePopUp} />
        <CheckerIntersection position={[-1.8, 2, 6.2]} size={[3.5, 1]} letterId='L1' handlePopUp={handlePopUp} />
        <CheckerIntersection position={[-1.8, 2, 8.2]} size={[3.5, 1]} letterId='L2' handlePopUp={handlePopUp} />
    </>
}

function CheckerIntersection({position, size, letterId, handlePopUp}) {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext)

    return <>
            <mesh
                rotation-x={-Math.PI / 2} 
                position={position}
                onPointerEnter={ ()=> cursorChangeHandler('ringWide') }
                onPointerLeave={ ()=> cursorChangeHandler('') }
                onClick={()=>{handlePopUp(letterId)}}
            >
            <planeBufferGeometry args={size}/>
            <meshBasicMaterial transparent opacity={0.0} color={0xffffff} />
        </mesh>
    </>
}
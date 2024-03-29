import { OrbitControls, Sky, PresentationControls, PerspectiveCamera, CameraControls } from '@react-three/drei'
import { useEffect, useRef, useState, Suspense } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

import { button, useControls } from 'leva'

import Will from './components/Will'
import Lights from './components/Lights'
import Water from './components/Water'
import Planes from './components/Planes'
import AdditionalModels from './components/AdditionalModels'
import IntersectionChecks from './components/IntersectionChecks'
import IntroHTML from './components/bios/IntroHTML.jsx'
import ContactCard from './components/bios/ContactCard.jsx'

import Loader from './components/Loader'

export default function Experience({sceneLetter, setSceneLetter, isMobile}) {

    const [ controlsEnabled, setControlsEnabled ] = useState(true)

    const { cameraAdjust, cameraLookAt } = useControls('camera', { 
        cameraAdjust: {
            value: { x: -4, y: 2.3, z:3.35},
            step: 0.01,
            joystick: 'invertY'
        },
        cameraLookAt: {
            value: { x: 2.5, y: 0.8, z:-0.07},
            step: 0.01,
            joystick: 'invertY'
        }
    } )

    useEffect(()=> {
        sceneLetter==='' | !sceneLetter ? setControlsEnabled(true) : setControlsEnabled(false)
        if(presControls.current) presControls.current.reset()
        // cameraControls.current.reset()
    }, [controlsEnabled, sceneLetter])

    const camera = useRef()

    const presControls = useRef()
    const cameraControls = useRef()

    const [smoothedCameraPosition ] = useState(()=> new THREE.Vector3(-10, 10, 9))
    const [ smoothedCameraTarget ] = useState(()=> new THREE.Vector3(-0.5, 0, 4.5))

    useFrame((state, delta)=> {

        if(!camera.current) return

        let cameraPosition = new THREE.Vector3(-7, 7.5, 4)
        let cameraTarget = new THREE.Vector3(-0.5, 0, 4.6)

        if(sceneLetter === 'W' && !isMobile) {
            cameraPosition = new THREE.Vector3(-4, 2.5, 3.35)
            cameraTarget = new THREE.Vector3(2.5, 1.4, -0.07)


        } else if(sceneLetter === 'W' && isMobile) {

            cameraPosition = new THREE.Vector3(-4, 3, 3.55)
            cameraTarget = new THREE.Vector3(2, 1.4, 3.07)

        } else if(sceneLetter === 'I') {
            cameraPosition = new THREE.Vector3(-3.35, 1.58, 4.58)
            cameraTarget = new THREE.Vector3(9.61, 0.3, 8.14)

            // cameraPosition = new THREE.Vector3(cameraAdjust.x, cameraAdjust.y, cameraAdjust.z)
            // cameraTarget = new THREE.Vector3(cameraLookAt.x, cameraLookAt.y, cameraLookAt.z)

        } else if(sceneLetter === 'L1') {

            cameraPosition = new THREE.Vector3(-2.76, 1.71, 6.04)
            cameraTarget = new THREE.Vector3(2.2, 1.0, 8.63)

        } else if(sceneLetter === 'L2' && !isMobile) {

            cameraPosition = new THREE.Vector3(-3.8, 2.4, 7.67)
            cameraTarget = new THREE.Vector3(3, 0.2, 12.76)

        }  else if(sceneLetter === 'L2' && isMobile) {

            cameraPosition = new THREE.Vector3(-4.0, 2.4, 7.87)
            cameraTarget = new THREE.Vector3(3.4, 1.1, 10.16)

        } else if(sceneLetter === 'topW') {
            cameraPosition = new THREE.Vector3(-9, 7.5, 1)
            cameraTarget = new THREE.Vector3(0.5, 1.0, 1.8)

        } else if(sceneLetter === 'topI') {
            cameraPosition = new THREE.Vector3(-6, 6.5, 4.5)
            cameraTarget = new THREE.Vector3(-0.5, -0.4, 4.6)

        } else if(sceneLetter === 'topL') {
            cameraPosition = new THREE.Vector3(-5.5, 5.8, 6.5)
            cameraTarget = new THREE.Vector3(0, -0.5, 6.75)

        } else if(sceneLetter === 'topL2') {
            cameraPosition = new THREE.Vector3(-5.2, 5.8, 8.5)
            cameraTarget = new THREE.Vector3(0.5, -0.5, 9.0)

        }


        smoothedCameraPosition.lerp(cameraPosition, 3 * delta)
        state.camera.position.copy(smoothedCameraPosition)

        smoothedCameraTarget.lerp(cameraTarget, 3 * delta)
        state.camera.lookAt(smoothedCameraTarget)
        camera.current.updateMatrixWorld()

    })

    function handlePopUp(elem) {
        setSceneLetter(elem)
    }

    return <>
        <color args={ [ 'lightblue' ] } attach="background"></color>

        <PerspectiveCamera makeDefault ref={camera}/>

        <PresentationControls
            ref={presControls}
            global
            enabled={controlsEnabled}
            cursor={false}
            polar={ [ -0.1, 0.1 ] }
            azimuth={ [ -0.2, 0.2 ] }
            config={ { mass: 2, tension: 100 } }
            snap={ { mass: 4, tension: 100 } }
        >
            <Suspense fallback={<Loader />}>
                <Will />
            </Suspense> 
            <IntroHTML sceneLetter={sceneLetter} setSceneLetter={setSceneLetter} isMobile={isMobile} />
            <ContactCard sceneLetter={sceneLetter} setSceneLetter={setSceneLetter} isMobile={isMobile} />
            <Water />
            <Planes />
            <AdditionalModels />
            <IntersectionChecks handlePopUp={handlePopUp}/>
        </PresentationControls>
        <Lights />
        <Sky />
    </>
}
import { useGLTF, useTexture, MeshTransmissionMaterial  } from "@react-three/drei"
import { MeshBasicMaterial } from "three"

export default function Will() {

    const will = useGLTF('./willbase.glb')

    const willrest = useGLTF('./willrest.glb')

    const glasses = useGLTF('./glasses.glb')

    const sign = useGLTF('./contact.glb')
    const signPainted = useTexture('./woodSign_sprayPaint.png')
    signPainted.flipY = false

    const tomatoes = useGLTF('./tomatoes.glb')
    const tomatoesPainted = useTexture('./tomatoes.png')
    tomatoesPainted.flipY = false

    willrest.scene.traverse((mesh) => {
        mesh.receiveShadow = true
        mesh.castShadow = true
    })

    const { nodes } = useGLTF('./willbase.glb')
    const baseWillBaked = useTexture('./willtex-Annotated-cleanup.png')
    baseWillBaked.flipY = false

    return <>
        <primitive object={ willrest.scene } castShadow receiveShadow />
        <mesh 
            geometry={ nodes.basesingletex.geometry } 
            position={ nodes.basesingletex.position }
            rotation={ nodes.basesingletex.rotation }
        >
            <meshBasicMaterial map={ baseWillBaked } />
        </mesh>

        <mesh 
            geometry={ glasses.nodes.glassesJoined.geometry } 
            position={ glasses.nodes.glassesJoined.position }
            rotation={ glasses.nodes.glassesJoined.rotation }
            scale={ glasses.nodes.glassesJoined.scale }
        >
            <MeshTransmissionMaterial color='#EBEBEE' thickness={1.0} transmission={1} />
        </mesh>

        <mesh 
            geometry={ sign.nodes.WoodSign.geometry } 
            position={ sign.nodes.WoodSign.position }
            rotation={ sign.nodes.WoodSign.rotation }
            scale={ sign.nodes.WoodSign.scale }
        >
            <meshBasicMaterial map={signPainted} />
        </mesh>

        <mesh 
            geometry={ tomatoes.nodes.plantsJoined.geometry } 
            position={ tomatoes.nodes.plantsJoined.position }
            rotation={ tomatoes.nodes.plantsJoined.rotation }
            scale={ tomatoes.nodes.plantsJoined.scale }
        >
            <meshBasicMaterial map={tomatoesPainted} />
        </mesh>

    </>

}
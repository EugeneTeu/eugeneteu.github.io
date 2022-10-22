import React, { useRef, useState } from 'react'
import { ThreeElements, useFrame } from '@react-three/fiber'

export function Cylinder3d(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef<ThreeElements['mesh'] | undefined>()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x = state.pointer.x * state.viewport.width
            ref.current.rotation.y = state.pointer.y * state.viewport.height
        }
    })

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh {...props} ref={ref}>
            <cylinderGeometry args={[1, 1, 1]} />

            <meshStandardMaterial
                wireframe={props.wireframe}
                color={hovered ? 'hotpink' : 'orange'}
            />
        </mesh>
    )
}

import { Header } from './components'
import { Canvas, useThree } from '@react-three/fiber'
import { Cylinder3d } from './components'
import { useScrollPercentage } from 'react-scroll-percentage'

type Props = {}

const Box = () => {
    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })
    return (
        <div
            ref={ref}
            className="max-w-5xl mx-5 sm:mx-10 md:mx-auto mt-6 h-96 "
        >
            <Canvas>
                <pointLight position={[10, 10, 10]} />
                <ambientLight />
                <Cylinder3d position={[0, 0, 0]} percentage={percentage} />
            </Canvas>
        </div>
    )
}

export const Experience = (props: Props) => {
    return (
        <>
            <Header />
            <Box />
            <Box />
            <Box />
        </>
    )
}

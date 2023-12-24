import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Lights from './Environment/Lights'
import Ground from './Objects/Ground'
import Burger from './Objects/Burger'


export default function Experience() {




    return <>
        
        <OrbitControls makeDefault />
        <Lights />

        <Burger scale={0.2} />


        <Ground />

    </>
}
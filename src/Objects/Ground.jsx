import React from 'react'

const Ground = () => {
    return (
        <>
            <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10} receiveShadow>
                <planeGeometry />
                <meshStandardMaterial color="greenyellow" />
            </mesh>
        </>
    )
}

export default Ground
import React from 'react'

const Lights = () => {
    return (
        <>
            <ambientLight  intensity={0.5} />
            <directionalLight  castShadow position={[1, 2, 3]} intensity={1.5} shadow-mapSize = {[1024,1024]}  shadow-normalBias = {0.04}/>
        </>
    )
}

export default Lights
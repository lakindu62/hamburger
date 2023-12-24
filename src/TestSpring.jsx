import React, { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'


const TestSpring = () => {

    const [springs, api] = useSpring(() => ({
        from: { x: 0 },
    }))

    const handleClick = () => {
        api.start({
            from: {
                x: 0,
            },
            to: {
                x: 100,
            },
        })
    }

    return (
        <div className='container' >

            <animated.div className='subContainer' style={{ ...springs }} onClick={handleClick} />
        </div>
    )
}

export default TestSpring
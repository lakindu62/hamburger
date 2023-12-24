

import React, { useCallback, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";

export default function Burger(props) {
    const { nodes, materials } = useGLTF("/hamburger.glb");

    const [active, setActive] = useState()

    const [topBunSpring, topBunApi] = useSpring(() => ({
        spring: active,
        position: [0, 0],
        scale: 1,
        config: key => {
            if (key === 'position') {
                return { mass: 4, friction: 20 }
            }
            else {
                return { mass: 1, friction: 10 }
            }
        }
    }))

    const [meatSpring, meatApi] = useSpring(() => ({
        spring: active,
        position: [0, 0],
        scale: 1,
        config: key => {
            if (key === 'position') {
                return { mass: 4, friction: 20 }
            }
            else {
                return { mass: 1, friction: 10 }
            }
        }
    }))


    const [cheeseSpring, cheeseApi] = useSpring(() => ({
        spring: active,
        position: [0, 0],
        scale: 1,
        config: key => {
            if (key === 'position') {
                return { mass: 4, friction: 20 }
            }
            else {
                return { mass: 1, friction: 10 }
            }
        }
    }))


    const [bottomBunSpring, bottomBunApi] = useSpring(() => ({
        spring: active,
        position: [0, 0],
        scale: 1,
        config: key => {
            if (key === 'position') {
                return { mass: 1, friction: 100 }
            }
            else {
                return { mass: 0, friction: 100 }
            }
        }
    }))



    const handleClick = useCallback((event) => {
        setActive((prev) => !prev);

        topBunApi.start({

            position: active ? [1, 1.5] : [0, 0],
            scale: active ? 1.1 : 1,
        });


        cheeseApi.start({

            position: active ? [1, 1] : [0, 0],
            scale: active ? 1.1 : 1,
        });


        meatApi.start({

            position: active ? [1, 0] : [0, 0],
            scale: active ? 1.1 : 1,
        });

        bottomBunApi.start({

            position: active ? [1, -1.5] : [0, 0],
            scale: active ? 1.1 : 1,
        });





        event.stopPropagation()
    }, [active, topBunApi, setActive]);




    // const [burgerOptions, setBurgerOptions] = useState({
    //     topBunPosY: 1.771,
    //     meatPosY: 2.817,
    //     cheesePosY: 3.04,
    //     bottomBunPos: 0
    // })

    // onClick={() => {
    //     setBurgerOptions((prevOptions) => ({
    //         topBunPosY: prevOptions.topBunPosY === 4 ? 1.771 : 4,
    //         meatPosY: prevOptions.meatPosY === 4 ? 2.817 : 4,
    //         cheesePosY: prevOptions.cheesePosY === 2.5 ? 3.04 : 2.5,
    //         bottomBunPos: prevOptions.bottomBunPos === -1 ? 0 : -1
    //     }));

    // }}


    return (





        <group 
        scale={0.2} 
        onClick={handleClick} 
        onPointerEnter={()=>document.body.style.cursor = 'pointer'}
        onPointerLeave={()=>document.body.style.cursor = 'default'}
        
        >

            {/* //TOP BUN */}
            <animated.mesh
                scale={topBunSpring.scale}
                castShadow
                receiveShadow
                geometry={nodes.topBun.geometry}
                material={materials.BunMaterial}
                position={topBunSpring.position.to((x, y) => [0, 1.771 + y, 0])}
            />
            {/* //MEAT */}
            <animated.mesh
            scale={topBunSpring.scale}
                castShadow
                receiveShadow
                geometry={nodes.meat.geometry}
                material={materials.SteakMaterial}
                position={meatSpring.position.to((x, y) => [0, 2.8 + y, 0])}
            />
            {/* //CHEESE */}
            <animated.mesh
            scale={topBunSpring.scale}
                castShadow
                receiveShadow
                geometry={nodes.cheese.geometry}
                material={materials.CheeseMaterial}
                position={cheeseSpring.position.to((x, y) => [0, 3 + y, 0])}
            />
            {/* //BOTTOM BUN */}
            <animated.mesh
            scale={topBunSpring.scale}
                castShadow
                receiveShadow
                geometry={nodes.bottomBun.geometry}
                material={materials.BunMaterial}
                position={bottomBunSpring.position.to((x, y) => [0, y, 0])}
            />
        </group>





    );
}

useGLTF.preload("/hamburger.glb");





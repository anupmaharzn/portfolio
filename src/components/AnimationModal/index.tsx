/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
import * as THREE from "three";
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";
import MacModal from "./Mac";
import "./styles.css";

const index = () => {
  // This flag controls open state, alternates between true & false
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });
  return (
    <web.main
      style={{
        background: "transparent",
      }}
      className="animation-container"
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <three.pointLight
          position={[10, 10, 10]}
          intensity={1.5}
          color={props.open.to([0, 1], ["#f0f0f0", "#d25578"])}
        />
        <Suspense fallback={null}>
          <group
            rotation={[0, Math.PI, 0]}
            onClick={(e) => (e.stopPropagation(), setOpen(!open))}
          >
            <MacModal
              open={open}
              hinge={props.open.to([0, 1], [-0.425, 1.575])}
            />
          </group>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          position={[0, -4.5, 0]}
          opacity={0.4}
          scale={20}
          blur={1.75}
          far={4.5}
        />
      </Canvas>
    </web.main>
  );
};

export default index;

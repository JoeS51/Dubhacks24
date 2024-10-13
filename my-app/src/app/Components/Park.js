"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Park from "../../../public/Park";

function CameraSetup() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const resizeHandler = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resizeHandler);
    resizeHandler(); // Call initially to set proper size

    return () => window.removeEventListener("resize", resizeHandler);
  }, [camera, gl]);

  return null;
}

export default function JayPark() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundColor: "#90D5FF",
        margin: 0,
        padding: 0,
        width: "100%",
        height: "100vh", // Ensures it fills the viewport height
        overflow: "hidden", // Prevents unwanted scrollbars
      }}
    >
      <div
        className="flex items-center justify-center h-full"
        style={{ zIndex: 1, width: "100%", height: "100%" }}
      >
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{
            position: [-20, 20, 20],
            fov: 45,
          }}
        >
          <CameraSetup />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={true} />
          <Suspense fallback={null}>
            <Park />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}


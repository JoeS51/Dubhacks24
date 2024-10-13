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
      style={{ backgroundColor: "#90D5FF" }} // Warm yellow background FFD966
    >
      {/* Title with high z-index to stay on top */}
      <h1
        className="absolute top-10 w-full text-center text-6xl font-bold"
        style={{
          fontFamily: "'Montserrat', sans-serif", // Custom Font
          fontSize: "8rem", // Bigger font size
          color: "#FFFFFF",
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.3)", // More pronounced shadow
          zIndex: 10, // Keep on top
          pointerEvents: "none", // Prevent blocking interactions
        }}
      >
        SpotLite.
      </h1>

      {/* 3D Model Canvas */}
      <div
        className="flex items-center justify-center h-full"
        style={{ zIndex: 1 }} // Lower z-index for canvas
      >
        <Canvas
          style={{ width: "100%", height: "100%" }}
          camera={{
            position: [-20, 20, 20], // Adjust camera to fit the model
            fov: 45, // Natural perspective
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

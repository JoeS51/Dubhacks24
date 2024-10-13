"use client";

import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Park from "../../../public/Park";
import TopBar from "./TopBar";
import styles from '../Styles/Layout.module.css';

function CameraSetup() {
  // ... (CameraSetup function remains unchanged)
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
        height: "100vh",
        overflow: "hidden",
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
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '15vw',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            animation: 'fadeInFloat 3s ease-out forwards',
          }}
        >
          SpotLite
        </h1>
      </div>
      <style jsx global>{`
        @keyframes fadeInFloat {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        h1 {
          animation: fadeInFloat 3s ease-out forwards, float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
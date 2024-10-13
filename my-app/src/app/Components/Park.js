"use client";

import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Park from "../../../public/Park";

function CameraSetup() {
  // ... (CameraSetup function remains unchanged)
}

const reviews = [
  "This site is incredible! The 3D models are so lifelike! - Alex",
  "I love how immersive the experience is. It's like I'm really there! - Mia",
  "Easy to navigate and visually stunning! - John",
  "Fantastic user interface, can't wait to explore more. - Claudia",
  "The future of web design is here, and I'm all in! - Emma",
];

export default function JayPark() {
  const [currentReview, setCurrentReview] = useState(0);
  const [position, setPosition] = useState({ top: "30%", left: "30%" });
  const [rotation, setRotation] = useState(0);
  const reviewRef = useRef();

  // Update review, position, and rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
      setRandomPositionAndRotation();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const setRandomPositionAndRotation = () => {
    if (!reviewRef.current) return;

    // Get viewport and review element dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const reviewWidth = reviewRef.current.offsetWidth;
    const reviewHeight = reviewRef.current.offsetHeight;

    // Generate random position while keeping the element inside the viewport
    const top = Math.random() * (viewportHeight - reviewHeight);
    const left = Math.random() * (viewportWidth - reviewWidth);

    // Generate a random rotation between -15 and 15 degrees
    const randomRotation = Math.random() * 30 - 15;

    setPosition({ top: `${top}px`, left: `${left}px` });
    setRotation(randomRotation);
  };

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

      {/* SpotLite Title */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "15vw",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            animation: "fadeInFloat 3s ease-out forwards",
          }}
        >
          SpotLite
        </h1>
      </div>

      {/* Randomly Positioned and Rotated Reviews */}
      <div
        ref={reviewRef}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          color: "white",
          fontSize: "1.5rem",
          fontFamily: "'Montserrat', sans-serif",
          textAlign: "center",
          whiteSpace: "nowrap",
          padding: "10px 20px",
          borderRadius: "5px",
          borderBottom: "2px solid white", // Underline effect
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.5)",
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Subtle background to improve readability
          animation: "fadeInOut 4s ease-in-out infinite",
        }}
      >
        {reviews[currentReview]}
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
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        h1 {
          animation: fadeInFloat 3s ease-out forwards, float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

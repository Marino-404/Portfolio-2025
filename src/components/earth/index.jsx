"use client";

import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useRef, useState, useEffect } from "react";
import Projects from "./projects";
import styles from "./style.module.scss";

// Componente hijo que rota suavemente
function RotatingEarth({ color, normal, aoMap, scroll }) {
  const meshRef = useRef(null);
  const currentRotation = useRef(0);
  const speed = 0.05;
  const initialRotation = Math.PI / 0.9; // ajusta esto para cambiar la posición de inicio

  useFrame(() => {
    if (meshRef.current) {
      const targetRotation = initialRotation + (scroll * Math.PI) / 12;
      currentRotation.current +=
        (targetRotation - currentRotation.current) * speed;
      meshRef.current.rotation.y = currentRotation.current;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
    </mesh>
  );
}
// Componente principal
export default function Earth() {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    "/earth/color.jpg",
    "/earth/normal.jpg",
    "/earth/occlusion.jpg",
  ]);

  const [scroll, setScroll] = useState(0);

  // capturamos scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setScroll(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={styles.main}>
      <Canvas style={{ height: "60vw", position: "absolute" }}>
        <ambientLight intensity={0.1} />
        <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
        <RotatingEarth
          color={color}
          normal={normal}
          aoMap={aoMap}
          scroll={scroll}
        />
      </Canvas>
      <Projects />
    </main>
  );
}

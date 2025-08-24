import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

import CanvasLoader from "@/components/canvas/Loader";

// Extend useGLTF to infer the type of the loaded GLTF model
type GLTFResult = ReturnType<typeof useGLTF>;

// Props type for Computers component
interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF("./fitness_equipment/scene.gltf") as GLTFResult;

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 1}
        position={isMobile ? [0, 0, 0] : [0, -0.5, 0]}
        rotation={[0, -1.5, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative", // or fixed/relative
        top: 250,
        left: 0,
      }}
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 5, 5], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          autoRotate
          autoRotateSpeed={2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;

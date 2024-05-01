import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";
// import { SphereGeometry } from "three";
function Computer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight color={0xffffff} intensity={0.2} position={[-0.5, 2, 4]} />
      {/* <spotLight
        intensity={23}
        angle={45}
        color={0xff0000}
        position={[2, 2, 5]}
      /> */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.75}
        position={isMobile ? [-1, -5, -0.5] : [-1, -3.5, -0.5]}
        rotation={[0, -Math.PI / 16, -Math.PI / 16]}
      />
    </mesh>
  );
}
// function Sphare() {
//   return (
//     <mesh
//       visible
//       userData={{ hello: "world" }}
//       position={[1, 1, 1]}
//       rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 2]}
//     >
//       <sphereGeometry args={[1, 16, 16]} />
//       <meshStandardMaterial color="hotpink" transparent />
//       <spotLight color={0xff000f} position={[2, 1, 1]} />
//       <pointLight color={0x00ff00} intensity={1} position={[0, 1, 1]} />
//     </mesh>
//   );
// }
function ComputerCanvas() {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 1], fov: 35, aspect: 1.2 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        ></OrbitControls>
        <Computer />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}
export default ComputerCanvas;

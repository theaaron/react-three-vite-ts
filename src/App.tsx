import { Canvas, extend, useFrame } from "@react-three/fiber";
import "./App.css";
import { OrbitControls, shaderMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { Color, ShaderMaterial } from "three";
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

function App() {
  // function getRandomGrayscale(): string {
  //   const value = Math.floor(Math.random() * 256);
  //   const hex = value.toString(16).padStart(2, "0");
  //   return `#${hex}${hex}${hex}`;
  // }
  function getRandomColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8) + 8];
    }
    return color;
  }
  const randomCol = getRandomColor();

  return (
    <Canvas id="canv" style={{ backgroundColor: randomCol }}>
      <ambientLight intensity={0.5} />
      <OrbitControls />
      <directionalLight position={[0, 0, 5]} />
      <Suspense>
        <Blobby />
      </Suspense>
    </Canvas>
  );
}

const WaveShaderMaterial = shaderMaterial(
  { uColor: new Color(0.0, 0.0, 0.0), uTime: 0 },
  vertexShader,
  fragmentShader
);

extend({ WaveShaderMaterial });

interface WaveShaderMaterialImpl extends ShaderMaterial {
  uColor: Color;
  uTime: number;
}

const Blobby: React.FC = () => {
  function getRandomColor(): string {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 8) + 8];
    }
    return color;
  }

  const newColor = getRandomColor();

  const ref = useRef<WaveShaderMaterialImpl>(null!);
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <>
      <mesh>
        <sphereGeometry args={[2, 100, 100]} />
        <waveShaderMaterial uColor={newColor} ref={ref} />
      </mesh>
    </>
  );
};

export default App;

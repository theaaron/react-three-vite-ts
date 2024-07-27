import { ShaderMaterial } from "three";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class WaveShaderMaterial extends ShaderMaterial {
  uTime: number;
  uColor: THREE.Color;
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    waveShaderMaterial: JSX.IntrinsicElements["shaderMaterial"] & {
      uColor: Color;
      uTime: number;
    };
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      waveShaderMaterial: ReactThreeFiber.Object3DNode<
        WaveShaderMaterial,
        typeof WaveShaderMaterial
      >;
    }
  }
}

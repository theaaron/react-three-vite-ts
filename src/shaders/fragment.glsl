precision mediump float;
uniform vec3 uColor;
uniform float uTime;
varying vec2 vUv;

void main() {
  gl_FragColor = vec4(sin(vUv.x + uTime*1.3) * uColor.r, cos(vUv.y + uTime*3.0) * uColor.g, uColor.b, 1.0);
}

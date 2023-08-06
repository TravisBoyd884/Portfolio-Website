const fragmentShader = `
  uniform float u_time;

  void main() {
    vec3 color = vec3(.5 , 0.5, 1.0);
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default fragmentShader;

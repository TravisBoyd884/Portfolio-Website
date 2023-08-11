const fragmentShader = `
  uniform float u_time;
  uniform float uMousePosX;
  uniform float uMousePosY;
  /* uniform float u_intensity; */

  varying vec2 vUv;

  void main() {
    /* vec2 st = gl_FragCoord.xy/u_resolution; */
    /* gl_FragColor = vec4(st.x,st.y,0.0,1.0); */


    /* gl_FragColor = vec4(vUv.x ,vUv.y ,0.0 ,1.0); */

    vec3 color = vec3(abs(sin(u_time * .7)) , .3, abs(sin(u_time * .6)));
    gl_FragColor = vec4(color, 1.0);
  }
`;

export default fragmentShader;

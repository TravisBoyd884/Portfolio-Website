"use client";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

import { Canvas, useFrame } from "@react-three/fiber";
import noise, { perlin3 } from "./noise";

interface MyComponentProps {
  position: any;
  rotation: any;
  grid: {
    width: number;
    height: number;
    sep: number;
  };
  colorOfXYZT: any;
  zOfXYZT: any;
  anim: {
    init: any;
    update: any;
  };
}

function MeshAnim(props: MyComponentProps) {
  let t = props.anim.init;

  //vertex buffer
  let { positions, colors, normals } = useMemo(() => {
    let positions = [],
      normals = [],
      colors = [];

    for (let yi = 0; yi < props.grid.height; yi++) {
      for (let xi = 0; xi < props.grid.width; xi++) {
        //For each vertex center its corresponding position with respect to the origin then multiply by the seperation
        let x = props.grid.sep * (xi - (props.grid.width - 1) / 2);
        let y = props.grid.sep * (yi - (props.grid.width - 1) / 2);
        let z = props.zOfXYZT(x, y, t);
        positions.push(x, y, z);

        let color = props.colorOfXYZT(x, y, z, t);
        colors.push(color.r, color.g, color.b);
        /* colors.push(255, 255, 255, 1); */
        normals.push(0, 0, 1);
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors),
      normals: new Float32Array(normals),
    };
  }, [
    props.grid.width,
    props.grid.height,
    props.grid.sep,
    props.colorOfXYZT,
    props.zOfXYZT,
    t,
  ]);

  //index buffer
  //loop over all the squares in the grid triangulating each square
  let indices = useMemo(() => {
    let indices = [];
    //contains the bottom left vertex of each square
    let i = 0;
    for (let yi = 0; yi < props.grid.height - 1; yi++) {
      for (let xi = 0; xi < props.grid.width - 1; xi++) {
        indices.push(i, i + 1, i + props.grid.width + 1);
        indices.push(i + props.grid.width + 1, i + props.grid.width, i);
        i++;
      }
      i++;
    }
    return new Uint16Array(indices);
  }, [props.grid.width, props.grid.height]);

  //animation
  let posRef = useRef(),
    colorRef = useRef();

  useFrame(() => {
    t = props.anim.update(t);

    const positions = posRef.current!.array,
      colors = colorRef.current!.array;

    let i = 0;
    for (let yi = 0; yi < props.grid.height; yi++) {
      for (let xi = 0; xi < props.grid.width; xi++) {
        positions[i + 2] = props.zOfXYZT(positions[i], positions[i + 1], t);
        let c = props.colorOfXYZT(
          positions[i],
          positions[i + 1],
          positions[i + 2],
          t
        );
        colors[i] = c.r;
        colors[i + 1] = c.g;
        colors[i + 2] = c.b;
        i += 3;
      }
    }

    posRef.current.needsUpdate = true;
    colorRef.current.needsUpdate = true;
  });

  return (
    <mesh position={props.position} rotation={props.rotation}>
      <bufferGeometry>
        <bufferAttribute
          ref={posRef}
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          ref={colorRef}
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-normals"
          count={normals.length / 3}
          array={normals}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          count={indices.length}
          array={indices}
        />
      </bufferGeometry>
      <meshBasicMaterial
        vertexColors={true}
        side={THREE.DoubleSide}
        wireframe={true}
      />
    </mesh>
  );
}

export default function about() {
  const seed = Math.floor(Math.random() * Math.pow(2, 16));
  noise.seed(seed);

  const sampleNoise = (x, y, z) => {
    let scale = 1 / 8;
    let octaves = 20;
    let persistence = 0.6;
    let lacunarity = 2;

    let amp = 1;
    let freq = 1;

    let value = 0;
    for (let i = 0; i < octaves; i++) {
      value += amp * perlin3(x * freq * scale, y * freq * scale, z);
      amp *= persistence;
      freq *= lacunarity;
    }
    return value;
  };

  const zOfXYZT = (x, y, t) => {
    return sampleNoise(x, y, t);
  };

  const colorOfXYZT = (x, y, z, t) => {
    let rVal = 0.3;
    /* if (z > 0) rVal = 1; */
    /* else rVal = 0; */
    return {
      r: rVal * z,
      g: rVal,
      b: rVal * 255,
    };
  };

  return (
    <div className="w-screen h-screen bg-black">
      <Canvas>
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <ambientLight /> */}
        <mesh>
          <boxGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>
        <OrbitControls />
        <MeshAnim
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2.0, 0, 0]}
          grid={{
            width: 100,
            height: 100,
            sep: 0.2,
          }}
          zOfXYZT={zOfXYZT}
          colorOfXYZT={colorOfXYZT}
          anim={{
            init: 0,
            update: (t: any) => t + 0.002,
          }}
        />
      </Canvas>
    </div>
  );
}

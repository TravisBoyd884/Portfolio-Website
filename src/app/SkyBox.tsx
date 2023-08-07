"use client";
import { useThree } from "@react-three/fiber";
import { Black_Ops_One } from "next/font/google";
import { CubeTextureLoader } from "three";
import * as THREE from "three";

export default function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();

  const texture = loader.load([
    "/px.jpg",
    "/nx.jpg",
    "/py.jpg",
    "/ny.jpg",
    "/pz.jpg",
    "/nz.jpg",
  ]);

  scene.background = texture;
  return null;
}

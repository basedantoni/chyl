import * as THREE from "three";

import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { useVideoContext } from "@/context/VideoProvider";
import { useRef } from "react";

export default function Minimap() {
  const ref = useRef();
  const scroll = useScroll();
  const { videos } = useVideoContext();
  const { height } = useThree((state) => state.viewport);

  const damp = THREE.MathUtils.damp;
  const material = new THREE.LineBasicMaterial({ color: "white" });
  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -0.5, 0),
    new THREE.Vector3(0, 0.5, 0),
  ]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.children.forEach((child, index) => {
        // Give me a value between 0 and 1
        //   starting at the position of my item
        //   ranging across 4 / total length
        //   make it a sine, so the value goes from 0 to 1 to 0.
        const y = scroll.curve(
          index / videos.length - 1.5 / videos.length,
          4 / videos.length,
        );
        child.scale.y = damp(child.scale.y, 0.1 + y / 6, 8, 8, delta);
      });
    }
  });

  return (
    <group ref={ref}>
      {videos.map((_, i) => (
        <line
          key={i}
          geometry={geometry}
          material={material}
          position={[i * 0.06 - videos.length * 0.03, -height / 2.3 + 0.6, 0]}
        />
      ))}
    </group>
  );
}

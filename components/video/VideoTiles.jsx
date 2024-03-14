"use client";

import * as THREE from "three";
import { useRef, useState, useEffect, Suspense, useMemo } from "react";
import { Canvas, Color, Vector3, useFrame, useThree } from "@react-three/fiber";
import {
  Image,
  ScrollControls,
  Scroll,
  RandomizedLight,
  useScroll,
  useVideoTexture,
} from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { useControls } from "leva";

const damp = THREE.MathUtils.damp;
const material = new THREE.LineBasicMaterial({ color: "white" });
const geometry = new THREE.BufferGeometry().setFromPoints([
  new THREE.Vector3(0, -0.5, 0),
  new THREE.Vector3(0, 0.5, 0),
]);

const state = proxy({
  clicked: null,
  videos: [],
  pause: false,
  toggleAudio: true,
});

export default function VideoTiles({ videos }) {
  const calcHeight = "calc(100vh - 128px)";

  useEffect(() => {
    state.videos = videos;
  }, [videos]);

  if (!videos.length) {
    return "Loading...";
  }

  return (
    <div className="w-screen overflow-hidden" style={{ height: calcHeight }}>
      <Canvas className="absolute w-screen">
        <color attach="background" args={["#171512"]} />
        <ambientLight intensity={10} />
        <Items />
      </Canvas>
    </div>
  );
}

function Minimap() {
  const ref = useRef();
  const scroll = useScroll();
  const { videos } = useSnapshot(state);
  const { height } = useThree((state) => state.viewport);
  useFrame((state, delta) => {
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

function Item({
  index,
  position,
  scale,
  c = new THREE.Color(),
  url,
  assets,
  ...props
}) {
  const ref = useRef();
  const scroll = useScroll();
  const { clicked, videos, pause } = useSnapshot(state);
  const [hovered, hover] = useState(false);

  const click = () => {
    clicked === index ? texture.image.pause() : texture.image.play();
    state.clicked = index === clicked ? null : index;
  };
  const videoClick = () => {
    if (clicked === index) texture.image.pause();
    state.clicked = null;
  };

  const over = () => hover(true);
  const out = () => hover(false);

  useFrame((state, delta) => {
    const y = scroll.curve(
      index / videos.length - 1.5 / videos.length,
      4 / videos.length,
    );

    if (ref) {
      if (!ref.current.material.scale) {
        ref.current.scale[1] = ref.current.scale.y = damp(
          ref.current.scale.y,
          clicked === index ? 4.5 : 3 + y,
          8,
          delta,
        );
        ref.current.scale[0] = ref.current.scale.x = damp(
          ref.current.scale.x,
          clicked === index ? 4.7 : scale[0],
          6,
          delta,
        );
      } else {
        ref.current.material.scale[1] = ref.current.scale.y = damp(
          ref.current.scale.y,
          clicked === index ? 4.5 : 3 + y,
          8,
          delta,
        );
        ref.current.material.scale[0] = ref.current.scale.x = damp(
          ref.current.scale.x,
          clicked === index ? 4.7 : scale[0],
          6,
          delta,
        );
        if (clicked !== null && index < clicked)
          ref.current.position.x = damp(
            ref.current.position.x,
            position[0] - 2,
            6,
            delta,
          );
        if (clicked !== null && index > clicked)
          ref.current.position.x = damp(
            ref.current.position.x,
            position[0] + 2,
            6,
            delta,
          );
        if (clicked === null || clicked === index)
          ref.current.position.x = damp(
            ref.current.position.x,
            position[0],
            6,
            delta,
          );
        ref.current.material.grayscale = damp(
          ref.current.material.grayscale,
          hovered || clicked === index ? 0 : Math.max(0, 1 - y),
          3,
          delta,
        );
        ref.current.material.color.lerp(
          c.set(hovered || clicked === index ? "white" : "#aaa"),
          hovered ? 0.3 : 0.1,
        );
      }
    }
  });

  const texture = useVideoTexture(assets[0].url);

  if (clicked === index) {
    const x = position[0];
    const y = position[1];

    return (
      <mesh
        ref={ref}
        position={[x, y, -0.1]}
        scale={scale}
        onClick={videoClick}
      >
        <planeGeometry />
        <Suspense
          fallback={<meshStandardMaterial side={THREE.DoubleSide} wireframe />}
        >
          <meshStandardMaterial
            side={THREE.DoubleSide}
            map={texture}
            toneMapped={false}
            transparent
            opacity={0.9}
          />
        </Suspense>
      </mesh>
    );
  }

  return (
    <Image
      ref={ref}
      url={url}
      position={position}
      scale={scale}
      onClick={click}
      onPointerOver={over}
      onPointerOut={out}
      alt="image"
    />
  );
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { videos } = useSnapshot(state);
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;

  return (
    <ScrollControls
      horizontal
      damping={0.1}
      pages={(width - xW + videos.length * xW) / width}
    >
      <Minimap />
      <Scroll>
        {videos.map((video, i) => (
          <Item
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4, 1]}
            url={video.thumbnail.url}
            assets={video.assetCollection.items}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

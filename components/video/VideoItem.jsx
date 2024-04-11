import * as THREE from "three";
import { useRef, useState, Suspense } from "react";
import { Image, useScroll, useVideoTexture } from "@react-three/drei";

import { useFrame } from "@react-three/fiber";
import { useVideoContext } from "@/context/VideoProvider";
import { useMediaQuery } from "usehooks-ts";

export default function VideoItem({
  index,
  position,
  scale,
  c = new THREE.Color(),
  url,
  assets,
  ...props
}) {
  const damp = THREE.MathUtils.damp;
  const ref = useRef();
  const scroll = useScroll();
  const { clickedVideoIdx, handleVideoClicked, videos } = useVideoContext();
  const [hovered, hover] = useState(false);

  const click = () => {
    clickedVideoIdx === index ? texture.image.pause() : texture.image.play();
    handleVideoClicked(index === clickedVideoIdx ? null : index);
  };
  const videoClick = () => {
    if (clickedVideoIdx === index) texture.image.pause();
    handleVideoClicked(null);
  };

  const over = () => hover(true);
  const out = () => hover(false);

  useFrame((state, delta) => {
    const y = scroll.curve(
      index / videos.length - 1.5 / videos.length,
      4 / videos.length
    );

    if (ref) {
      if (!ref.current.material.scale) {
        ref.current.scale[1] = ref.current.scale.y = damp(
          ref.current.scale.y,
          clickedVideoIdx === index ? 4.5 : 3 + y,
          8,
          delta
        );
        ref.current.scale[0] = ref.current.scale.x = damp(
          ref.current.scale.x,
          clickedVideoIdx === index ? 4.7 : scale[0],
          6,
          delta
        );
      } else {
        ref.current.material.scale[1] = ref.current.scale.y = damp(
          ref.current.scale.y,
          clickedVideoIdx === index ? 4.5 : 3 + y,
          8,
          delta
        );
        ref.current.material.scale[0] = ref.current.scale.x = damp(
          ref.current.scale.x,
          clickedVideoIdx === index ? 4.7 : scale[0],
          6,
          delta
        );
        if (clickedVideoIdx !== null && index < clickedVideoIdx)
          ref.current.position.x = damp(
            ref.current.position.x,
            position[0] - 2,
            6,
            delta
          );
        if (clickedVideoIdx !== null && index > clickedVideoIdx)
          ref.current.position.x = damp(
            ref.current.position.x,
            position[0] + 2,
            6,
            delta
          );
        if (clickedVideoIdx === null || clickedVideoIdx === index)
          ref.current.position.x = damp(
            ref.current.position.x,
            position[0],
            6,
            delta
          );
        ref.current.material.grayscale = damp(
          ref.current.material.grayscale,
          hovered || clickedVideoIdx === index ? 0 : Math.max(0, 1 - y),
          3,
          delta
        );
        ref.current.material.color.lerp(
          c.set(hovered || clickedVideoIdx === index ? "white" : "#aaa"),
          hovered ? 0.3 : 0.1
        );
      }
    }
  });

  const matches = useMediaQuery("(min-width: 768px)");

  const texture = useVideoTexture(matches ? assets[0].url : assets[1].url, {
    preload: true,
  });

  if (clickedVideoIdx === index) {
    const x = position[0];
    const y = position[1];

    console.log(scale);
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

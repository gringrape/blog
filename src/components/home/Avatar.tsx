/* eslint-disable react/no-unknown-property */
import {
  Canvas, useFrame, useLoader,
} from '@react-three/fiber';

import { Suspense, useRef } from 'react';

import styled from 'styled-components';

import {
  TextureLoader,
} from 'three';

import { OrbitControls } from '@react-three/drei';

import SpecularMap from '../../textures/earth_specular_map.jpg';
import DayMap from '../../textures/earth_daymap.jpg';
import NormalMap from '../../textures/earth_normal_map.jpg';
import CloudMap from '../../textures/earth_clouds.jpg';

const Container = styled.div``;

function Earth() {
  const [
    specularMap, colorMap, normalMap, cloudMap,
  ] = useLoader(TextureLoader, [
    SpecularMap,
    DayMap,
    NormalMap,
    CloudMap,
  ]);

  const earthRef = useRef<any>();
  const cloudRef = useRef<any>();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 4;
    cloudRef.current.rotation.y = elapsedTime / 4;
  });

  return (
    <>
      <ambientLight intensity={1} />
      <mesh ref={cloudRef}>
        <sphereGeometry args={[2.6, 30, 30]} />
        <meshPhongMaterial map={cloudMap} opacity={0.2} transparent />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2.6, 30, 30]} />
        <meshPhongMaterial map={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} />
        <OrbitControls enableRotate enableZoom={false} />
      </mesh>
    </>
  );
}

export default function Avatar() {
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </Container>
  );
}

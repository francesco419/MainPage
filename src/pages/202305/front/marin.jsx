/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 star/scene.gltf --transform 
Files: star/scene.gltf [467.13KB] > C:\Users\franc\Desktop\Works\ReactAppTest\reactapp2\scene-transformed.glb [1.71MB] (-267%)
Author: Elisey (https://sketchfab.com/dwelfster)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/starcraft-marine-c31fbfd9e94c4366bb335a408dbe6990
Title: Starcraft marine
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export function Marine(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    `${process.env.PUBLIC_URL}/marin.glb`
  );
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, []);

  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name='Object_91'
          geometry={nodes.Object_91.geometry}
          material={materials.Rifle}
          skeleton={nodes.Object_91.skeleton}
        />
        <skinnedMesh
          name='Object_93'
          geometry={nodes.Object_93.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_93.skeleton}
        />
        <skinnedMesh
          name='Object_95'
          geometry={nodes.Object_95.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_95.skeleton}
        />
        <skinnedMesh
          name='Object_97'
          geometry={nodes.Object_97.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_97.skeleton}
        />
        <skinnedMesh
          name='Object_99'
          geometry={nodes.Object_99.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_99.skeleton}
        />
        <skinnedMesh
          name='Object_101'
          geometry={nodes.Object_101.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_101.skeleton}
        />
        <skinnedMesh
          name='Object_103'
          geometry={nodes.Object_103.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_103.skeleton}
        />
        <skinnedMesh
          name='Object_105'
          geometry={nodes.Object_105.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_105.skeleton}
        />
        <skinnedMesh
          name='Object_107'
          geometry={nodes.Object_107.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_107.skeleton}
        />
        <skinnedMesh
          name='Object_109'
          geometry={nodes.Object_109.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_109.skeleton}
        />
        <skinnedMesh
          name='Object_111'
          geometry={nodes.Object_111.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_111.skeleton}
        />
        <skinnedMesh
          name='Object_113'
          geometry={nodes.Object_113.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_113.skeleton}
        />
        <skinnedMesh
          name='Object_115'
          geometry={nodes.Object_115.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_115.skeleton}
        />
        <skinnedMesh
          name='Object_117'
          geometry={nodes.Object_117.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_117.skeleton}
        />
        <skinnedMesh
          name='Object_119'
          geometry={nodes.Object_119.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_119.skeleton}
        />
        <skinnedMesh
          name='Object_121'
          geometry={nodes.Object_121.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_121.skeleton}
        />
        <skinnedMesh
          name='Object_123'
          geometry={nodes.Object_123.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_123.skeleton}
        />
        <skinnedMesh
          name='Object_125'
          geometry={nodes.Object_125.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_125.skeleton}
        />
        <skinnedMesh
          name='Object_127'
          geometry={nodes.Object_127.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_127.skeleton}
        />
        <skinnedMesh
          name='Object_129'
          geometry={nodes.Object_129.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_129.skeleton}
        />
        <skinnedMesh
          name='Object_131'
          geometry={nodes.Object_131.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_131.skeleton}
        />
        <skinnedMesh
          name='Object_133'
          geometry={nodes.Object_133.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_133.skeleton}
        />
        <skinnedMesh
          name='Object_135'
          geometry={nodes.Object_135.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_135.skeleton}
        />
        <skinnedMesh
          name='Object_137'
          geometry={nodes.Object_137.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_137.skeleton}
        />
        <skinnedMesh
          name='Object_139'
          geometry={nodes.Object_139.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_139.skeleton}
        />
        <skinnedMesh
          name='Object_141'
          geometry={nodes.Object_141.geometry}
          material={materials['Marine.002']}
          skeleton={nodes.Object_141.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload(`${process.env.PUBLIC_URL}//marin.glb`);

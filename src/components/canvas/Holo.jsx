/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Holo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./scene.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions.Main.play();
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="primary_ion_driveglb">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="f10517d4966d42c99c9bc47c460a132ffbx"
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="circle" rotation={[0.064, 0, 0]}>
                    <mesh
                      name="circle_constant1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.circle_constant1_0.geometry}
                      material={materials.constant1}
                    />
                    <mesh
                      name="circle_HoloFillDark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.circle_HoloFillDark_0.geometry}
                      material={materials.HoloFillDark}
                    />
                  </group>
                  <group name="geo1" rotation={[0, -0.002, 0]}>
                    <mesh
                      name="geo1_constant1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.geo1_constant1_0.geometry}
                      material={materials.constant1}
                    />
                    <mesh
                      name="geo1_HoloFillDark_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.geo1_HoloFillDark_0.geometry}
                      material={materials.HoloFillDark}
                    />
                  </group>
                  <group
                    name="cam1"
                    position={[0, 0, 8.8]}
                    rotation={[0, Math.PI / 2, 0]}
                  >
                    <group name="Object_11" />
                  </group>
                  <group name="circle1" rotation={[0.002, 0, 0]}>
                    <mesh
                      name="circle1_constant2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.circle1_constant2_0.geometry}
                      material={materials.constant2}
                    />
                  </group>
                  <group name="circle2" rotation={[-0.14, 0, 0]}>
                    <mesh
                      name="circle2_constant2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.circle2_constant2_0.geometry}
                      material={materials.constant2}
                    />
                  </group>
                  <group
                    name="cam2"
                    position={[-4.13, 4.452, 5.82]}
                    rotation={[-0.022, 0.961, -0.54]}
                  >
                    <group name="Object_17" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}


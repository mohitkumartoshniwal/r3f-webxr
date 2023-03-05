import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCharacterAnimations } from "../../contexts/CharacterAnimations";

export default function YoungKorrigan(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/young-korrigan.gltf"
  );
  const { actions, names } = useAnimations(animations, group);

  const { setAnimations, animationIndex, Color } = useCharacterAnimations();

  useEffect(() => {
    setAnimations(names);
  }, []);

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play();

    return () => {
      actions[names[animationIndex]]?.fadeOut(0.5);
    };
  }, [animationIndex]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[0, 0.03, 0]} scale={0.15}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Jeune.geometry}
          material={materials["color_main.003"]}
          skeleton={nodes.Jeune.skeleton}
          material-color={Color}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/young-korrigan.gltf");

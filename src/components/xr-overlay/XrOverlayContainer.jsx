import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { Leva } from "leva";
import { useCallback, useState } from "react";
import { CharacterAnimationsProvider } from "../../contexts/CharacterAnimations";
import Interface from "./Interface";
import XrOverlay from "./XrOverlay";

const XrOverlayContainer = () => {
  const [overlayContent, setOverlayContent] = useState(null);

  let interfaceRef = useCallback((node) => {
    if (node !== null) {
      setOverlayContent(node);
    }
  });

  return (
    <>
      <CharacterAnimationsProvider>
        <ARButton
          className="ar-button"
          sessionInit={{
            requiredFeatures: ["hit-test"],
            optionalFeatures: ["dom-overlay"],
            domOverlay: { root: overlayContent },
          }}
        />
        <Canvas>
          <XR>
            <XrOverlay />
          </XR>
        </Canvas>
        <Interface ref={interfaceRef} />
        <Leva hidden={true} />
      </CharacterAnimationsProvider>
    </>
  );
};

export default XrOverlayContainer;

import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { useCallback, useState } from "react";
import { CharacterAnimationsProvider } from "../../contexts/CharacterAnimations";
import Interface from "./Interface";
import XrGallery from "./XrGallery";

const XrGalleryContainer = () => {
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
            <XrGallery />
          </XR>
        </Canvas>
        <Interface ref={interfaceRef} />
      </CharacterAnimationsProvider>
    </>
  );
};

export default XrGalleryContainer;

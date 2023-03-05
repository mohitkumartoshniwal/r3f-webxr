import { useControls } from "leva";
import { createContext, useContext, useState } from "react";

const CharacterAnimationsContext = createContext({});

export const CharacterAnimationsProvider = (props) => {
  const { Color, Model } = useControls({
    Color: "#ffffff",
    Model: {
      options: {
        Druid: "druid",
        "Young Korrigan": "young-korrigan",
        "Korrigan Hat": "korrigan-hat",
      },
      onChange: (value) => {
        setCurrentModelName(value);
        setAnimationIndex(0);
      },
    },
  });
  const [animations, setAnimations] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [currentModelName, setCurrentModelName] = useState(Model);

  return (
    <>
      <CharacterAnimationsContext.Provider
        value={{
          animations,
          setAnimations,
          animationIndex,
          setAnimationIndex,
          currentModelName,
          setCurrentModelName,
          Color,
        }}
      >
        {props.children}
      </CharacterAnimationsContext.Provider>
    </>
  );
};

export const useCharacterAnimations = () => {
  return useContext(CharacterAnimationsContext);
};

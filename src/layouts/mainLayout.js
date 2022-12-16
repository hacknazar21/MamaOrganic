import React, { createContext, useContext, useState } from "react";
import { HeaderContext } from "../context/HeaderContext";
import { useStorage } from "../hooks/hooks.storage";
import { useDynamicAdaptive } from "../hooks/hooks.dynamicadaptive";

export function MainLayout(props) {
  const [basket, setBasket] = useState(null);
  const {
    add,
    get,
    removeById,
    storageLength,
    addOne,
    removeOne,
    clearBasket,
  } = useStorage("MamaOrganicBasket");
  const { addDynamicRefs } = useDynamicAdaptive();
  return (
    <HeaderContext.Provider
      value={{
        basket: basket,
        add,
        get,
        removeById,
        storageLength,
        addDynamicRefs,
        setBasket,
        addOne,
        removeOne,
        clearBasket,
      }}
    >
      {props.children}
    </HeaderContext.Provider>
  );
}

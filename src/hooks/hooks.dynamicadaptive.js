import React, { useEffect, useState } from "react";

export const useDynamicAdaptive = () => {
  const [dynamicRefs, setDynamicRefs] = useState([]);
  const [checkPoints, setCheckPoints] = useState([]);
  const [isCreated, setIsCreated] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", createDynamic);
    if (dynamicRefs.length > 0 && !isCreated) {
      console.log(dynamicRefs);
      createDynamic();
    }
  }, [dynamicRefs]);
  const createDynamic = () => {
    dynamicRefs.map((dynamicRef, id) => {
      const classWhere = dynamicRef.dataset.da.split(",")[0];
      const resolution = dynamicRef.dataset.da.split(",")[1];
      const placeWhere = dynamicRef.dataset.da.split(",")[2] || "beforeend";
      if (window.innerWidth <= parseFloat(resolution)) {
        document
          .querySelector(`${classWhere}`)
          .insertAdjacentElement(placeWhere, dynamicRef);
        setIsCreated(true);
      } else {
        const children = [].slice.call(checkPoints[id].parent.children);
        children.splice(checkPoints[id].childrenId, 0, dynamicRef);
        checkPoints[id].parent.innerHTML = "";
        children.forEach((child) => {
          checkPoints[id].parent.appendChild(child);
        });
        setIsCreated(false);
      }
    });
  };

  const addDynamicRefs = (ref) => {
    ref = ref.filter((refObj) => refObj !== null);
    for (const refElement of ref) {
      const children = [].slice.call(refElement.parentElement.children);
      setCheckPoints((prev) => {
        prev.push({
          parent: refElement.parentElement,
          childrenId: children.indexOf(refElement),
        });
        return prev;
      });
    }
    setDynamicRefs((prev) => {
      return [...prev, ...ref];
    });
  };

  return { addDynamicRefs };
};

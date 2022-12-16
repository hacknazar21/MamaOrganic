import { useEffect, useState } from "react";

export const useStorage = (storageName) => {
  const [storageLength, setStorageLength] = useState(0);
  const add = (data = []) => {
    let toStorage = [];
    if (localStorage.getItem(storageName) !== null) {
      toStorage = JSON.parse(localStorage.getItem(storageName));
    }
    if (!toStorage.find((item) => item.id === data["id"]))
      toStorage.push({ ...data, count: 1 });
    else {
      const findId = toStorage.indexOf(
        toStorage.find((item) => item.id === data["id"])
      );
      toStorage[findId] = {
        ...toStorage[findId],
        count: parseInt(toStorage[findId].count) + 1,
      };
    }
    localStorage.removeItem(storageName);
    localStorage.setItem(storageName, JSON.stringify(toStorage));
    let storageLength = 0;
    for (const toStorageElement of toStorage) {
      storageLength += toStorageElement.count;
    }
    setStorageLength(storageLength);
  };
  const get = () => {
    return JSON.parse(localStorage.getItem(storageName)) ?? [];
  };
  const removeById = (id) => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    localStorage.removeItem(storageName);
    const newData = data.filter((dataObj, index) => index != id);
    console.log(data);
    localStorage.setItem(storageName, JSON.stringify(newData));
    setStorageLength(JSON.parse(localStorage.getItem(storageName)).length);
  };
  const addOne = (id) => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    localStorage.removeItem(storageName);
    data[id].count += 1;
    localStorage.setItem(storageName, JSON.stringify(data));
    setStorageLength(JSON.parse(localStorage.getItem(storageName)).length);
  };
  const removeOne = (id) => {
    const data = JSON.parse(localStorage.getItem(storageName)) ?? [];
    if (data[id].count - 1 === 0) {
      removeById(id);
      return;
    }
    localStorage.removeItem(storageName);
    data[id].count -= 1;
    localStorage.setItem(storageName, JSON.stringify(data));
    setStorageLength(JSON.parse(localStorage.getItem(storageName)).length);
  };
  const clearBasket = () => {
    localStorage.removeItem(storageName);
  };
  useEffect(() => {
    if (localStorage.getItem(storageName) !== null) {
      const data = JSON.parse(localStorage.getItem(storageName));
      let storageLength = 0;
      for (const toStorageElement of data) {
        storageLength += toStorageElement.count;
      }
      setStorageLength(storageLength);
    }
  }, [add, removeById, addOne, removeOne]);
  return {
    add,
    get,
    removeById,
    storageLength,
    addOne,
    removeOne,
    clearBasket,
  };
};

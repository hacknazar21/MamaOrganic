import { createContext } from "react";
import * as React from "react";
function noop() {}
function noop1(value) {}
export const HeaderContext = createContext({
  basket: null,
  add: noop1,
  get: noop,
  removeById: noop1,
  storageLength: 0,
  addDynamicRefs: noop1,
  setBacket: noop1,
  addOne: noop1,
  removeOne: noop1,
  clearBasket: noop,
});

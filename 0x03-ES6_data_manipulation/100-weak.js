/* eslint-disable no-unused-vars */
/* eslint-disable */

export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  let counts = weakMap.get(endpoint) || 0;
  counts += 1;

  if (counts >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, counts);
  }
}
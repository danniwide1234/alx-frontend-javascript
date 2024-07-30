/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function hasValuesFromArray(set, array) {
    return array.every((value) => set.has(value));
  }
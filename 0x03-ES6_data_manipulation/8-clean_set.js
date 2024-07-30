/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function cleanSet(set, startString) {
    const lists = [];
  
    if (
      typeof set !== 'object'
      || typeof startString !== 'string'
      || startString.length === 0
    ) {
      return '';
    }
  
    for (const item of set) {
      if (item && item.startsWith(startString)) {
        lists.push(item.slice(startString.length));
      }
    }
  
    return lists.join('-');
  }
  
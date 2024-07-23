/* eslint-disable no-unused-vars */
/* eslint-disable */

export default function createIteratorObject(report) {
    const results = [];
    for (const index of Object.values(report.allEmployees)) {
      results.push(...index);
    }
    return results;
  }
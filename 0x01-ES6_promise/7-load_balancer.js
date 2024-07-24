/* eslint-disable no-unused-vars */
/* eslint-disable */

export default async function loadBalancer(chinaDownload, USDownload) {
    const value = await Promise.race([chinaDownload, USDownload]);
    return value;
  }
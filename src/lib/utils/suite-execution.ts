
/**
 * Wrapper for setTimeout to make it via Promise
 * @param {number} ms
 * @returns {Promise<void>}
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(res => setTimeout(res, ms));
};

export default delay;

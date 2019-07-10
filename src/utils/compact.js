/**
 * compact() removes all falsey values from a passed array. ie. false, '', 0, null, undefined
 * @param {Array} array
 */
export default function compact(array) {
  let index = -1,
    length = array == null ? 0 : array.length,
    resIndex = 0,
    result = [];

  while (++index < length) {
    const value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}

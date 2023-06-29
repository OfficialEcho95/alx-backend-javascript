export default function appendStringToArray(array, appendString) {
  const modifiedArray = array.map(value => appendString + value);
  return modifiedArray;
}


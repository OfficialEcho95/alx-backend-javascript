export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = [...array];

  for (const [index, value] of array.entries()) {
    modifiedArray[index] = appendString + value;
  }

  return modifiedArray;
}

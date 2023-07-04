export default function cleanSet(set, startString) {
  let result = '';
  for (const elem of set) {
    if (elem.startsWith(startString)) {
      result += elem.substring(startString.length) + "-";
    }
  }
  if (startString === '') {
    return '';
  }
  result = result.slice(0, -1);
  return result;
}

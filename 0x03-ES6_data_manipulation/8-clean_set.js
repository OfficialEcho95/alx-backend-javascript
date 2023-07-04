export default function cleanSet(set, startString) {
  let result = '';

  if (startString === '') {
    return result;
  }
  for (const elem of set) {
    if (elem && elem.startsWith(startString)) {
      result += `${elem.substring(startString.length)}-`;
    }
  }
  result = result.slice(0, -1);
  return result;
}

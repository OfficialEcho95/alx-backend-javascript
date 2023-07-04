export default function createInt8TypedArray(length, position, value) {
  const uint8 = new Uint8Array(3);
  const buffer = new ArrayBuffer(length);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  uint8[position] = value;

  return buffer;
}

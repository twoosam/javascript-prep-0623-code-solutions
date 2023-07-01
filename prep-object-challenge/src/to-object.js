/* exported toObject */

function toObject(keyValuePair) {
  const value = keyValuePair.pop();
  const key = keyValuePair.pop();
  const object = {};
  object[key] = value;
  return object;
}

export default function createActionTypes(base, types = []) {
  return types.reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

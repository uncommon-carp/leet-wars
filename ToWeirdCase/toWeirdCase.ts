export function toWeirdCase(str: string) {
  const split = str.split(' ');
  const cased = split.map((chunk) => {
    const toCase = chunk.split('');
    return toCase.map((c, i) => {
      if (i % 2 === 0) {
        return c.toUpperCase();
      } else {
        return c.toLowerCase();
      }
    }).join('');
  });
  return cased.join(' ');
  // iterate over array
  // switch even number index to capital
  // switch odd number index to lowercase
  // start over after space
};

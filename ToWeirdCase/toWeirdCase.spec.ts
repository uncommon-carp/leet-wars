import { toWeirdCase } from "./toWeirdCase";

describe('toWeirdCase', () => {
  it('should weird case a string', () => {
    const str = 'weirdcase';
    const expected = 'WeIrDcAsE';
    expect(toWeirdCase(str)).toEqual(expected);
  });
  it('should weird case a string with spaces', () => {
    const str = 'weird case this string';
    const expected = 'WeIrD CaSe ThIs StRiNg';
    expect(toWeirdCase(str)).toEqual(expected);
  });
});

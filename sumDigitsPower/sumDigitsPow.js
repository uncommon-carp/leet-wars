// https://www.codewars.com/kata/5626b561280a42ecc50000d1/

function sumDigitsPow(a, b) {
  const result = [];

  for (i = a; i <= b; i++) {
    let sum = 0;
    const digits = i.toString().split('');
    for (x = 0; x < digits.length; x++) {
      sum += Math.pow(parseInt(digits[x]), x + 1);
    }
    if (sum === i) {
      result.push(i)
    }

  }
  return result
};

console.log(sumDigitsPow(1, 100));

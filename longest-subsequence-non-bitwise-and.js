/**
 * Find out the longest length of the subsequence with the Bitwise And Non-zero.
 */

/**
 * get the maximum subsequence
 * @param {Array} arr 
 */
function getMaxSub(arr) {
  let bits = [], maxlen = 0, result = [];
  for (let i of arr) {
    for (let j = i, k = 0; j > 0; k++) {
      if (typeof bits[k] !== 'object') {
        bits[k] = [];
      }
      if (j % 2) bits[k].push(i);
      j = Math.floor(j / 2);
    }
  }
  for (let i of bits) {
    if (i.length > maxlen) {
      maxlen = i.length;
      result = i;
    }
  }
  return result;
}

/**
 * get the maximum subsequence by using bitwise operators
 * @param {Array} arr 
 */
function getMaxSubBit(arr) {
  let bits = [], maxlen = 0, result = [];
  for (let i of arr) {
    for (let j = i, k = 0; j > 0; k++) {
      if (typeof bits[k] !== 'object') {
        bits[k] = [];
      }
      if (j & 1) bits[k].push(i);
      j = j >> 1;
    }
  }
  for (let i of bits) {
    if (i.length > maxlen) {
      maxlen = i.length;
      result = i;
    }
  }
  return result;
}

/**
 * generate random array
 */
function generateRndArr() {
  const MAX_LEN = 100, MAX_NUM = 1000;
  const len = Math.round(Math.random() * MAX_LEN);
  let arr = [];
  for (let i = 0; i < len; i ++) {
    arr.push(Math.round(Math.random() * MAX_NUM));
  }
  return arr;
}

/**
 * test
 */
function test() {
  const arr = generateRndArr();
  console.log("sequence:", arr);
  console.log("[normal way]");
  let result = getMaxSub(arr);
  console.log("the maximum subsequence:", result);
  console.log(`the longest length is ${result.length}`);
  console.log("[bitwise way]");
  result = getMaxSubBit(arr);
  console.log("the maximum subsequence:", result);
  console.log(`the longest length is ${result.length}`);
  // check if the bitwise And result is correct
  let str = "", res = null, checked = true;
  for (let i of result) {
    str = str.length ? `${str} & ${i}` : `${i}`;
    res = res ? (res & i) : i;
  }
  console.log(`${str} = ${res}`);
  if (!res) checked = false;
  // check if it's maximum
  for (let i of arr) {
    if (result.includes(i)) {
      console.log(`${i}: ${i} in [${str.replace(/ \&/g, ',')}]`);
    }
    else {
      const newres = res & i;
      if (newres) checked = false;
      console.log(`${i}: ${str} & ${i} = ${newres}`);
    }
  }
  console.log(checked ? "correct" : "wrong");
  return checked;
}

test();

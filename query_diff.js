/**
 * Count by noraml way
 * @param {Array} numbers 
 * @param {Number} diff 
 * @returns {Number}
 */
function countNormal(numbers, diff) {
    console.log("[countNormal]", numbers, diff);
    const tempLen = numbers.length;
    let sum = 0;
    for (let j = 0; j < tempLen; j ++) {
        const sm = numbers[j] - diff;
        const lg = numbers[j] + diff;
        console.log(`{${numbers[j]}}`);
        let s = numbers.filter((num, k) => (num === sm && k !== j)).length
                + numbers.filter((num, k) => (num === lg && k !== j)).length;
        console.log(`{${numbers[j]}} count, ${s}`);
        sum += s;
    }
    sum = Math.ceil(sum / 2);
    console.log(numbers, `sum, ${sum}`);
    return sum;
}

/**
 * Count by sort way
 * @param {Array} numbers 
 * @param {Number} diff 
 * @returns {Number}
 */
function countSort(numbers, diff) {
    console.log("[countSort]", numbers, diff);
    const temp = [...numbers];
    temp.sort((a, b) => (parseInt(a) - parseInt(b)));
    console.log(temp);
    const tempLen = temp.length;
    let sum = 0, cnt = [];
    for (let j = 0; j < tempLen; j ++) {
        if (j > 0 && temp[j] === temp[j-1]) {
            cnt.push(cnt[j-1]);
            sum += cnt[j-1];
            console.log(`{${temp[j]}} equal to preview, ${cnt[j-1]}`);
            continue;
        }
        const lg = temp[j] + diff;
        let s = 0;
        console.log(`{${temp[j]}}`);
        for (let k = j + 1; k < tempLen; k ++) {
            if (temp[k] > lg) break;
            if (temp[k] === lg) {
                s++;
                console.log(temp[k]);
            }
        }
        console.log(`{${temp[j]}} count, ${s}`);
        cnt.push(s);
        sum += s;
    }
    console.log(numbers, `sum, ${sum}`);
    return sum;
}

/**
 * Count by unique way
 * @param {Array} numbers 
 * @param {Number} diff 
 * @returns {Number}
 */
function countUnique(numbers, diff) {
    console.log("[countUnique]", numbers, diff);
    let counts = {};
    for (let num of numbers) {
        if (num in counts) counts[num] ++;
        else counts[num] = 1;
    }
    console.log(counts);
    let sum = 0;
    for (let num in counts) {
        const lg = parseInt(num) + diff;
        // console.log(num, typeof num, diff, typeof diff, lg, typeof lg);
        if (lg in counts) sum += counts[num] * counts[lg];
    }
    console.log(numbers, `sum, ${sum}`);
    return sum;
}

/**
 * find out the sequence of the number of pair with difference
 * @param {Array} query e.g. ["+2", "+3", "-2"]
 * @param {Number} diff 
 * @returns 
 */
function findOut(query, diff) {
    const len = query.length;
    let result = [], numbers = [];
    for (let i = 0; i < len; i++) {
        const sign = query[i][0];
        const q = Math.abs(parseInt(query[i]));
        if (sign === '+') {
            numbers.push(q);
        }
        else if (sign === '-') {
            numbers = numbers.filter(num => num !== q);
        }
        console.log(sign, numbers);
        const sum1 = countNormal(numbers, diff);
        console.log("Normal Way: ", sum1);
        const sum2 = countSort(numbers, diff);
        console.log("Sort Way: ", sum2);
        const sum3 = countUnique(numbers, diff);
        console.log("Unique Way: ", sum3);
        if (sum1 !== sum2 || sum2 !== sum3 || sum3 !== sum1) console.error("There is a wrong solution.", sum1, sum2, sum3);
        result.push(sum1);
    }
    console.log("[findOut] result", query, result);
    return result;
}

/**
 * generate random array
 */
 function generateRndArr() {
    const MAX_LEN = 1000, MAX_NUM = 20, MAX_DIFF = 10, PLUS_RATE = 0.5;
    const len = Math.round(Math.random() * MAX_LEN);
    const diff = Math.round(Math.random() * MAX_DIFF);
    let query = [];
    for (let i = 0; i < len; i ++) {
        const number = Math.round(Math.random() * MAX_NUM);
        const sign = (Math.random() > PLUS_RATE) ? "+" : "-";
        query.push(`${sign}${number}`);
    }
    return { query, diff };
}

function test() {
    const {query, diff} = generateRndArr();
    console.log(findOut(query, diff));
}

test();
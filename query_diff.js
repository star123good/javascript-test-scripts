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
        // console.log(sign, numbers);
        const temp = [...numbers];
        temp.sort();
        console.log(temp);
        const tempLen = temp.length;
        let sum = 0, cnt = []
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
        result.push(sum);
    }
    return result;
}

function test() {
    const tests = [
        {
            query: ["+3", "+2", "+2", "-2"],
            diff: 1
        },
        {
            query: ["+3", "+2", "+4", "+2", "-2", "+2", "-4"],
            diff: 1
        },
        {
            query: ["+2", "+2", "+3", "+3", "+4", "+2", "-2", "+2", "-4", "+3", "-2", "+2", "+2", "+3"],
            diff: 1
        },
    ]
    tests.map(({query, diff}) => {
        console.log(findOut(query, diff));
    });
}

test();
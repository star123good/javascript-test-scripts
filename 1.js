/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 * @param {String} p 
 * @example ['pim','pon'], ['999999999', '777888999'], '88999'
 * @returns 
 */
function main(a, b, p) {
    let regex = new RegExp("[\w]*" + p + "[\w]*");
    let results = [];
    for (let i in b) {
        let m = regex.exec(b[i]);
        if (m && m.length && m[0] !== '') results.push(a[i]);
    }
    results.sort();
    return (results.length) ? results[0] : "NO CONTACT";
}
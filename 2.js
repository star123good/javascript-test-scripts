/**
 * 
 * @param {String} str
 * @example '0 - 22 1985--324'
 * @returns 
 */
function main(str) {
    let res = str.replaceAll(/[\W]/g, '');
    let arr = res.match(/.{1,3}/g);
    if (arr[arr.length-1].length < 2) 
        [arr[arr.length-2], arr[arr.length-1]] = (arr[arr.length-2] + arr[arr.length-1]).match(/.{2}/g);
    let result = arr.join('-');
    return result;
}
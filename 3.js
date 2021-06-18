/**
 * 
 * @param {Int} Y 
 * @param {String} A 
 * @param {String} B 
 * @param {String} W 
 * @example 2014, 'April', 'May', 'Wednesday'
 * @returns 
 */
function main(Y, A, B, W) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let counts = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (Y % 4 == 0 && (Y % 100 != 0 || Y % 400 == 0)) counts[1] = 29;
    let monthA = months.indexOf(A);
    let monthB = months.indexOf(B);
    let dayW = days.indexOf(W);
    let st = counts.reduce((s,mm, i)=> (i<monthA) ? s + mm : s, 0);
    let en = counts.reduce((s,mm, i)=> (i<=monthB) ? s + mm : s, 0);
    let deltaSt = (371 - (st + dayW)) % 7;
    let deltaEn = (en + dayW) % 7;
    let total = (en - deltaEn) - (st + deltaSt);
    let weeks = total / 7;
    console.log(weeks);
    return weeks;
}
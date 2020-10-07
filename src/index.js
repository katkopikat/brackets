module.exports = function check(str, bracketsConfig) {
    let pairBraickets = bracketsConfig.map((item) => item.join(''));
    if (str.length % 2 !== 0) return false;

    for (let i = 0; i < pairBraickets.length; i++) {
        while (str.includes(pairBraickets[i])) {
           str = str.replace(pairBraickets[i], '');
           i = -1;
        }
    }
    return str === '' ? true: false;
}

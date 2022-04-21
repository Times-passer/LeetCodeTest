/**
 * @param {number[]} prices
 * @return {number}
 */

//  这题的关键点在于“当天可以卖完再买”，get到这个点就能意识到把每2天大于0的差值相加就行了
var maxProfit = function (prices) {
    let total = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        //原数组中如果后一个减去前一个是正数，说明是上涨的，
        //我们就要累加，否则就不累加
        total += Math.max(prices[i + 1] - prices[i], 0);
    }
    return total;
}
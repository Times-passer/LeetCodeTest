/* 标签：动态规划
本问题其实常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和

如果最后一步是1个台阶，那么求 n - 1 台阶需要的步数就可以了，
如果最后一步是2个台阶，就算n - 2台阶需要的步数，
所以只需要算 dp[n - 1] + dp[n - 2]，就是 dp[n] 了

 */

var climbStairs = function (n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 优化空间复杂度：https://cloud.tencent.com/developer/article/1817113
var climbStairs = function (n) {
  let p = 0,
    q = 0,
    r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};
// 时间复杂度：循环执行 n 次，每次花费常数的时间代价，故渐进时间复杂度为 O(n)
// 空间复杂度：这里只用了常数个变量作为辅助空间，故渐进空间复杂度为 O(1)。

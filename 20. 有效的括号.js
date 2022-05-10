var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false; // 因此如果字符串的长度为奇数，我们可以直接返回 false，省去后续的遍历判断过程。
  }
  const pairs = new Map([
    // 利用Map 判断栈尾的左括号和此时遍历到的右括号是否匹配
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  const stk = []; // 判断括号的有效性可以使用「栈」这一数据结构来解决。
  for (let ch of s) {
    if (pairs.has(ch)) {
      // 当遍历到右括号时：
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        // false 的两种情况： 1.栈里没有左括号了 2.和栈尾的左括号不匹配
        return false;
      }
      stk.pop(); // pop() 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。
    } else {
      stk.push(ch); // 由于后遇到的左括号要先闭合，因此我们可以将这个左括号放入栈顶。
    }
  }
  return !stk.length; // 在遍历结束后，如果栈中没有左括号，返回 True，否则返回False。
};
/* 
时间复杂度：O(n)O(n)，其中 nn 是字符串 ss 的长度。
空间复杂度：O(n + |\Sigma|)O(n+∣Σ∣)，其中 \SigmaΣ 表示字符集，本题中字符串只包含 66 种括号，|\Sigma| = 6∣Σ∣=6。栈中的字符数量为 O(n)O(n)，而哈希表使用的空间为 O(|\Sigma|)O(∣Σ∣)，相加即可得到总空间复杂度。

作者：LeetCode-Solution
链接：https://leetcode.cn/problems/valid-parentheses/solution/you-xiao-de-gua-hao-by-leetcode-solution/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

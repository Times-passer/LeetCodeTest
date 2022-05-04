var addStrings = function (num1, num2) {
  let i = num1.length - 1,
    j = num2.length - 1,
    add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    const x = i >= 0 ? num1.charAt(i) - '0' : 0;
    const y = j >= 0 ? num2.charAt(j) - '0' : 0;
    const result = x + y + add;
    ans.unshift(result % 10); // 如果这里不用unshift 用push ；那.join()前面就要加上.reverse()
    add = Math.floor(result / 10);
    i -= 1;
    j -= 1;
  }
  return ans.join('');
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/add-strings/solution/zi-fu-chuan-xiang-jia-by-leetcode-solution/

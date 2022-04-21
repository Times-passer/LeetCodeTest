var containsDuplicate = function (nums) {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/contains-duplicate/solution/cun-zai-zhong-fu-yuan-su-by-leetcode-sol-iedd/
// 时间复杂度：O(N)O(N)，其中 NN 为数组的长度。
// 空间复杂度：O(N)O(N)，其中 NN 为数组的长度。

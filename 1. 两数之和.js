// sb冲突
/* 方法一：暴力枚举
时间复杂度：O(N^2)，其中 N 是数组中的元素数量。最坏情况下数组中任意两个数都要被匹配一次。

空间复杂度：O(1)
var twoSum = function (nums, target) {
  const lt = nums.length;
  for (let i = 0; i < lt; i++) {
    for (let j = i + 1; j < lt; j++) {
      if (nums[i] + nums[j] == target) {
        return new Array(i, j);
      }
    }
  }
  return null;
};
 */

// 方法二：哈希表
// 遍历到数字 a 时，用 targettarget 减去 a，就会得到 b，若 b 存在于哈希表中，我们就可以直接返回结果了。
// 若 b 不存在，那么我们需要将 a 存入哈希表，好让后续遍历的数字使用。
/*
作者：demigodliu
链接：https://leetcode.cn/problems/two-sum/solution/tu-jie-guan-fang-tui-jian-ti-jie-liang-s-02xs/ */

var twoSum = function (nums, target) {
  map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let key = target - nums[i]
    if (map.has(key)) {
      return new Array(map.get(key), i)
    } else {
      map.set(nums[i], i)
    }
  }
}

// console.log(twoSum([2, 7, 11, 15], 9));

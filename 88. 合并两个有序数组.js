// 逆向双指针
var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  var cur;
  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1) {
      // 是-1 不是0 哦
      cur = nums2[p2--];
    } else if (p2 === -1) {
      cur = nums1[p1--];
    } else if (nums1[p1] >= nums2[p2]) {
      // 这里不需要p1--
      cur = nums1[p1--];
    } else {
      cur = nums2[p2--];
    }
    nums1[p--] = cur;
  }
};
/* 
除此之外，正向双指针也行，但是题目要求存在nums1，就需要额外复制一个临时数组，所以逆向双指针是最优解
详细题解：https://leetcode-cn.com/problems/merge-sorted-array/solution/he-bing-liang-ge-you-xu-shu-zu-by-leetco-rrb0/
 */

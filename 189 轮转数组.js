/* 
// 1.双指针、翻转：原数组翻转 → [0, k)翻转 → [k, 数组长度)翻转
// 自己封装reverse 翻转函数，因为自带的reverse() 不能填参数进去
var rotate = function (nums, k) {
  const n = nums.length;
  if ((k %= n) === 0) return; // 特殊情况先找出
  reverse(nums, 0, n - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, n - 1);
};
// 1.1 加减运算
const reverse = (nums, l, r) => {
  while (l < r) {
    nums[l] = nums[l] + nums[r]; // nums[l] += nums[r]
    nums[r] = nums[l] - nums[r];
    nums[l] = nums[l] - nums[r]; // nums[l] -= nums[r]
    l++;
    r--;
  }
};
// 1.2 临时变量
const reverse = (nums, l, r, t) => {
  // 直接在形参里定义临时变量t，省得在函数体内定义
  while (l < r) {
    t = nums[l];
    nums[l++] = nums[r];
    nums[r--] = t;
  }
};
// 1.3 辅助数组
const reverse = (nums, l, r) => {
  while (l < r) {
    nums[l] = [nums[r], (nums[r] = nums[l])][0];
    // 外数组的第[0]个元素，用来保存原来的 nums[r]，待会赋值给 nums[l]；
    // 外数组的[1]用于进行 nums[r] = nums[l] 操作
    l++;
    r--;
  }
};
// 1.4 解构赋值
const reverse = (nums, l, r) => {
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};
// 1.5 异或运算
const reverse = (nums, l, r) => {
  while (l < r) {
    nums[l] = nums[l] ^ nums[r]; // nums[l] ^= nums[r]
    nums[r] = nums[l] ^ nums[r]; // nums[r] ^= nums[r]
    nums[l] = nums[l] ^ nums[r]; // nums[l] ^= nums[r]
    l++;
    r--;
  }
};
 */

// 2. API：.splice() 方法：从索引号0开始删除0个，添加...
// 该方法返回被删掉元素的数组
var rotate = function (nums, k) {
  nums.splice(0, 0, ...nums.splice(-(k %= nums.length), k));
  return nums;
};

/* 
// 3. 辅助数组：新建一个数组，然后按顺序覆盖原数组 (i + k) % length 上的值
var rotate = function (nums, k) {
  let length = nums.length;
  let temp = [];
  for (let j = 0; j < length; j++) {
    temp[j] = nums[j];
  }
  for (let i = 0; i < length; i++) {
    nums[(i + k) % length] = temp[i];
  }
  return nums;
};

var rotate = function(nums, k) {
    let n = nums.length, i = -1, a = new Int32Array(n)
    while (++i < n) a[(i + k) % n] = nums[i]
    while (i--) nums[i] = a[i]
};
*/

/*
 // 4. 补位：倒序遍历，数组整体向后移动k位，然后再补上前k位，最后截断多余位数
// 数组增加k位整体后移。指针到k后，把[n, n + k]位移回[0, k]。
// 截断到n取余：当k > 数组长度，测试用例[1, 2] 3等同于[1, 2] 1 3 / 2取余即可
var rotate = function (nums, k) {
  let n = (i = nums.length); // 多赋值给一个n，是为了当全部后移完后，还得补上前k个
  if ((k %= n) === 0) return nums; // 即使不是移动0位，也已经执行了(k %= n)，k已经取余
  while (i--) {
    nums[i + k] = nums[i];
    if (i < k) nums[i] = nums[n + i]; // n的用处
  }
  nums.length = n; // 把数组后面多余的截断
  return nums;
};
 */

/* 作者：mantoufan
链接：https://leetcode-cn.com/problems/rotate-array/solution/api-bu-wei-fan-zhuan-huan-xing-shu-zu-5j-vju4/ */

let test = [1, 2, 3, 4, 5, 6, 7];
rotate(test, 2);
console.log(test);

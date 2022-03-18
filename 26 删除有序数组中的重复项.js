let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

var removeDuplicates = function (nums) {
    if (nums == null || nums.length == 0) {
        return 0;
    }
    let f = nums[0];
    let j = nums.length;
    for (let i = 0; i < j;) {
        (nums.indexOf(nums[i]) !== i) ? (nums.splice(i, nums.indexOf(nums[i]) - i), i--, j--) : i++
    }
    return nums;
};

console.log(removeDuplicates(nums));
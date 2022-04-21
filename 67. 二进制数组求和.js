var addBinary = function (a, b) {
    let ans = '';
    let carry = 0;
    for (
        let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--
    ) {
        let sum = carry; // sum 用来按位相加，即“每一次”的竖式运算(所以才需要每次循环都重新赋值)：carry + a[i] + b[j]
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2; // 每次对2取余，即为该位结果
        carry = Math.floor(sum / 2); // 每次除2，即可判断是否有进位(Math.floor()为向下取整)
    }
    ans += carry == 1 ? carry : ''; // 最后一次循环结束，可能还有进位没来得及加上，所以要做一次判断
    return ans.split('').reverse().join(''); // split按()将字符串分割成数组、reverse颠倒数组、join按()将数组拼接成字符串
};

/* 测试案例 & 无注释版:
    var a = '11',
        b = '1';
var addBinary = function (a, b) {
    let ans = '';
    let carry = 0;
    for (
        let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--
    ) {
        let sum = carry;
        sum += i >= 0 ? parseInt(a[i]) : 0;
        sum += j >= 0 ? parseInt(b[j]) : 0;
        ans += sum % 2;
        carry = Math.floor(sum / 2);
    }
    ans += carry == 1 ? carry : '';
    return ans.split('').reverse().join('');
};
console.log(addBinary(a, b)); */
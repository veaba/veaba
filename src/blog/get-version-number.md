# 原创：JavaScript 获取版本差值

## 题目

比较版本号
如果 version1 > version2 返回 1，如果 `version1 < version2` 返回 `-1`，不然返回 `0`.

输入的 version 字符串非空，只包含数字和字符.。.字符不代表通常意义上的小数点，只是用来区分数字序列。例如字符串 2.5 并不代表二点五，只是代表版本是第一级版本号是 2，第二级版本号是 5.

示例 1
输入

```
"0.1","1.1"
```

输出

```
-1
```

## 题目详解

思路 1：第一个点 `x 1`、第二个点 `x 10`、第三个 `x 100`,这个思路是错误的。

思路 2： 把 `.` 当做小数点,注意：这里并非 `100%` 按照题目要求实现 `符号`

    - 核心：拉平最大的数组长度

```js
/**
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
function compare(version1, version2) {
  let left = version1.split(".");
  let right = version2.split(".");
  let len = 0;

  console.log(left, right);

  if (left.length > right.length) {
    len = left.length;
    // right fill
    const le = left.length - right.length;
    right = right.concat(Array(le).fill("0"));
  } else if (left.length < right.length) {
    // right fill
    const le = right.length - left.length;
    left = left.concat(Array(le).fill("0"));
    len = right.length;
  } else len = left.length;

  let leftCount = left.reduce((a, b) => a + b);
  let rightCount = right.reduce((a, b) => a + b);

  const diff = rightCount - leftCount;
  const countLen = (diff + "").length;
  const countArray = Array(len).fill("0");
  for (let i = 0; i < countLen; i++) {
    const diffStr = diff + "";
    countArray[len - 1 - i] = diffStr[i];
  }
  const ret = "-" + countArray.join(".");
  return ret;
}

console.log(compare("0.1", "1.1"));
console.log(compare("1.1", "1.11.1"));
// compare("1.1.1", "1.2");
```

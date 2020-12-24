#

## 题目

寻找两个正序数组的中位数

给定两个大小为 m 和 n 的正序（从小到大）数组  nums1 和  nums2。请你找出并返回这两个正序数组的中位数。

进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？

示例 1：

```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

示例 2：

```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

示例 3：

```
输入：nums1 = [0,0], nums2 = [0,0]
输出：0.00000
```

示例 4：

```
输入：nums1 = [], nums2 = [1]
输出：1.00000
```

示例 5：

```
输入：nums1 = [2], nums2 = []
输出：2.00000
```

## 题解过程

规律：

- 奇数取中间数，再除 2
- 偶数去中间数，且只取两个元素，相加再除 2
- 空数组，返回 0
- 增加 5 个小数点

```js
// 判断奇数
// 判断偶数

const merge = [...nums1, ...nums2];
const sortMerge = merge.sort((a, b) => {
  if (a > b) return 1;
  else return -1;
});
if (!sortMerge.length) return (0).toFixed(5);
if (sortMerge.length % 2 == 0) {
  const half = sortMerge.length / 2;
  const halfArray = sortMerge.slice(half - 1, half + 1);
  return (halfArray.reduce((a, b) => a + b) / 2).toFixed(5);
} else {
  const oddHalf = Math.round(sortMerge.length / 2);
  const [oddItem] = sortMerge.slice(oddHalf - 1, oddHalf);
  return (oddItem || 0).toFixed(5);
}
```

> 执行用时：140 ms, 在所有 JavaScript 提交中击败了 65.57%的用户

> 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了 15.92%的用户

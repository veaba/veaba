# JavaScript 获取第一个缺失的正整数

## 题目

获取第一个缺失的正整数

```
const ex1 = [1, 2, 0]; // out 1

const ex2 = [3, 4, -1, 1]; // out 2

const ex3 = [7, 8, 9, 11, 12]; // out 1

```

## 题解过程

坦白说，我当初觉得这道题目很不正经。

经过引用多个用例后，大致的规则如下：

- 负数包括 0 不参与

- 都是正整数

- 从 1 开始，入参最小值，开始模糊了：

```
const ex = [4,5,6,8]  // 此处最小值 `4`，但缺失 `7`，因为 `7>1` 还是得取 `1`
```

关键的几个小模块分为：

- 先移除负数和小于 `1` 的元素

- 再排序

```js
function getMinInt(arr) {
  let out = 1;
  const sortArray = arr.sort((left, right) => {
    if (left > right) return 1;
    else return -1;
  });

  const filterArray = sortArray.filter((item) => item > 0);

  for (let item of filterArray) {
    if (item > out + 1) out = item - out - 1;
  }
  const minValue = Math.min.apply(null, filterArray);
  if (minValue > 1) out = 1;
  return out;
}
```

但这道题目，最恶心的地方是，让你从时间复杂度和空间复杂度考虑，而不是让你只算出来。

不好意思，我先恶补一下 `时间复杂度`、`空间复杂度` 再来。

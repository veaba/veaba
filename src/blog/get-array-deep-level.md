# 原创：JavaScript 获取数组深度

计算数组的长度，给出以下例子，计算出数组的深度。

- `arrayDeepLevel([1, 2, [3, [1, [0]]]])`，长度为 `3`
- `arrayDeepLevel([])`，长度为 `0`
- `arrayDeepLevel([[[]]]`，长度为 `2`
- `arrayDeepLevel([0, [2], [2, [3]]])`，长度为 `3`

## 分析

- 默认最小是 `0`

- 只计算是数组结构

第一反应过来，就是要递归循环。

所以起初构造了以下函数

```js
let level = -1;
const arrayDeepLevel = function(array) {
  return function(data) {
    if (Array.isArray(data)) {
      for (let item of data) {
        if (Array.isArray(item)) {
          arrayDeepLevel(item);
        }
      }
      level++;
      return level;
    }
  };
};
```

通过验证，显示上面是成功的，但是，仅是单次使用，比如执行多次后，全局变量 `level` 就一直累加，显然不是我们想要的结果哦。

关键的一点就是，大函数只执行一次，递归是在内部构建，于是有了声明第二个函数的改造。

```js
const arrayDeepLevel = function(array) {
  let level = -1;
  const recursion = function(data) {
    if (Array.isArray(data)) {
      for (let item of data) {
        if (Array.isArray(item)) {
          recursion(item);
        }
      }
      level++;
      return level;
    }
  };
  return recursion(array);
};

module.exports = arrayDeepLevel;
```

保证了多次执行的值都是被初始掉。

## 拓展以及延伸

曾在一个项目中处理过类似的问题。

简化后，通过移除非数组的元素，我们得到下面的结构比较：

```
[1,2,3,[5,6]]  => [[]]

[1,[2,[3,[]]]] => [[[[]]]]

...

```

我们通过这个结构 `[[[[]]]]`，认为是一个字符串 `'[[[[]]]]'`。

为了更形象的描述 `[` 始终对应 `]` 构成一个 **组合**。

如下：

```
形象化：		"a,b,c,d      d1,c1,b1,a1"
对应的 		| | | |       |  |  |  |
原始字符 		[,[,[,[			  ], ], ], ]
序号：      0 1 2 3      4  5  6  7
```

于是得到:

```
a  index = 0
b  index = 1
c  index = 2
d  index = 3
d1 index = 4
c1 index = 5
b1 index = 6
a1 index = 7
```

得出并收集它们的索引值关系：

```
0  1,  2,  3
↓  ↓   ↓   ↓
4  5   6   7

```

经过一个 [ level 提取算法](https://github.com/veaba/pyhtmd/blob/master/pyhtmd/html_parser.py#L216) 的实现，将得到一个有趣的现象：

公式：当前 `index` x 2 - `value` = 对应的 `level`

我们对 `[0,1,2,3]`，通过算法转换如下：

| index                | 0        | 1        | 2        | 3        |
| -------------------- | -------- | -------- | -------- | -------- |
| value                | 0        | 1        | 2        | 3        |
| `index`\*2 - `value` | 0\*2-0=0 | 1\*2-1=1 | 2\*2-2=2 | 3\*2-3=1 |

或许有人说，这个功能可能是个巧合，不妨看一下下面的：

已知，我们的结构是 `[[[][]]]`，此时，左包围是对应索引与右括号的关系是 ,

```
0  1,  2,  4
↓  ↓   ↓   ↓
7  2   6   5
```

根据公式转换如下：

| index                | 0        | 1        | 2        | 4        |
| -------------------- | -------- | -------- | -------- | -------- |
| value                | 0        | 1        | 2        | 3        |
| `index`\*2 - `value` | 0\*2-0=0 | 1\*2-1=1 | 2\*2-2=2 | 3\*2-4=2 |

直到这里，我们得出一个结论，只要知道左边的索引值，就可以对应的找到它合并为一个**组合**所在的索引值（即左边 `[`，找到匹配右边结束的 `]`），以及它对应的 level。

这个算法被我应用于一款 HTML 转 Markdown 工具 [Pyhtmd](https://github.com/veaba/pyhtmd)，作为解析 HTML 列表元素 为 markdown 代码的核心支撑。

得到最大 level 的深度，只要 `Math.max.apply(this,[0,1,2,2])` 即可。

下面是完整的代码实现：

```js
const arrayDeepLevel = function(array) {
  console.time("get-array-deep-level-test-2==>");
  const arrayStr = JSON.stringify(array);
  let clearArrayStr = "";
  // 这里的正则没有写好
  arrayStr.replace(/(?:(\[|\]))/g, function($1) {
    clearArrayStr += $1;
    return $1;
  });

  const leftStrItems = [];
  // const rightStrItems = [];
  for (let i = 0; i < clearArrayStr.length; i++) {
    // start tag
    if (clearArrayStr[i] === "[") {
      leftStrItems.push(i);
    }
  }

  const leftMaps = {};
  for (let i = 0; i < leftStrItems.length; i++) {
    const item = leftStrItems[i];
    leftMaps[item] = i * 2 - item;
  }
  const levelArray = Object.values(leftMaps);

  console.timeEnd("get-array-deep-level-test-2==>");
  //  0.113037109375 ms，咋一看时间复杂度是O(n)，但这里空间复杂度很高，加上其他多余的操作
  return Math.max.apply(this, levelArray);
};

module.exports = arrayDeepLevel;
```

```ts
it("4. ==> level:3", () => {
  // 因为原题目是元素的包括了自己，实际上这里最高二级，是针对外包围计算，而非元素
  expect(arrayDeepLevel([0, [1], [1, [2]]])).toBe(2);
});
```

## 测试用例

-[get-array-deep-level](/__tests__/get-array-deep-level-test.js)

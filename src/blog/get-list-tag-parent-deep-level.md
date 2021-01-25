# JavaScript 获取列表元素深度，以及对应匹配索引

曾在一个[Pyhtmd](https://github.com/veaba/pyhtmd)中处理 HTML List 标签的解析问题。

## 问题：如何解析嵌套多层 HTML list 标签

假设: `<ul>`= `[`，`</ul>` = `]`， `<ol>` 的问题就不展开了。

## 分析：

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

经过一个 [ level 提取算法](https://github.com/veaba/pyhtmd/blob/master/pyhtmd/html_parser.py#L216) 的实现。

这个公式是经过长时间的观察、反复推测后，得到了一个有趣的现象：

公式：当前 `index` x 2 - `value` = 对应的 `level`，这个公式非常的关键。

我们对 `[0,1,2,3]`，通过算法转换如下：

| index                | 0        | 1        | 2        | 3        |
| -------------------- | -------- | -------- | -------- | -------- |
| value                | 0        | 1        | 2        | 3        |
| `index`\*2 - `value` | 0\*2-0=0 | 1\*2-1=1 | 2\*2-2=2 | 3\*2-3=3 |

或许有人说，这个公式可能是个巧合，不妨看一下下面的：

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

现在，如果得到最大 level 的深度，只需 `Math.max.apply(this,[0,1,2,2])` 即可。

下面是完整的代码实现（仅返回 `level` 最大级）：

```js
const arrayDeepLevel = function(array) {
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
    // ellipsis right Items ...
  }

  const leftMaps = {};
  for (let i = 0; i < leftStrItems.length; i++) {
    const item = leftStrItems[i];
    leftMaps[item] = i * 2 - item;
  }
  const levelArray = Object.values(leftMaps);

  return Math.max.apply(this, levelArray);
};

module.exports = arrayDeepLevel;
```

```ts
it("4. ==> level:2", () => {
  // 实际上这里最高二级，是针对外包围计算，而非元素
  expect(arrayDeepLevel([0, [1], [1, [2]]])).toBe(2);
});
```

## 总结

1. 尽量简化复杂的问题

2. 有时可能需要一双慧眼，以及反复的观测和总结

## 测试用例

-[get-list-tag-parent-deep-level](/__tests__/get-list-tag-parent-deep-level-test.js)

# JavaScript 实现二叉树镜像树

## 题目

- [原 Leetcode 题目](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

例如输入：

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

镜像输出：

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

示例 1：

```
输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]

```

## 题解过程

>在我算出来之后，贴上去，发现提示错误。随后偷看了正确答案，一脸懵逼，这...答案就是草稿吗？于是，我整理了下，自己在解析这道题目时的过程。

因为原题目的次序是打乱的，`[4,2,7,1,3,6,9]`，不太好正面突破理解：

于是，将之，按照次序重新整理了下，改写为 `[1,2,3,4,5,6,7]`：

```
     1                         1
   /   \                     /   \
  2     3           ---->   3     2
 / \   / \                 /  \   / \
4   5 6   7               7    6 5   4
```

入参：

- `[1,2,3,4,5,6,7]`

出参：

- `[1,3,2,7,6,5,4]`

在经过一番找规律 (以下内容比较抽象)：

```
// 0  2  1  6  5  4  3
// [4,2,7,1,3,6,9]
// [4,7,2,9,6,3,1]


//     [ 4,  2,  7,  1,  3,  6,  9]
//       0   1   2   3   4   5    6
// 取反 [-5, -3, -8, -2, -4, -7, -10]

// [1 2 3], -> [ 1 3 2]

// 2 1 6 => 2 6 1
// 7 3 9 => 7 9 3

// len = 7
// 0 1 2 3 4 5 6
// 0 2 1 6 5 4 3

// 4-6=-2 7+-2 = 5
// 5-6=-1 7+-1 = 6

//  0 3 3  9 9 9 9 9

// 1 2 3 4 5 6 7 | 8  9  10 11 12 13 14 15
// 1 3 2 7 6 5 4 | 15 14 13 12 11 10 8  9

```

起初的想法是，想用取反，不知道哪个逗比在解 `lengthOfLongestSubstring` 的时候，想到用 `~` 取反的操作。

于是想着，可能存在某个索引值调换的可能性，或许可能还有点用处，事实并无用处。

最后证明了在解答 `lengthOfLongestSubstring` 题目时，使用取反 `~` 操作并无多大用处。

直到，我看到这个比较，似乎有点意思了。

![](/images/mirrorTree-1-7.png)

似乎，存在某些规律：

- 第一个值不算，先移除

- 第一次，两个值，一组交换位置

- 第二次，四个值，两组又交换位置。

那么，如何实现：`[1,3,6,9]`=> `[9,6,3,1]`，它的规律是什么？

正好是一个镜像！

![](/images/like-mirror.png)

`前` -> `后`，`后` -> `前`

经过测试，验证了以下小技巧可以实现这个 `前后互换`

```js
const tempArray = [1, 3, 6, 9];
const temp = [];
for (let item of tempArray) {
  temp.unshift(item);
}
console.log("temp==>", temp);
```

继续扩大测试范围，从 `1-7` 扩大到 `1-15`，对比他们的值：

![](/images/mirrorTree-1-15.png)

在保持前面的规律不变的情况下，存在一个取值间隔问题：

之前是：

- 第一次，两个值，一组，交换位置

- 第二次，四个值，两组，交换位置

- 第三次，八个值，四组，交换位置

于是我得到这么一个规律，**随着循环索引值递增，呈现某些变化**，

```
1 -> 4 ->  8 -> 16 -> ..

```

它恰好等于，`2^n`，2 的 x 次方

```
0 ->  1  -> 2   -> 3   -> 4

↓     ↓     ↓      ↓       ↓

0 -> 2^1 -> 2^2 -> 2^3 -> 2^4

```

于是，经过整理思路，完成的函数如下：

```js
var mirrorTree = function(root) {
  const lastArray = root.slice(1);
  const first = root.slice(0, 1);
  const newArray = [];
  for (let i = 1; i < Math.ceil(lastArray.length / 2 + 1); i++) {
    const k = Math.pow(2, i);
    const j = k - 2;
    if (j > -1) {
      let tempArray = lastArray.slice(j, j + k);
      if (tempArray.length) {
        const temp = [];
        for (let item of tempArray) {
          temp.unshift(item);
        }
        newArray.push(...temp);
      }
    }
  }
  return first.concat(newArray);
};
```

## 结尾：

- 该方法并未完全的覆盖测试用例，有问题的话，[还望指出](https://github.com/veaba/veaba/issues/new)

附：原题目解析 `leetcode` 答案

```js
var mirrorTree = function(root) {
    if (root === null) return null;
    mirrorTree(root.left);
    mirrorTree(root.right);
    [root.left, root.right] = [root.right, root.left];
    return root;
};
```

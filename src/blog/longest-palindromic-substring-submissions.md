# 最长回文子串

给定一个字符串 s，找到 s 中最长的回文子串。你可以假设  s 的最大长度为 1000。

示例 1：

```
输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
```

示例 2：

```
输入: "cbbd"
输出: "bb"
```

## 题解过程

### 提出一种新的方：趋向中间聚拢

```
abbd => bb
babad => bab、aba
abccba => abc
现在提出一种新的方法，

 0 1 2 3
 a b b c
_____________ 倒叙，对比索引值一级值是不是相等，1=1&&b=b、2==2&&b=b、但这种趋向于中间聚拢的方法
 c b b a
 0 1 2 3


```

经过测试，该方法与少量测试用例无法通过，故而放弃，如：

`abbce`

写法如下：

```js
var longestPalindrome = function(s) {
  const asc = s; // 正序
  let desc = s
    .split("")
    .reverse()
    .join(""); // 倒叙

  console.log("正序==>", asc);
  console.log("逆序==>", desc);
  const obj = {};
  for (let i = 0; i < asc.length; i++) {
    for (let j = 0; j < desc.length; j++) {
      if (asc[i] === desc[j]) {
        const first = asc.indexOf(asc[i]);
        const last = asc.lastIndexOf(asc[i]);
        if (last !== -1 && first !== -1 && last !== first) {
          console.log("first=>", first, "last=>", "last");
          obj[i] = desc[j];
        }
      }
    }
  }

  const objValueArray = Object.values(obj); // TOD
  const objKeyArray = Object.keys(obj);
  console.log("obj===>", obj);
  console.log("objValueArray==>", objValueArray);
  console.log("objKeyArray==>", objKeyArray); // TODO 可能存在落差大的情况

  let objStr = objValueArray.join("");
  if (!objStr.length) return s[0] || "";

  // TODO babad=>
  if (
    objValueArray.length == objKeyArray.length &&
    objValueArray.length % 2 === 0 &&
    objValueArray.length
  ) {
    objStr = objStr.slice(1);
  }
  return objStr;

// console.log("result==>", longestPalindrome("abbd")); // bb
// console.log("result==>", longestPalindrome("babad")); // bab 或 aba
// console.log("result==>", longestPalindrome("abccba")); // abc
// console.log("result==>", longestPalindrome("ab")); // a | b
// console.log("result==>", longestPalindrome("abb")); // bb
// console.log("result==>", longestPalindrome("abb")); // a | b
// console.log("result==>", longestPalindrome("babad")); // bab
console.log("result==>", longestPalindrome("cbbd")); // bab
```

错误的方案 3：

```js
const longestPalindrome = function(s) {
  if (!s.length || (s.length && s.length === 1)) return s[0] || "";

  const ijArray = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > 0; j--) {
      // console.log("=>", i, j);
      if (s[i] === s[j] && i < j) {
        console.log("==>", s[i], s[j], "i=>", i, "j=>", j);
        ijArray.push(s[i], s[j]);
      }
    }
  }
  return ijArray;
};

console.log("result==>", longestPalindrome("abbd")); // bb
console.log("result==>", longestPalindrome("abbbd")); // xbb
console.log("result==>", longestPalindrome("babad")); // bab 或 aba
```

错误的方案 4：

```js
const longestPalindrome = function(s) {
  if (!s.length || (s.length && s.length === 1)) return s[0] || "";

  const ijArray = [];
  for (let i = 1; i < s.length; i++) {
    const left = s.slice(0, i);
    const right = s.slice(i);

    const max = Math.max(left.length, right.length);

    for (let j = 0; j < max; j++) {
      if (left[j] && right[j]) {
        // 先处理偶数情况
        // left 从后往前
        const lastLeftIndex = left.length - 1 - j;
        // console.log("lastLeftIndex=>",left[lastLeftIndex],right[j])
        if (left[lastLeftIndex] === right[j]) {
          console.log("=>i", i, left, right);
          console.log("抽中结果=>", i, j, left[lastLeftIndex], right[j]);
          const endIndex = i + (j + 1);

          console.log("lastLeftIndex=>>", lastLeftIndex);
          ijArray.push([
            lastLeftIndex,
            endIndex,
            s.slice(lastLeftIndex, endIndex),
          ]);
        }
      }
    }
  }
  return ijArray;
};
```

但很遗憾，最终未能实现出来，但其中提出了一个很好的方法就是：

- 对比左右侧，并翻转右侧，这个思路是可以

  - 缺陷 1： 仅对最小值进行查询，无法区分 `bab`、`bb` 的情况

## 答案

经过查找，获得本答案的结果：

```js
const longestPalindrome = function(s) {
  if (!s.length || (s.length && s.length === 1)) return s[0] || "";
  let result = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const left = s.slice(i, j);
      const right = left
        .split("")
        .reverse()
        .join("");

      console.log("i=>", i, "j=>", j, "left=>", left, "right=>", right);
      if (left === right) {
        result = left.length > result.length ? left : result;
      }
    }
  }
  return result;
};
```

## 总结：

- 对于 `for` 循环还不是非常精通以及实际使用场景

- 对于比较常的想法，技巧存储不够，比如 `result = left.length > result.length ? left : result;`

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

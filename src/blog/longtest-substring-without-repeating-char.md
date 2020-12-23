# JavaScript 实现最长连续字符串组合

## 题目

给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1：

```
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例 2：

```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例 3：

```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

```

示例 4：

```
输入: s = ""
输出: 0
```

示例代码：

```js
var lengthOfLongestSubstring = function(s) {};
```

## 题解过程

代码：

```js
var lengthOfLongestSubstring = function(s) {
  let subStr = "";
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let findIndex = subStr.indexOf(s[i]);
    if (findIndex !== -1) subStr = subStr.substr(findIndex + 1);
    subStr += s[i];
    if (subStr.length > maxLen) maxLen = subStr.length;
  }
  return maxLen;
};
```

测试用例：

```js
lengthOfLongestSubstring("abcabc");
lengthOfLongestSubstring("aaaaaaaa");
lengthOfLongestSubstring("");
lengthOfLongestSubstring("queuecasdsa");
lengthOfLongestSubstring("aab");
```

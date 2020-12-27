/**
 * @TODO
 * @param {string} s
 * @return {string}
 */

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
// console.log("result==>", longestPalindrome("abbd")); // bb
// console.log("result==>", longestPalindrome("cbabc")); // xbb
console.log("result==>", longestPalindrome("babad")); // bab 或 aba
// console.log("result==>", longestPalindrome("cbbd")); // aba | baab
// console.log("result==>", longestPalindrome("baba")); // TODO bab 或 aba
// console.log("result==>", longestPalindrome("abcabc")); // TODO bab 或 aba
// console.log("result==>", longestPalindrome("abccba")); // abc
// console.log("result==>", longestPalindrome("ab")); // b | a
// console.log("result==>", longestPalindrome("abb")); // bb
// console.log("result==>", longestPalindrome("bb")); // bb
// console.log("result==>", longestPalindrome("bba")); // a | b
// console.log("result==>", longestPalindrome("babad")); // bab | aba
// console.log("result==>", longestPalindrome("cbbd")); // bb

// abbd => bb
// babad => bab、aba
// abccba => abc

// 现在提出一种新的方法，

/*
 0 1 2 3 
 a b b c
_____________ 倒叙，对比索引值一级值是不是相等，1=1&&b=b、2==2&&b=b、但这种趋向于中间聚拢的方法
 c b b a
 0 1 2 3

*/

/**
 * @TODO 
 * @param {string} s
 * @return {string}
 */

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
          const endIndex = i + (j+1);
          
          console.log("lastLeftIndex=>>",lastLeftIndex)
          ijArray.push([lastLeftIndex, endIndex, s.slice(lastLeftIndex, endIndex)]);

          // slice(1,3)
          //i:2 ,j:0

        }

        // console.log("left=>", left[j], "right=>", right[j], "j=>", j)
      }
    }
  }
  return ijArray;
};
// TODO 无法构造一个：有一个扩散查询的过程的程序

// console.log("result==>", longestPalindrome("abbd")); // bb
// console.log("result==>", longestPalindrome("cbabc")); // xbb
// console.log("result==>", longestPalindrome("babad")); // bab 或 aba
console.log("result==>", longestPalindrome("baabaad")); // aba | baab
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

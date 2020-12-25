/**
 * @param {string} s
 * @return {string}
 */
// var longestPalindrome = function(s) {
//   let subStr = "";
//   for (let i = 0; i < s.length; i++) {
//     let findIndex = subStr.lastIndexOf(s[i]);
//     // 如果找到
//     if (findIndex !== -1) {
//       console.log("找到 before==>", findIndex, subStr);
//       subStr = subStr.substr(0, findIndex + 1);
//       console.log("找到 after==>", subStr);
//     } else {
//       if (subStr !== "") {
//       } else {
//         // 如果没有找到
//         console.log("NOT before=>", subStr);
//         subStr = s.slice(i + 1); // Todo
//         console.log("NOT after=>", subStr);

//         console.log("最后一次===>", subStr, findIndex);
//       }
//     }
//   }
//   console.log(11);
//   return subStr;
// };

// var longestPalindrome = function(s) {
//   const asc = s; // 正序
//   let desc = s
//     .split("")
//     .reverse()
//     .join(""); // 倒叙

//   console.log("正序==>", asc);
//   console.log("逆序==>", desc);
//   const obj = {};
//   for (let i = 0; i < asc.length; i++) {
//     for (let j = 0; j < desc.length; j++) {
//       if (asc[i] === desc[j]) {
//         const first = asc.indexOf(asc[i]);
//         const last = asc.lastIndexOf(asc[i]);
//         if (last !== -1 && first !== -1 && last !== first) {
//           console.log("first=>", first, "last=>", "last");
//           obj[i] = desc[j];
//         }
//       }
//     }
//   }

//   const objValueArray = Object.values(obj); // TOD
//   const objKeyArray = Object.keys(obj);
//   console.log("obj===>", obj);
//   console.log("objValueArray==>", objValueArray);
//   console.log("objKeyArray==>", objKeyArray); // TODO 可能存在落差大的情况

//   let objStr = objValueArray.join("");
//   if (!objStr.length) return s[0] || "";

//   // TODO babad=>
//   if (
//     objValueArray.length == objKeyArray.length &&
//     objValueArray.length % 2 === 0 &&
//     objValueArray.length
//   ) {
//     objStr = objStr.slice(1);
//   }
//   return objStr;
// };

// const longestPalindrome = function(s) {
//   let sub = s;
//   if (!s.length || (s.length && s.length === 1)) return s[0] || "";
//   for (let i = 0; i < s.length; i++) {
//     const item = s[i];
//     const first = s.indexOf(item);
//     const last = s.lastIndexOf(item);

//     // 存在
//     if (last !== -1 && first !== -1) {
//       // 移除它左侧

//       if (last === 0 && first === 0) {
//         console.log("removeLeft");
//         sub = sub.slice(1);
//       }

//       // 移除它右侧
//       if (last === first && last === sub.length - 1) {
//         console.log("removeRight");
//         sub = sub.slice(0, sub.length - 1);
//       }

//       // 查找到a同时，处理掉右边情况，再循环一遍，如果找不到则移除a 的右侧
//       // test: abcabc

//       if (sub[0] !== sub[sub.length - 1]) {
//         sub = sub.slice(0,sub.length - 1);
//       }

//       // longestPalindrome(sub)
//       // TODO abcabc
//     }
//   }
//   return sub;
// };

// 寻找中心点

const longestPalindrome = function(s) {
  if (!s.length || (s.length && s.length === 1)) return s[0] || "";
  let even = 0; // 偶数两个相连的情况
  let evenStr = "";
  let odd = 0; // 奇数
  let oddStr = "";

  for (let i = 0; i < s.length; i++) {
    // bb 的情况

    // bcb 的情况
    if (s[i + 1]) {
      // 偶数情况:i 与 i+1 不相等，偶数 bb | acbbcdd
      if (s[i] === s[i + 1]) {
        even = i;
      }
      // 奇数情况：相隔着2个, aba
      if (s[i + 2]) {
        if (s[i] === s[i + 2]) {
          console.log("odd=>", s[i], i);
          odd = i;
        }
      }
    }
  }

  if (even !== 0 || odd !== 0) {
    console.log("偶数 even 分割线==>", even);
    console.log("奇数 odd 分割线==>", odd);
  }

  // 只存在奇数
  if (even === 0 && odd > 0) {
    // TODO
    // 当前 odd 距离end 的个数
    const oddToEnd = s.length - 1 - odd;

    let diffOddIndex = 0;
    if (odd > oddToEnd) diffOddIndex = oddToEnd - odd;
    else diffOddIndex = odd;

    oddStr = s.slice(odd - diffOddIndex, odd + diffOddIndex + odd);

    console.log("此时的奇数Str=>", oddStr);
  }
  // 只存在偶数，TODO 可能不太靠谱这个方法
  if (odd === 0 && even > 0) {
    // TODO
    const evenToEnd = s.length - 1 - even;

    let diffEvenIndex = 0;
    if (even > evenToEnd) diffEvenIndex = evenToEnd - even;
    else diffEvenIndex = even;

    console.log("evenToEnd===>", evenToEnd);
    console.log("diffEvenIndex===>", diffEvenIndex);
    let left_even_str = s.slice(0, even + 1);
    let right_even_str = s.slice(even + 1);

    console.log("before前面=>", left_even_str);
    console.log("before后面=>", right_even_str);

    let minLen = 0; // 最小长度

    if (left_even_str < right_even_str) {
      minLen = left_even_str.length;
      right_even_str = right_even_str.slice(0, minLen);
    } else {
      minLen = right_even_str.length;
      left_even_str = left_even_str.slice(0, minLen);
    }

    console.log("after前面=>", left_even_str);
    console.log("after后面=>", right_even_str);

    // 翻转

    // for(let i=0;i<minLen;i++){
    //   if()
    // }

    // const half = Math.ceil(s.length);
    // // 游标 前后 比较相等
    // for (let i = 0; i < half; i++) {
    //   for (let j = half; j > 0; j--) {
    //     // TODO abbd => bb
    //   }
    // }
  }

  // 既存在偶数，又存在奇数，比较哪个字符串长度
  if (odd > 0 && even > 0) {
    // TODO
  }

  if (oddStr.length && !evenStr.length) return oddStr;
  if (evenStr.length && !oddStr.length) return evenStr;
  if (oddStr.length && evenStr.length) {
    if (oddStr.length > evenStr.length) return oddStr;
    else return evenStr;
  }
};
// console.log("result==>", longestPalindrome("abbd")); // bb
console.log("result==>", longestPalindrome("acbbcdd")); // cbbc error
// console.log("result==>", longestPalindrome("abbdbbbb")); // bb
// console.log("result==>", longestPalindrome("abbbd")); // bb
// console.log("result==>", longestPalindrome("babad")); // bab 或 aba
// console.log("result==>", longestPalindrome("baabaad")); // aba | baab
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

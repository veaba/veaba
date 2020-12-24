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

const longestPalindrome = function(s) {
  let sub = s;
  if (!s.length || (s.length && s.length === 1)) return s[0] || "";
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    const first = s.indexOf(item);
    const last = s.lastIndexOf(item);

    // 存在
    if (last !== -1 && first !== -1) {
      // 移除它左侧

      if (last === 0 && first === 0) {
        console.log("removeLeft");
        sub = sub.slice(1);
      }

      // 移除它右侧
      if (last === first && last === sub.length - 1) {
        console.log("removeRight");
        sub = sub.slice(0, sub.length - 1);
      }

      // 查找到a同时，处理掉右边情况，再循环一遍，如果找不到则移除a 的右侧
      // test: abcabc
    }
  }

  console.log("sub=>", sub, "s=>", s);
  // TODO 处理baba 的情况
  if (sub.length <= s.length) {
    const newSubLen = sub.length;
    sub = sub.slice(s.length - newSubLen);
  }

  return sub;
};
// console.log("result==>", longestPalindrome("abbd")); // bb
// console.log("result==>", longestPalindrome("babad")); // bab 或 aba
console.log("result==>", longestPalindrome("baba")); // TODO bab 或 aba
console.log("result==>", longestPalindrome("abcabc")); // TODO bab 或 aba
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

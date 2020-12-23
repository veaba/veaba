var lengthOfLongestSubstring = function(s) {
  const len = s.length;
  let str = "";
  let maxLen = 0;
  for (let i = 0; i < len; i++) {
    const findIndex = str.indexOf(s[i]);
    if (findIndex !== -1) {
      // 如果找到，则丢弃 所找到之前的，并替换为之后的
      str = str.substr(findIndex + 1);
    }
    str += s[i];
    if (str.length > maxLen) maxLen = str.length;
  }
  console.log(maxLen);
  return maxLen;
};

lengthOfLongestSubstring("abcabc");
lengthOfLongestSubstring("aaaaaaaa");
lengthOfLongestSubstring("");
lengthOfLongestSubstring("queuecasdsa");
lengthOfLongestSubstring("aab");

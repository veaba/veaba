/**
 * 比较版本号
 * @param version1 string字符串
 * @param version2 string字符串
 * @return int整型
 */
function compare(version1, version2) {
  // write code here

  // todo 替换小数点，
  // 实例 1 "0.1" => "1.1" => -1
  // 存在一个1 个位
  // "1.1.1" => 111
  // "1.1.1"=>1*100*1*10*1 => 111
  // 1.11.1 => 1*100+11*10+1*1 => 100+110+1 =>211
  // 211>111 => ""

  // 示例2

  let left = version1.split("."); // [0,1]
  let right = version2.split("."); // [1.1]
  let len = 0;

  console.log(left, right);

  if (left.length > right.length) {
    len = left.length;
    // right fill
    const le = left.length - right.length;
    right = right.concat(Array(le).fill("0"));
  } else if (left.length < right.length) {
    // right fill
    const le = right.length - left.length;
    left = left.concat(Array(le).fill("0"));
    len = right.length;
  } else len = left.length;

  let leftCount = left.reduce((a, b) => a + b);
  let rightCount = right.reduce((a, b) => a + b);

  const diff = rightCount - leftCount;
  console.log("left=>", left, "right=>", right, "diff=>", diff);

  const countLen = (diff + "").length;
  const countArray = Array(len).fill("0");

  console.log("before==>", countArray);

  for (let i = 0; i < countLen; i++) {
    const diffStr = diff + "";
    console.log("for==>", i, diffStr);

    countArray[len - 1 - i] = diffStr[i];
  }

  console.log("========>", countArray);
  const ret = "-" + countArray.join(".");
  console.log("ret==>", ret);
  return ret;
}

compare("0.1", "1.1");
// compare("1.1", "1.11.1");
// compare("1.1.1", "1.2");
// 实例1：("0.1","1.1")   => 10->1
// 实例2:("1.1","1.11.1") => (211 -11) => 200 => 0.10.1

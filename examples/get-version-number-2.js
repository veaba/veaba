// 一种错误的思路
function compare(version1, version2) {
  let left = version1.split(".");
  let right = version2.split(".");

  const leftLen = left.length || 0;
  const rightLen = right.length || 0;

  let leftCount = 0;
  let rightCount = 0;
  left.forEach((item, index) => {
    // len =2
    let k = leftLen - index;
    leftCount += Number(item) * Math.pow(10, k);
  });
  // 预期 leftCount=1

  right.forEach((item, index) => {
    // len =2
    let k = leftLen - index;
    rightCount += Number(item) * Math.pow(10, k);
  });

  console.log("===>", "rightCount=>", rightCount, "leftCount=>", leftCount);

  console.log("diff==>", rightCount - leftCount);

  // TODO: 101 => 0.10

  // 这个方法基本行不通。因为 1.0.1 => 100 、 0.10.1 =>100
}

console.log("==>", compare("1.1", "1.11.1"));
// console.log("==>", compare("1.1.1", "1.2"));
// console.log("==>", compare("0.1", "1.1"));

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  // 判断奇数
  // 判断偶数

  const merge = [...nums1, ...nums2];
  const sortMerge = merge.sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });
  if (!sortMerge.length) return (0).toFixed(5);
  if (sortMerge.length % 2 == 0) {
    const half = sortMerge.length / 2;
    const halfArray = sortMerge.slice(half - 1, half + 1);
    return (halfArray.reduce((a, b) => a + b) / 2).toFixed(5);
  } else {
    const oddHalf = Math.round(sortMerge.length / 2);
    const [oddItem] = sortMerge.slice(oddHalf - 1, oddHalf);
    return (oddItem || 0).toFixed(5);
  }
};

// const a = findMedianSortedArrays([1, 3], [2]);
// const b = findMedianSortedArrays([0, 0], [0, 0]);
// const c = findMedianSortedArrays([2], []);
// const d = findMedianSortedArrays([1, 3], [2, 7]);

console.log(
  findMedianSortedArrays([1, 3], [2])
  //   findMedianSortedArrays([], [1]),
  //   findMedianSortedArrays([], [0]),
  //     findMedianSortedArrays([1, 2], [3, 4, 5]),
  //   findMedianSortedArrays([1, 2], [3, 4, 5]),
  //   findMedianSortedArrays([1, 2], [3, 4, 5])
);

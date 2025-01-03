/**
 * 来自 京东的一道面试题，要求给出结构化数组
 * 方法3 使用 递归
 */

const data = [
  { parentId: null, id: 1, name: '全国' },
  { parentId: 1, id: 2, name: '北京' },
  { parentId: 2, id: 3, name: '朝阳' },
  { parentId: 1, id: 4, name: '河北' },
];

const buildTree = (data, parentId = null, k = 0) => {
  return data
    .filter((item) => item.parentId === parentId)
    .map((item, i) => {
      console.log(i, item);
      item.children = buildTree(data, item.id, `k=${k},i=${i}`);
      return item;
    });
};

console.log('ret=>', buildTree(data));

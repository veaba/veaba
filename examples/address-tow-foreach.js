/**
 * 来自 京东的一道面试题，要求给出结构化数组
 * 方法1 使用 两次循环
 */

const data = [
  { parentId: null, id: 1, name: '全国' },
  { parentId: 1, id: 2, name: '北京' },
  { parentId: 2, id: 3, name: '朝阳' },
  { parentId: 1, id: 4, name: '河北' },
];

const map = {}; // 收集 key,v 对应的 map
const result = []; // 组织最终结果

// 收集 id
data.forEach((item) => {
  map[item.id] = item;
});

data.forEach((item) => {
  const parent = map[item.parentId];

  if (parent) {
    parent?.children ? parent.children.push(item) : (parent.children = [item]);
  } else {
    result.push(item);
  }
});

console.log('ret=>', result);

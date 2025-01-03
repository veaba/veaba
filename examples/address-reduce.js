/**
 * 来自 京东的一道面试题，要求给出结构化数组
 * 方法2 使用 reduce
 */

const data = [
  { parentId: null, id: 1, name: '全国' },
  { parentId: 1, id: 2, name: '北京' },
  { parentId: 2, id: 3, name: '朝阳' },
  { parentId: 1, id: 4, name: '河北' },
];

const object = data.reduce(
  (acc, cur) => {
    const { map, result } = acc;
    map[cur.id] = cur;

    const parent = map[cur.parentId];

    if (parent) {
      parent.children ??= [];
      parent.children.push(cur);
    } else {
      result.push(cur);
    }
    return acc;
  },
  { map: {}, result: [] }
);

console.log(JSON.stringify(object));

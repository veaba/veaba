# 循环下 limit 指定的任务栈个数

## 背景

由于某厂商的云摄像头存储在 `SD` 卡中的视频是按照 1 个小时一个文件夹，一分钟一段规则的，且视频格式不是标准 `.mp4` 文件，需要通过 `ffmpeg` 转换，但这个转换是很费时间，加上计算机的资源有效，无法同时进行这么多的异步任务处理。后续还需要进行合并小视频为大视频的过程。

由此衍生出来一个实际的问题，如何在有限的计算机资源下，饱和同并发的任务执行。

## 题目

如何在 1000 次循环，每次循环都会执行一次异步任务，异步耗费时间，且计算机资源有限，因此限制仅支持同时处理 10 个异步任务。

## 分析

根据题目，我们抽象问题，如下：

1. 构造一个任务栈，`stacks = []` , 最大 ``limit = 10 `个（后续支持可指定）。

2. 如果 `stacks` 小于 `limit` 个数，则往后 `push` 异步事件。

3. 否则，等待完成其中只一个，后续再插入，始终保证 `stacks = 10个异步任务`，饱和式执行任务。

### JS 自带异步编程

```js
function asyncTask(i) {
  setTimeout(() => {
    console.log("===> task: ", i);
  }, Math.ceil(Math.random() * 2));
}

function handlerTasks() {
  for (let i = 0; i < 20; i++) {
    asyncTask(i);
  }
}

handlerTasks();
```

结果同时刻开始执行 20 个异步任务：

```s
===> task:  1
===> task:  2
===> task:  5
===> task:  6
===> task:  8
===> task:  11
===> task:  12
===> task:  15
===> task:  17
===> task:  0
===> task:  3
===> task:  4
===> task:  7
===> task:  9
===> task:  10
===> task:  13
===> task:  14
===> task:  16
===> task:  18
===> task:  19
```

实验代码：

```js
/**
1. 构造一个任务栈，`stacks = []` , 最大 ``limit = 10 `个（后续支持可指定）。

2. 如果 `stacks` 小于 `limit` 个数，则往后 `push` 异步事件。

3. 否则，等待完成其中只一个，后续再插入，始终保证 `stacks = 10个异步任务`，饱和式执行任务。
*/

const stacks = []; // 异步任务栈
const limit = 10; // 限制最大并发任务
let events = 20;

function asyncTask(i, index) {
  console.log("params=>", arguments);
  let random = Math.ceil(Math.random() * 5);
  setTimeout(
    (time) => {
      console.log("===> task: ", i, "===> time: ", time + "s");
      stacks.splice(index, 1); // 事件完成后移除
      // TODO push 到 stacks 里去
      if (events > 0) {
        asyncTask.call(this, i, index); // 执行一次，紧接着执行另外一次，就不需要放到stacks 里了
      }
      events--;
    },
    random * 1000,
    random
  );
}

function handlerTasks() {
  let pushIndex = 0;
  for (let j = 0; j < events; j++) {
    if (stacks.length < limit) {
      stacks.push(asyncTask.bind(this, j));
    }
  }
  runTasks();
}
function runTasks() {
  stacks.forEach((item, index) => {
    item(index);
  });
}

function app() {
  console.time("time");
  handlerTasks(events);
  //   console.log("last task=>", stacks);
  console.timeEnd("time");

  setInterval(() => {
    console.log("stacks=>", stacks);
  }, 1000);
}

app();
```

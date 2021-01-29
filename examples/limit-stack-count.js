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
        asyncTask.call(this, i, index);
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

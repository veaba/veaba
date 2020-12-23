# 原创：JavaScript “卧倒”重组数组

> 这道面试题，真的很简单。但是临场发挥脑袋一片空白，虽然找到规律，但还是一直在重复走神。真的很不在状态

## 题目

```
["abc", "def", "hig"];  => ['adh', 'bei', 'cfg']
```

## 题解过程

简化规律：

```
123 456 789 => 147 258 369 

1 2 3

4 5 6

7 8 9
```

- 但事实上，这种总结是不正常的规律

- 实际上，应该是这么说：每次循环 `item` 都拼接

一个大循环，分别是数组的元素，下个循环中，如果有值，则拼接在后面

```js
const arr = ["abc", "def", "hig"]

const temp = []

arr.forEach((item,index)=>{

    for(let i in item){
        if(temp[i]&&temp[i].length){
            temp[i]+=item[i]
        }else{
            temp.push(item[i])
        }
    }
})
console.log("res==>",temp)
```
// TS核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。
// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
function printLabel(labelObj) {
    console.log(labelObj.label);
}
// printLabel({
//     dsd: "ddd",
// }) //error
// printLabel({
//     dsd: "ddd", //对象文字可以只指定已知属性，并且“dsd”不在类型“{ label: string; }”中
//     label:"ddsd"
// })//error
printLabel({
    label: "ddd"
});
// 函数可选参数:参数后面加个?符号
function SquareConfig(square) {
    if (square.color) {
        console.log(square.color);
    }
    ;
    if (square.width) {
        console.log(square.width);
    }
}
SquareConfig({
    color: "test"
});
SquareConfig({
    width: 1234
});
SquareConfig({
    color: "blue",
    width: 123
});
SquareConfig({});
// 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// 对象文字可以只指定已知属性，并且“height”不在类型“Square”中
// SquareConfig({
//     height: 0,
//     width:123
// }) //error
// 绕开这些检查非常简单。 最简便的方法是使用类型断言： 变量 as 类型
SquareConfig({
    height: 0,
    width: 123
});
let p1 = {
    x: 1
};
// 对数组使用：使用ReadonlyArray<t> 相似的还有ReadonlyMap ReadonlySet
let arr = [1, 3, 4, 5, 6];
// ReadonlyArray移除了所有诸如push pop splice等操作数组元素的方法
// 另外就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。
// 但是你可以用类型断言重写：
let a = arr;
a.push(1);
console.log(arr, a); //[ 1, 3, 4, 5, 6, 1 ] [ 1, 3, 4, 5, 6, 1 ] 显然同样是浅拷贝
let test = {
    width: 222,
    color: "red",
    hello: "world"
};
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    // return false;
    return result > -1;
};
//函数的参数名不需要与接口里定义的名字相匹配。
let mySearch2 = function (src, sub) {
    return src.search(sub) > -1;
};
let myArray;
myArray = ["BOB", "JACK"];
let myStr = myArray[0];
class Clock {
    constructor(h, m) { }
}
// 强制类型转换{}为Pen
let pen = {};
pen.color = "blue";
pen.size = 233;
function getCounter() {
    let counter = function (start) { console.log(start); };
    counter.interval = 1000;
    counter.reset = function () { console.log("reset"); };
    return counter;
}
let c = getCounter();
c(1);
console.log(c.interval);
c.reset();

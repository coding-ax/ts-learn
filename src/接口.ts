// TS核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。
// 接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
function printLabel(labelObj: { label: string }): void {
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
})

interface Square {
    color?: string,
    width?: number
}

// 函数可选参数:参数后面加个?符号
function SquareConfig(square: Square): void {
    if (square.color) {
        console.log(square.color)
    };
    if (square.width) {
        console.log(square.width)
    }
}

SquareConfig({
    color: "test"
})
SquareConfig({
    width: 1234
})
SquareConfig({
    color: "blue",
    width: 123
})
SquareConfig({})

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
} as Square)

// 规定属性为只读属性:使用readonly关键字
interface Point {
    readonly x: number,
    readonly y?: number
}
let p1: Point = {
    x: 1
}

// 对数组使用：使用ReadonlyArray<t> 相似的还有ReadonlyMap ReadonlySet
let arr: ReadonlyArray<number> = [1, 3, 4, 5, 6]
// ReadonlyArray移除了所有诸如push pop splice等操作数组元素的方法
// 另外就算把整个ReadonlyArray赋值到一个普通数组也是不可以的。
// 但是你可以用类型断言重写：
let a: Array<number> = arr as number[];
a.push(1);
console.log(arr, a)  //[ 1, 3, 4, 5, 6, 1 ] [ 1, 3, 4, 5, 6, 1 ] 显然同样是浅拷贝

//readonly vs const
// 最简单判断该用readonly还是const的方法是看要把它做为变量使用还是做为一个属性。 
// 做为变量使用的话用 const ，若做为属性则使用readonly。
// 如果 Square带有上面定义的类型的color和width属性，并且还会带有任意数量的其它属性，那么我们可以这样定义它：
interface newSquare {
    width?: number,
    color?: string,
    [propName: string]: any
}
let test: newSquare = {
    width: 222,
    color: "red",
    hello: "world"
}

// 接口函数类型
//为了使用接口表示函数类型，我们需要给接口定义一个调用签名。 
//它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。
interface searchFunc{
    // 定义调用前面 (参数列表):返回类型
    // 参数列表中每个参数都需要名字和类型
    (source: string, subString: string): boolean;
}
let mySearch: searchFunc;
mySearch = function (source: string, subString: string): boolean {
    let result = source.search(subString);
    // return false;
    return result > -1;
}

//函数的参数名不需要与接口里定义的名字相匹配。
let mySearch2: searchFunc = function (src: string, sub: string): boolean{
    return src.search(sub) > -1;
}

//使用可索引的类型
// 通过索引得到的类型
interface StringArray{
    [index:number]:string
}
let myArray: StringArray;
myArray = ["BOB", "JACK"]
let myStr: string = myArray[0];
//TypeScript支持两种索引签名：字符串和数字
// 可以同时使用两种类型的索引，但是数字索引的返回值必须是字符串索引返回值类型的子类型。


// 类类型接口实现
interface ClockInterface{
    currentTime:Date
}
class Clock implements  ClockInterface{
    currentTime: Date;
    constructor(h:number,m:number){}
}
// 一个接口可以继承多个几接口
interface Shape{
    color:string
}
interface PenStroke{
    size:number
}
interface Pen extends Shape, PenStroke{
    
}
// 强制类型转换{}为Pen
let pen: Pen = <Pen>{};
pen.color = "blue"
pen.size = 233

//混合类型
//一个对象可以同时做为函数和对象使用，并带有额外的属性。
interface Counter{
    (start: number): string,
    interval: number,
    reset():void
}
function getCounter(): Counter{
    let counter = <Counter>function (start: number) { console.log(start)};
    counter.interval = 1000;
    counter.reset = function () {console.log("reset") };
    return counter;
}
let c = getCounter();
c(1);
console.log(c.interval)
c.reset();
function add(x, y) {
    return x + y;
}
// 对于返回值，我们使用=>符号使其更加清晰
// 我们可以给每个参数添加类型之后再为函数本身添加返回值类型。 TypeScript能够根据返回语句自动推断出返回值类型，因此我们通常省略它。
function del(x, y) {
    return x - y;
}
let myAdd = function (x, y) {
    return x + y;
};
// 如之前提到的，返回值类型是函数类型的必要部分，
// 如果函数没有返回任何值，你也必须指定返回值类型为 void而不能留空。
// 尝试这个例子的时候，你会发现如果你在赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型
let myDel = function (x, y) {
    return x - y;
};
// 使用问号让参数可选
let buildName = function (firstName, lastName) {
    return firstName + " " + (lastName || "");
};
console.log(buildName("J"));
// 默认参数
function sayHello(name, age = 18) {
    return `hello! ${name},your age is ${age}!`;
}
console.log(sayHello("AX"));
//hello! AX,your age is 18!
console.log(sayHello("AX", 20));
//AX 20
//与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。 
//如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值。
function sayGoodBye(name = "AX", age) {
    return `GoodBye! ${name},your age is ${age}!`;
}
console.log(sayGoodBye("dd", 20));
console.log(sayGoodBye(undefined, 20));
//剩余参数
// 在JavaScript里，你可以使用 arguments来访问所有传入的参数。
// 在TypeScript里，你可以把所有参数收集到一个变量里：
// 写法 ...参数名:类型(数组)
// 必须加上... 否则就是当数组处理(解构赋值)
function watchArgs(name, ...args) {
    console.log(args);
}
watchArgs("AX", "test", "hello"); //[ 'test', 'hello' ]
// 箭头函数能保存函数创建时的 this值，而不是调用时的值：

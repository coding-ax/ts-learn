// typeScript声明变量和python中有些类似：大多是以 
// let 变量名: 变量类型 = 赋值   的形式进行
// boolean声明
let err = false;
// number声明
let number1 = 1;
// 字符串声明
let str = "hello typescript";
// 数组类变量声明
//  1.泛型声明 
let list1 = [1, 2, 3];
// 2.直接声明
let list2 = [1, 2, 3];
// 3.无类型数组(any)
let list3 = ['222', 222];
console.log(list1, list2, list3);
// 元组
let tuple = ["sss", 111];
console.log(tuple);
tuple[0].substr(1);
// 枚举:enum类型是对JavaScript标准数据类型的一个补充。 
// 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
console.log(Color); //{ '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
let x = Color.Green;
console.log(x); // 1
// 枚举赋值,要赋值就必须都赋值,但是不要求类型一致
var Decode;
(function (Decode) {
    Decode["utf8"] = "90%";
    Decode[Decode["gbk"] = 80] = "gbk";
    Decode["gb2312"] = "70%";
})(Decode || (Decode = {}));
;
let utf = Decode.utf8;
console.log(utf); //"90%"
let gbk = Decode.gbk;
console.log(gbk); //80
// any类型 在编程阶段还不清楚类型的变量指定一个类型。any允许在编译时可选择地包含或移除类型检查
let notSure = {
    test: function () {
        console.log("hello");
    }
};
notSure.test(); // hello
// Object类型 Object和any有相似的作用，就像它在其它语言中那样。 
// 但是 Object类型的变量只是允许你给它赋任意值 - 
//但是却不能够在它上面调用任意的方法，即便它真的有这些方法
let Obj = {
    test: function () {
        console.log("hello");
    }
};
// Obj.test(); // 显示error
//void类型
//它像是与any类型相反，它表示没有任何类型。
//当一个函数没有返回值时，你通常会见到其返回值类型是 void ：
function warnUser() {
    console.log("hello it's error");
}
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable = null;
let unusable2 = undefined;
// undefined和null两者各自有自己的类型分别叫做undefined和null。 
//和 void相似，它们的本身的类型用处不是很大：
let u = undefined;
let n = null;
// 然而， 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
//never类型表示的是那些永不存在的值的类型。 
// 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
// 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// 类型断言
// 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
// 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。
// 写法有两种
// 1.使用尖括号指定
let someValue = "this is a string";
let strLength = someValue.length;

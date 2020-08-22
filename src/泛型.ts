function identity<T>(arg: T) {
    return arg
}
console.log(typeof identity("ddd")) //string
console.log(typeof identity(123)) //number
identity <string>("dddd");
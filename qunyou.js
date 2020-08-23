
async function axiosOne() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: 'test'
            })
        }, 500)
    })
}
async function data() {
    const codes = await axiosOne();
    return new Promise(resolve => {
        aa = codes.data;
        console.log(1);
        resolve(aa)
    })
}
// async function  main() {
//     let a = await data();
//     console.log(2)
//     console.log(3)
// }
// main()
let a = null;
a = data();
while (a==null) {
}
console.log(2)
console.log(3)
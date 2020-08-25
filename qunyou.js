
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
async function  main() {
    let a = await data();
    console.log(a)
    console.log(2)
    console.log(3)
}
main()
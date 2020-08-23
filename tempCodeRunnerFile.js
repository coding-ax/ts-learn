async function axiosOne() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: 'test'
            })
        }, 500)
    })
}
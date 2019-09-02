let toupper = value => {
    return value.toUpperCase();
}

let cut = value => {
    if (!value) {
        return
    }
    let str = value.match(/(?<=>).*?(?=<)/g)
    if (!str) {
        return value
    }
    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += str[i]
    }
    return res
}
let handle = value => {
    if (!value) {
        return
    }
    return 'https://www.chengyu2.com' + value
}

export { toupper, cut, handle }
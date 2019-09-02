const $open = function(path, router, key) {
    router.push({
        path: path,
        query: {
            arg1: key,
        }
    })
}


const $dragonsearch = function(that, words) {
    if (words) {
        that.result = words;
    } else {
        that.result = "查询**的结果";
    }
    that.showresult = true;
}

export { $open, $dragonsearch }
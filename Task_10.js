function mostXters(str) {
    let result = {}
    for (let char of str) {
        if (result[char] === undefined) {
            result[char] = 1
        } else {
            result[char] += 1
        }
    }
    let res = []
    let max
    for (let key of Object.keys(result)) {
        if (max === undefined) {
            max = key
        } else {
            if (result[key] > result[max]) {
                max = key
                res = []
            }
            else if (result[key] === result[max]) {
                res.push(key)
            }
        }
    }
    res.push(max)
    return res.length > 1 ? res : res[0]
}
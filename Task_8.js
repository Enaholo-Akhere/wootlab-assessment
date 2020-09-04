function countThrees(numb) {
    let result = { count: 0, numbers: [] }
    for (let i = 3; i <= numb; i++) {
        let strIndex = i.toString().indexOf(3)
        if (strIndex !== -1) {
            for (let char of i.toString()) {
                if (char == 3) {
                    result.count += 1
                }
            }
            result.numbers.push(i)
        }
    }
    return result
}
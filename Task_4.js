function validator(password) {
    let numRegex = /[0-9]/
    let alpRegex = /[a-zA-Z]/
    let specialReg = /\W/;

    let numbeTest = numRegex.test(password)
    let alpTest = alpRegex.test(password)
    let specialXters = specialReg.test(password)
    if (numbeTest && !alpTest && !specialXters) {
        return 'weak'
    }
    else if (!numbeTest && alpTest && !specialXters) {
        return 'very weak'
    }
    else if (numbeTest && alpTest && !specialXters) {
        return 'strong'
    }
    else if (numbeTest && alpTest && specialXters) {
        return 'very strong'
    } else {
        return 'no password provided'
    }
}
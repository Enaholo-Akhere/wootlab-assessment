function palindrom(str) {
    let isPal = str.split('').reverse().join('') === str
    if (isPal) return 'yes'
    return 'No'
}
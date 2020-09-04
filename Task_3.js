function primeArray(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
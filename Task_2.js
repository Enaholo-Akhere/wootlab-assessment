function isPrime(num) {
    if (num === 1) return false
    const root = Math.sqrt(num)
    let prime = true
    for (let i = 2; i <= root; i++) {
        if (num % i === 0) {
            prime = false
        }
    }
    return prime
}
function standardDeviation(arr) {
    const mean = arr.reduce((a, b) => a + b) / arr.length
    const newAr = arr.map((a) => (a - mean) ** 2)
    const variance = newAr.reduce((a, b) => a + b) / newAr.length
    return Math.sqrt(variance)
}
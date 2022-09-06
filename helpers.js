module.exports = {
    between(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }
}
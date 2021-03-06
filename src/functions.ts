export const getRandomNumberInRange = (min: number = 0, max: number) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

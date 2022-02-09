export const randomIntRange = (min: number, max:number) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomColor = (colors: string[]) => {
    return colors[Math.floor(Math.random() * colors.length)]
}
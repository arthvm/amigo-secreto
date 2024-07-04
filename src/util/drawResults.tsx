import shuffle from "just-shuffle";

export function drawResults(list: string[]): Map<string,string> {
    const shuffledList = shuffle(list)
    const result = new Map<string,string>()

    for(let i = 0; i<list.length; i++){
        const drawIndex = i === (list.length - 1) ? 0 : i + 1;
        result.set(shuffledList[i], shuffledList[drawIndex])
    }

    return result
}
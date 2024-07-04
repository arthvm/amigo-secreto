import { drawResults } from "./drawResults"

describe('A given draw', () => {
    test('Shouldn;t allow a participant to draw himself', () =>{
        const participants = ["Arthur", "Mariano", "Developer", "React", "Vitest", "Jest"]
        const result = drawResults(participants)
        participants.forEach(participant => {
            const secretFriend = result.get(participant)
            expect(secretFriend).not.toEqual(participant)
        })
    })
})
import {Example} from "../main/example";

describe('example test', () => {
    it("should give sum of a + b when adding a and b", () => {
        let example: Example = new Example();
        expect(example.add(1, 2)).toBe(3);
    })

    it("should give sum of a + c when adding a and c", () => {
        let example: Example = new Example();
        expect(example.add(3, 3)).toBe(6);
        expect(example.add(6, 3)).toBe(7);
    })
})
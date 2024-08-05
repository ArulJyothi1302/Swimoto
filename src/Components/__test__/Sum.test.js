import { Sum } from "../Sum";

test("Sum of two numbers",()=>{
    const result=Sum(3,4);
    expect(result).toBe(7)
})
test("Diff of two",()=>{
    const result = Sum(2,2);
     expect(result).toBe(4)
})
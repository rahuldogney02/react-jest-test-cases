import sum from "./sum";

let a = 10;
let b = 80;
let output = 90;
test('testing for sum function',()=>{
    expect(sum(a,b)).toBe(output);
})
test('testing for sum function not cases',()=>{
    expect(sum(a,b)).not.toBe(output<0);
},1500000)
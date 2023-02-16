const {solution} = require("./app.js");


describe("Example test cases", () => {
  test("Test case in description", () => {
    expect(solution(1, 5)).toBe(2);
  });
});

// describe("Example test cases", function() {
//   it("Test case in description", function() {
//     assert.equal(solution(1, 5), 2);
//   });
// });

// describe("One more test case", function() {
//   it("start = 3 & finish = 3", function() {
//     assert.equal(solution(3, 3), 0);
//   });
// });

// describe("Mew", function() {
//   it("start = 2 & finish = 4", function() {
//     assert.equal(solution(2, 4), 2);
//   });
// });

// describe("Final test cases", function() {
//   for (let test = 1 ; test <= 47 ; test++) {
//     let sInput = Math.round(Math.random() * 998) + 1;
//     let fInput = sInput - 1 + Math.round(Math.random() * 998) + 1;
//     let eOutput = generateAnswer(sInput, fInput)
//     it("Random test cases, start: " + sInput + ", finish:" + fInput, function() {
//       assert.equal(solution(sInput, fInput), eOutput);
//     });
//   }
// });
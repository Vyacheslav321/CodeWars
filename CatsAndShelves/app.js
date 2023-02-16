// Solution 
function solution(start, finish) 
{
  let meow = 0;
  let jump = start;
  if (jump+3 <= finish) {
    do {
      jump = jump+3;
      meow++
      console.log(jump, meow)
    } while  (jump+3 <= finish)
  }
  if (jump < finish) {
    do {
      jump++
      meow++
      console.log(jump, meow)
    } while (jump < finish)
  }
  return meow
}

module.exports = {solution}
"use strict";

const tags = ["js", "week 3"];
const scores = [10, 25, 18, 30];

let totalScore = 0;

for (let score of scores) {
  totalScore = totalScore + score;
}
console.log(totalScore);

tags.forEach(function (tag) {
  console.log(tag);
});

const doubleScores = scores.map(function (score) {
  return score * 2;
});
console.log(doubleScores);

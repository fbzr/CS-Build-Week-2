/*
In a city-state of n people, there is a rumor going around that one of the n people is a spy for the neighboring city-state.

The spy, if it exists:

Does not trust anyone else.
Is trusted by everyone else (he's good at his job).
Works alone; there are no other spies in the city-state.
You are given a list of pairs, trust. Each trust[i] = [a, b] represents the fact that person a trusts person b.

If the spy exists and can be found, return their identifier. Otherwise, return -1.

Example 1:

Input: n = 2, trust = [[1, 2]]
Output: 2
Explanation: Person 1 trusts Person 2, but Person 2 does not trust Person 1, so Person 2 is the spy.
Example 2:

Input: n = 3, trust = [[1, 3], [2, 3]]
Output: 3
Explanation: Person 1 trusts Person 3, and Person 2 trusts Person 3, but Person 3 does not trust either Person 1 or Person 2. Thus, Person 3 is the spy.
*/

function uncover_spy(n, trust) {
  // n = number of people in the city

  // trust = relationship person[0] one trusts person[1] = [[1, 3], [2, 3]]

  // value = [trustedBy, trusting]
  // spy is person with
  // trustedBy === n-1
  // trusting = 0
  const dataset = {};

  let spy = null;
  let suspectsCount = 0;

  // loop through all the relationships and add each person to the dataset obj
  // obj key is person
  // obj value is [trusted by count, trusting count]
  // the spy will be the person with [trustedBy===n-1, trusting===0]
  trust.forEach((relationship, index) => {
    const trusting = relationship[0];
    const trusted = relationship[1];

    if (trusting in dataset) {
      dataset[trusting] = [dataset[trusting][0], dataset[trusting][1] + 1];
    } else {
      dataset[trusting] = [0, 1];
    }

    if (trusted in dataset) {
      dataset[trusted] = [dataset[trusted][0] + 1, dataset[trusted][1]];
    } else {
      dataset[trusted] = [1, 0];
    }

    // the spy will be the person with [trustedBy===n-1, trusting===0]
    if (
      // index === trust.length - 1 &&
      dataset[trusted][0] === n - 1 &&
      dataset[trusted][1] === 0
    ) {
      suspectsCount++;
      spy = trusted;
    }

    if (trusting === spy) {
      suspectsCount--;
      spy = -1;
    }
  });

  if (suspectsCount === 1) {
    return spy;
  }

  return -1;
}

// test 1
// input: n=2, trust=[[1,2]]
// Expected Output: 2
console.log("Expected: 2");
console.log(uncover_spy(2, [[1, 2]]));

// test 2
// input: n=4, trust=[[1,2], [3,4]]
// Expected Output: -1
console.log("Expected: -1");
console.log(
  uncover_spy(4, [
    [1, 2],
    [3, 4],
  ]),
);

// test 3
// input: n=3, trust=[[1,3], [2,3]]
// Expected Output: 3
console.log("Expected: 3");
console.log(
  uncover_spy(3, [
    [1, 3],
    [2, 3],
  ]),
);

// test 4
// input: n=3, trust=[[1,3], [2,3], [3,1]]
// Expected Output: -1
console.log("Expected: -1");
console.log(
  uncover_spy(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ]),
);

// test 5
// input: n=3, trust=[[1,2], [2,3]]
// Expected Output: -1
console.log("Expected: -1");
console.log(
  uncover_spy(3, [
    [1, 2],
    [2, 3],
  ]),
);

// test 6
// input: n=4, trust=[[1,3], [1,4], [2,3], [2,4], [4,3]]
// Expected Output: 3
console.log("Expected: 3");
console.log(
  uncover_spy(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ]),
);

// test 7
// Expected Output: 99
console.log("Expected: 99");
console.log(
  uncover_spy(99, [
    [14, 99],
    [38, 99],
    [17, 99],
    [3, 99],
    [34, 99],
    [37, 99],
    [82, 99],
    [76, 99],
    [71, 99],
    [2, 99],
    [91, 99],
    [95, 99],
    [5, 99],
    [56, 99],
    [7, 99],
    [25, 99],
    [20, 99],
    [54, 99],
    [72, 99],
    [67, 99],
    [43, 99],
    [93, 99],
    [94, 99],
    [26, 99],
    [81, 99],
    [87, 99],
    [36, 99],
    [79, 99],
    [22, 99],
    [11, 99],
    [23, 99],
    [52, 99],
    [86, 99],
    [19, 99],
    [88, 99],
    [55, 99],
    [4, 99],
    [21, 99],
    [51, 99],
    [83, 99],
    [92, 99],
    [73, 99],
    [57, 99],
    [89, 99],
    [48, 99],
    [29, 99],
    [59, 99],
    [53, 99],
    [6, 99],
    [24, 99],
    [65, 99],
    [47, 99],
    [90, 99],
    [45, 99],
    [18, 99],
    [31, 99],
    [13, 99],
    [49, 99],
    [64, 99],
    [97, 99],
    [70, 99],
    [40, 99],
    [60, 99],
    [28, 99],
    [50, 99],
    [68, 99],
    [77, 99],
    [35, 99],
    [78, 99],
    [12, 99],
    [1, 99],
    [30, 99],
    [8, 99],
    [61, 99],
    [85, 99],
    [15, 99],
    [96, 99],
    [98, 99],
    [69, 99],
    [62, 99],
    [84, 99],
    [58, 99],
    [27, 99],
    [42, 99],
    [44, 99],
    [66, 99],
    [16, 99],
    [9, 99],
    [41, 99],
    [39, 99],
    [32, 99],
    [80, 99],
    [10, 99],
    [63, 99],
    [74, 99],
    [46, 99],
    [33, 99],
    [75, 99],
  ]),
);

// test case not verified on codesignal
console.log("Expected: 3");
console.log(
  uncover_spy(3, [
    [1, 3],
    [2, 3],
    [1, 2],
  ]),
);

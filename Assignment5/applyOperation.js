function applyOperation(numbers, operation) {
  return numbers.map(operation);
}

const nums = [1, 2, 3, 4];

const doubled = applyOperation(nums, function(n) { return n * 2; });
console.log("Doubled:", doubled);

const squared = applyOperation(nums, function(n) { return n * n; });
console.log("Squared:", squared);

const assert = require("assert");
const { add } = require("../src/app.js");

assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-55, 50), 0);

console.log("✅ All tests passed!");
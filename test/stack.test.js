const assert = require("assert");
const Stack = require("../src/stack");

describe("Stack", () => {
  describe("Push operation", () => {
    const stack = Stack();

    [1, 2, 3].forEach(x => stack.push(x));

    it("Valid push message", () => {
      assert.equal(
        stack.push(4),
        `${stack.peek()} is pushed. Stack size is ${stack.size()}`
      );
    });

    it("Check data after pop", () => {
      assert.equal(stack.pop(), `4 removed. Stack size is ${stack.size()}`);
    });

    it("Check stack data", () => {
      assert.equal(JSON.stringify(stack.show()), "[1,2,3]");
    });
  });
});

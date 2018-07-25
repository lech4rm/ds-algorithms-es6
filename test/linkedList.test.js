const assert = require("assert");
const LinkedList = require("../src/linkedList");

describe("LinkedList", () => {
  describe("Additions", () => {
    const linkedList = LinkedList();

    [1, 2, 3].forEach(x => linkedList.addToHead(x));

    [4, 5, 6].forEach(x => linkedList.addToTail(x));

    it("Check add to head and Check add to tail", () => {
      assert.equal(linkedList.show(), "3 -> 2 -> 1 -> 4 -> 5 -> 6");
    });
  });

  describe("Deletions", () => {
    it("Removing head", () => {
      const linkedList = LinkedList();

      [1, 2, 3].forEach(x => linkedList.addToHead(x));
      linkedList.removeHead();
      linkedList.removeHead();
      assert.equal(linkedList.show(), "1");
    });

    it("Removing tail", () => {
      const linkedList = LinkedList();

      [1, 2, 3].forEach(x => linkedList.addToHead(x));
      linkedList.removeTail();
      linkedList.removeTail();
      assert.equal(linkedList.show(), "3");
    });
  });

  describe("Inserting", () => {
    const linkedList = LinkedList();
    [1, 35, 6, "leo", true].forEach(x => linkedList.addToTail(x));

    it("Inserting before", () => {
      linkedList.insert("leo", "j", 1);
      assert.equal(linkedList.show(), "1 -> 35 -> 6 -> j -> leo -> true");
    });

    it("Inserting after", () => {
      linkedList.insert("leo", "allen", 2);
      assert.equal(
        linkedList.show(),
        "1 -> 35 -> 6 -> j -> leo -> allen -> true"
      );
    });
  });
});

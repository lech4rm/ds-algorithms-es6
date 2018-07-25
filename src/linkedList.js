const LinkedList = () => {
  const linkedList = { head: null, tail: null },
    Node = (value = null, next = null, prev = null) => {
      return {
        value,
        next,
        prev
      };
    };

  const methods = {
    show: () => {
      function getList(node, str = "") {
        if (node.next) {
          str += `${node.value} -> `;
          return getList(node.next, str);
        } else {
          str += `${node.value}`;
          return str;
        }
      }
      return getList(linkedList.head);
    },
    addToHead: val => {
      const node = Node(val, linkedList.head);
      if (linkedList.head) {
        linkedList.head.prev = node;
      } else {
        linkedList.tail = node;
      }
      linkedList.head = node;
    },
    addToTail: val => {
      const node = Node(val, null, linkedList.tail);
      if (linkedList.tail) {
        linkedList.tail.next = node;
      } else {
        linkedList.head = node;
      }
      linkedList.tail = node;
    },
    /**
     * @param placement {Number} // 1 - Insert before, 2 - Insert after
     */
    insert: (node, value, placement) => {
      if (methods.search(node).found) {
        const foundNode = methods.search(node).value;
        let newNode;
        if (placement === 1) {
          newNode = Node(value, foundNode, foundNode.prev);
          if (!foundNode.prev) {
            linkedList.head = newNode;
          } else {
            foundNode.prev.next = newNode;
          }
        } else {
          newNode = Node(value, foundNode.next, foundNode);
          if (!foundNode.next) {
            linkedList.tail = newNode;
          }
          foundNode.next = newNode;
        }
      }
    },
    removeHead: () => {
      if (linkedList.head) {
        linkedList.head = linkedList.head.next;
        linkedList.head.prev = null;
      }
    },
    removeTail: () => {
      if (linkedList.tail) {
        linkedList.tail = linkedList.tail.prev;
        linkedList.tail.next = null;
      }
    },
    search: val => {
      function searchList(node) {
        if (node.next && node.value !== val) {
          return searchList(node.next);
        } else {
          return node.value === val
            ? { found: true, value: node }
            : { found: false, value: null };
        }
      }
      return searchList(linkedList.head);
    }
  };

  return Object.freeze(methods);
};

module.exports = LinkedList;

const Stack = (size = 100) => {
  let _array = [];
  let methods = {
    push: val => {
      if (_array.length <= size) {
        _array.push(val);
        return `${val} is pushed. Stack size is ${_array.length}`;
      } else {
        return "Stack is full";
      }
    },
    peek: () => {
      return _array[_array.length - 1];
    },
    show: () => {
      return _array;
    },
    size: () => {
      return _array.length;
    },
    pop: () => {
      const elem = _array.splice(-1);
      return `${elem} removed. Stack size is ${_array.length}`;
    }
  };

  return Object.freeze(methods);
};

module.exports = Stack;

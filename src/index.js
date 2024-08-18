module.exports = function check(str, bracketsConfig) {
  const bracketsMap = {};

  for (const [open, close] of bracketsConfig) {
    bracketsMap[open] = close;
  }
  const stack = [];
  for (const char of str) {
    if (bracketsMap[char]) {
      if (char === bracketsMap[char] && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else {
      const lastOpen = stack.pop();
      if (bracketsMap[lastOpen] !== char) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

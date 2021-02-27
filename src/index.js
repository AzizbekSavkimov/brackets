module.exports = function check(str, bracketsConfig) {
  let stack = [], 
      zero = 0;
  for (let i = zero; i <= str.length - 1; i++) {
      let find = false;
      for (let j = zero; j < bracketsConfig.length; j++) {
          if (str[i] === bracketsConfig[j][zero]) {
              find = true;
              if (bracketsConfig[j][zero] === bracketsConfig[j][1]) {
                  if (stack[stack.length - 1] === bracketsConfig[j][zero]) {
                      stack.pop();
                      break;
                  }
              }
              stack.push(bracketsConfig[j][1]);
          }
      }
      if (!find) {
          if (stack.length === zero || str[i] !== stack[stack.length - 1]) {
              return false;
          }
          stack.pop();
      }
  }
  return (stack.length === zero);
};
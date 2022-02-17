module.exports = function check(str, bracketsConfig) {
  const newArr = [];

  for (let i = 0; i < bracketsConfig.length; i++) {
    newArr.push(bracketsConfig[i].join(''));
  }

  for (let j = 0; j < newArr.length; j++) { 
    if (str.includes(newArr[j])) { 
      str = str.replace(newArr[j], '');
      j = -1;
    }
  }

  if (str.length === 0) {
    return true
  } else { 
    return false;
  }

}
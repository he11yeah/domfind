function df(q) {
  var i, newArr = [], qu = document.querySelectorAll(q);
  if (qu.length > 1) {
    for (i = 0; i < qu.length; i++) {
      newArr[i] = qu[i];
    }
    return newArr;
  }
  return qu[0];
}


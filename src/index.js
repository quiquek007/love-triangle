/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(pref = []) {
  let loveTrianglesCount = 0;
  let prefLength = pref.length;
  let spich = [];
  if (prefLength > 0) {
      for (let i = 0;i < prefLength;i++) {
          if (pref[i] == -1) continue;
          spich[0] = pref[i] - 1;//1
          spich[1] = pref[spich[0]] - 1;//2
          spich[2] = pref[spich[1]] - 1;//0
          if ((pref[spich[0]] == (spich[1]+1)) && (pref[spich[1]] == (spich[2]+1)) && (pref[spich[2]] == (spich[0]+1))) {
              pref[i] = -1;
              pref[spich[0]] = -1;
              pref[spich[1]] = -1;
              if (spich[0]!=spich[1] && spich[1]!=spich[2] && spich[2]!=spich[0])
              loveTrianglesCount++;
          }
      }
  }
  return Math.floor(loveTrianglesCount);
};
// [2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4]
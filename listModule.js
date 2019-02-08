var emptyList = [4, 12, 25];

function listInjector(num) {
    emptyList.push(num);
    nestedSorter(emptyList);
    return (emptyList)
  }

  module.exports.listInjector = listInjector
  module.exports = listInjector

  var nestedSorter = listSorter

  function listSorter(list) {
    list.sort(function (a, b) {
        return a - b;
    })
}

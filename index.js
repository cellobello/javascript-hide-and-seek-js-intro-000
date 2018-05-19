function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}

function increaseRankBy(n) {
  var rankedList = document.getElementsByClassName('ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    rankedList[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  
  var grandNode = document.getElementById('grand-node').querySelector('div')[3];
  return grandNode;
  
  
  //for (let i = 0; i < grandNode.length; i++) {
    //var solution = grandNode.querySelector('div[i]').innerHTML;
    //return solution;
  
}

const days = ["Monday", "Thursday", "Saturday", "Wednesday", "Tuesday"];

function getLastValue(pArray) {
  pArray.sort();
  let lastElm = pArray[pArray.length - 1];
  console.log(lastElm);
}

getLastValue(days);

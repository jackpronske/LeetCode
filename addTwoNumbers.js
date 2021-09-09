function ListNode(val, next) {
  this.value = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let current3, l3;
  let sum = 0;
  let extraDigit = 0;
  while (current1 || current2) {
    sum = 0 + extraDigit;
    if (current1) {
      sum += current1.value;
      current1 = current1.next;
    }
    if (current2) {
      sum += current2.value;
      current2 = current2.next;
    }
    if (sum > 9) {
      sum = sum % 10;
      extraDigit = 1;
    } else {
      extraDigit = 0;
    }
    let tempNode = new ListNode(sum);
    if (!l3) {
      current3 = tempNode;
      l3 = current3;
    } else {
      current3.next = tempNode;
      current3 = current3.next;
    }
  }
  if (extraDigit === 1) {
    current3.next = new ListNode(1);
  }
  return l3;
};

module.exports = {
  ListNode,
  addTwoNumbers,
};

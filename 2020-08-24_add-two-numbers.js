/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  // node1 = l1
  let node1 = l1;
  // node2 = l2
  let node2 = l2;

  // result = ListNode()
  let llResult;

  let prevNode;

  // loop through lists while node1 or node2 or currentNode.next (there's value left to be added)
  while (node1 || node2 || (prevNode && prevNode.next)) {
    // create currentSum variable = 0
    let currentSum = prevNode && prevNode.next ? prevNode.next.val : 0;

    // check if node1 is not undefined
    if (node1) {
      // add node1 value to currentSum
      currentSum += node1.val;
      // assign node1 to node1.next
      node1 = node1.next;
    }

    // check if node2 is not undefined
    if (node2) {
      // add node2 value to currentSum
      currentSum += node2.val;
      // assign node2 to node2.next
      node2 = node2.next;
    }

    // create ListNode to add to result linked list
    let newNode = new ListNode();

    // check if currentSum > 9
    if (currentSum > 9) {
      // add the right num (ones) to the LL result (currentSum - 10)
      newNode.val = currentSum - 10;
      // create newNode next ListNode and add 1 to its value
      newNode.next = new ListNode(1);
    } else {
      // update value of new node with currentSum
      newNode.val = currentSum;
    }

    // link newNode to ll
    if (llResult) {
      prevNode.next = newNode;
    } else {
      // it's the first node
      // save it to return
      llResult = newNode;
    }
    // move to next node
    prevNode = newNode;
  }

  // return first node
  return llResult;
};

/*
Given a linked list of integers, remove any nodes from the linked list that have values that have previously occurred in the linked list. Your function should return a reference to the head of the updated linked list.

Example:
Input: (3) -> (4) -> (3) -> (2) -> (6) -> (1) -> (2) -> (6) -> N
Output: (3) -> (4) -> (2) -> (6) -> (1) -> N
Explanation: The input list contains redundant nodes (3), (6), and (2), so those should be removed from the list.

[execution time limit] 4 seconds (js)

[input] linkedlist.integer node

The head node of the linked list.

[output] linkedlist.integer

The head node of the updated linked list.
*/

// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function condense_linked_list(node) {
  // create dataset to keep values from LL
  const dataset = new Set();

  // keep reference to the first node to return it
  const head = node;

  let current = node;
  let prev = null;

  // while current is not null
  while (current) {
    // if value is in dataset
    if (dataset.has(current.value)) {
      // remove node
      if (prev) {
        prev.next = current.next;
      }
    } else {
      // add value to dataset
      dataset.add(current.value);
      // update prev
      prev = current;
    }

    // move to next node
    current = current.next;
  }

  return head;
}

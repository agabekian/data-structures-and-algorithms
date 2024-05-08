#### Feature Tasks
Write a function called zip lists
Arguments: 2 linked lists

Return: New Linked List, zipped as noted below

Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.

Keep additional space down to O(1)

You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

##### Example
zipLists(list1, list2)
Arg list1	Arg list2	Output
{1} -> {3} -> {2} -> null	{5} -> {9} -> {4} -> null	{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null
{1} -> {3} -> null	{5} -> {9} -> {4} -> null	{1} -> {5} -> {3} -> {9} -> {4} -> null
{1} -> {3} -> {2} -> null	{5} -> {9} -> null	{1} -> {5} -> {3} -> {9} -> {2} -> null
Unit Tests
On this, and all future challenges, write tests for any cases that help you ensure your code is working as expected. Think through different edge cases to determine what tests will ensure your code is covered.

[//]: # (Stretch Goal)

[//]: # (Once you’ve achieved a working solution, implement another function that merges two sorted linked lists into a single sorted linked list.)

Submission Instructions

Work within the proper folder structure for your language, and as dictated by the challenge instructions.
Create a new README for this challenge, using the README TEMPLATE provided.
Embed an image of your completed whiteboard, matching the example whiteboard layout
In addition to whiteboard drawing, complete the code written on your whiteboard, along with a proper suite of tests
Create a pull request from your branch to the main branch
In your open pull request, comment with the following checklist of tasks:

Check off the actual steps that you completed.
- [ ] Top-level README “Table of Contents” is updated
- [ ] README for this challenge is complete
  - [ ] Summary, Description, Approach & Efficiency, Solution
  - [ ] Picture of whiteboard
  - [ ] Link to code
- [ ] Feature tasks for this challenge are completed
- [ ] Unit tests written and passing
  - [ ] “Happy Path” - Expected outcome
  - [ ] Expected failure
  - [ ] Edge Case (if applicable/obvious)
  
  - Submit your completed work:
  Copy the link to your open pull request and paste it into the assignment submission field.
  Leave a description of how long this assignment took you in the comments box.
  Add any additional comments to your grader about your process or any difficulties you may have had with the assignment.
  Merge your branch into main, and delete your branch (don’t worry, the PR link will still work).

### Pseudocode 

Function zip_lists(list1, list2):

If either list1 or list2 is empty:

Return the non-empty list

_Initialize pointers:_

current1 = head of list1

current2 = head of list2

While both current1 and current2 are not None:

Save next pointers:

next1 = next node of current1

next2 = next node of current2

Point current1's next to current2:

current1.next = current2

If next1 is not None:

Move current1 to next1

Move current2 to next2

If next1 is None:

Break the loop

Point current2's next to next1:

current2.next = next1

Move current2 to next2

Return list1

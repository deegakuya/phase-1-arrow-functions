// Function that adds two numbers using an arrow function
const add = (parameter1, parameter2) => parameter1 + parameter2;

// Function that logs the addition of two numbers
const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
};

// Function that squares each element of an array using .map() method
const squareArray = nums => nums.map(x => x ** 2);

// Function that marks each item in a collection as complete using .map() method
const markItemsAsComplete = overdueTodoItems => {
  return overdueTodoItems.map(item => {
    item.className = "complete";
    return item;
  });
};

// Function that sends bills to user accounts using .map() method
const sendBillsToAccounts = lapsedUserAccounts => {
  return lapsedUserAccounts.map(user => sendBillTo(user.address));
};

// Example usage of the above functions
console.log(add(2, 3)); // Output: 5
console.log(sum(1, 2)); // Output: Adding 1, Adding 2, 3

// Sample array of numbers for testing squareArray function
const nums = [1, 2, 3];
console.log(squareArray(nums)); // Output: [1, 4, 9]

// Sample collection of DOM elements for testing markItemsAsComplete function
const overdueTodoItems = document.querySelectorAll('.todo-item');
console.log(markItemsAsComplete(overdueTodoItems)); // Marked items as complete in the Dom

// Sample user accounts for testing sendBillsToAccounts function
const lapsedUserAccounts = [
  { address: 'user1@example.com' },
  { address: 'user2@example.com' },
];
console.log(sendBillsToAccounts(lapsedUserAccounts)); // Sends bills to user accounts



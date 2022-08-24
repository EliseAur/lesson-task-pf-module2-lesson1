// Programming Foundations - Module 2
// Lesson Task 1 Questions

// Question 1
// Use a JavaScript string method to determine whether these strings are equal regardless of letter case.
var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase() || requiredName.toUpperCase() === suppliedName.toUpperCase()) {
    console.log("The names match");
} else {
    console.log("The names do NOT match");
}

// Question 2
// Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.
// var username = "myusername";
// If both tests pass log a message saying "Acceptable username".
// If either test fails use nested if statements to indicate which test failed,
// e.g. if the character count is too low, log the message "Too few characters".
// If the character count is too high, log the message "Too many characters".
// Change the variable's value to test your code.

var username = "myu";

if (username.length >= 4 && username.length <= 10) {
    console.log("Acceptable username");
} else {
    if (username.length < 4) {
        console.log("Username too short,  must have at least 4 characters");
    }
    if (username.length > 10) {
        console.log("Username too long, must have a maximum of 10 characters");
    }
}

// Question 3
// The following criteria need to be met before an order can be considered complete:
//     The invoice must be paid
//     The product must have been dispatched
//     The customer must have signed for the delivery
// Using the variables below write an if/else statement that determines whether the order is complete:
// var invoicePaid = true;
// var productDispatched = false;
// var customerHasSigned = false;
// If the order is complete log the message "Order complete".
// If not, use nested if statements to indicate why the order is incomplete.
// Use the logical AND (&&) operator to complete this task.
// Change the variables' values to test your code.

var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if (invoicePaid === true && productDispatched === true && customerHasSigned === true) {
    console.log("Order complete");
} else {
    if (!invoicePaid) {
        console.log("Invoice not paid. You must pay invoice to complete order.");
    }

    if (!productDispatched) {
        console.log("The product is no dispatched. You need to dispatch the product to complete order.");
    }

    if (!customerHasSigned) {
        console.log("You have NOT signed for the delivery. You must sign to complete the order.");
    }
}

// Question 4
// Re-write your code from the question above using the logical OR (||) operator.

var invoicePaid = false;
var productDispatched = false;
var customerHasSigned = false;

if (invoicePaid !== true || productDispatched !== true || customerHasSigned !== true) {
    console.log("Order is not complete");

    if (!invoicePaid) {
        console.log("Invoice not paid. You must pay invoice to complete order.");
    }

    if (!productDispatched) {
        console.log("The product is no dispatched. You need to dispatch the product to complete order.");
    }

    if (!customerHasSigned) {
        console.log("You have NOT signed for the delivery. You must sign to complete the order.");
    }
} else {
    console.log("Order complete");
}

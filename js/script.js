//Programming Foundations - Module 2

//Lesson Task 1 Questions

//Question 1
//Use a JavaScript string method to determine whether these strings are equal regardless of letter case.
//var requiredName = "Gertrude";
//var suppliedName = "GERTRUDE";

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
    console.log("The strings are equal");
}

//or

if (requiredName.toUpperCase() === suppliedName.toUpperCase()) {
    console.log("The strings are equal");
}

//Question 2
//Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.
//var username = "myusername";
//If both tests pass log a message saying "Acceptable username".
//If either test fails use nested if statements to indicate which test failed, e.g. if the character count is too low, log the message "Too few characters".
//If the character count is too high, log the message "Too many characters".
//Change the variable's value to test your code.

var userName = "myusernameislong";
var lengthOfName = userName.length;
console.log(lengthOfName);

if (lengthOfName >= 4 && lengthOfName <= 10) {
    console.log("Acceptable username");
} else {
    if (lengthOfName < 4) {
        console.log("Too few characters");
    }

    if (lengthOfName > 10) {
        console.log("Too many characters");
    }
}

//Question 3
//The following criteria need to be met before an order can be considered complete:
//The invoice must be paid
//The product must have been dispatched
//The customer must have signed for the delivery
//Using the variables below write an if/else statement that determines whether the order is complete:
//var invoicePaid = true;
//var productDispatched = false;
//var customerHasSigned = false;
//If the order is complete log the message "Order complete". If not, use nested if statements to indicate why the order is incomplete.
//Use the logical AND (&&) operator to complete this task.
//Change the variables' values to test your code.

var invoicePaid = true;
var productDispatched = true;
var customerHasSigned = true;

if (invoicePaid === true && productDispatched === true && customerHasSigned === true) {
    console.log("Order complete");
} else {
    if (invoicePaid !== true) {
        console.log("The invoice must be payed to complete order");
    }

    if (productDispatched === false) {
        console.log("The product must have been dispatched to complete order");
    }
    if (customerHasSigned !== true) {
        console.log("You must sign for the delivery to complete order");
    }
}

//or

// the below is shorthand for
// if(invoicePaid === true && productDispatched === true && customerHasSigned === true)
if (invoicePaid && productDispatched && customerHasSigned) {
    console.log("Order complete");
} else {
    if (!invoicePaid) {
        console.log("Invoice is not paid");
    }
    if (!productDispatched) {
        console.log("Product is not dispatched");
    }
    if (!customerHasSigned) {
        console.log("Customer has not signed");
    }
}

//Question 4
//Re-write your code from the question above using the logical OR (||) operator.

if (invoicePaid !== true || productDispatched !== true || customerHasSigned !== true) {
    console.log("Order is NOT complete");

    if (invoicePaid !== true) {
        console.log("The invoice must be payed to complete order");
    }

    if (productDispatched !== true) {
        console.log("The product must have been dispatched to complete order");
    }
    if (customerHasSigned !== true) {
        console.log("You must sign for the delivery to complete order");
    }
} else {
    console.log("Order is complete");
}

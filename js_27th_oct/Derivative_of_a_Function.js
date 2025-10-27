// Derivative of a Function
// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to
//  x evaluated at x=m, where b and m are constants.

// Examples
// derivative(1, 4) ➞ 1

// derivative(3, -2) ➞ 12

// derivative(4, -3) ➞ -108
// Notes
// ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.
function derivative(b,m){
    let fun=m**b;
    let derivative_of_fun=b*((m)**(b-1));
    return derivative_of_fun;
}
console.log(derivative(4,-3));
//Time-complexity:O(1)
//Space-complexity:O(1)
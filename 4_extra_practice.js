// Take your previous solutions and write them using the other kind of loop.  
// I.E.  If you wrote both of your algorithms using for loops, now write them out with while loops


// YOUR CODE HERE

// printing odds using while loop
var i = 1;
while (i < 20) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++
}

// printing sum using while loop

// var sum = 0,
    num = 1;

while (num < 10) {
    console.log("Num: ", num);
    sum = sum + num;
    console.log("Sum: ", sum);
    num++;
}

// printing fizzbuzz using while loop

var i = 1;
while (i <= 30) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    i++;
}
function printNumber(num) {

  console.log(num);

}


console.log(1);


setTimeout(printNumber, 0, 2);


setTimeout(printNumber, 100, 3);


console.log(4);

//output 1 4 2 3
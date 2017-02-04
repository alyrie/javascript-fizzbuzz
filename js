for(var i=1; i<=40; i++) { // generate 40 instances of i
	if(i%2 === 0) { // if i is divisible by 2
	console.log(i + " fizz");
	} else if(i%3 === 0) { // if i is divisible by 3
	console.log(i + " buzz");
	} else if(i%2 && i%3 === 0) { // if i is divisible by 2 and 3
	console.log(i + " fizzbuzz");
	} else {
	console.log(i + " nobuzz");
	}};

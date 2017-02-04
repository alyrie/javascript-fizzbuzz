for(var i=0; i<=40; i++) { // generate 40 instances of i
	if(i%2 === 0) { // if i is divisible by 2
	console.log("fizz");
	} else if(i%3 === 0) { // if i is divisible by 3
	console.log("buzz");
	} else if(i%2 && i%3 === 0) { // if i is divisible by 2 and 3
	console.log("fizzbuzz");
	} else {
	console.log("nobuzz");
	}};

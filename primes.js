#!/usr/bin/env node

var prime = function(number) {
	m = Math.sqrt(number);
    	for (var div = 2; div <= m; div++)
        	if (number % div == 0)
            	return false;
        return number;
};

var pinArray = function(x) {
	var array = [];
    	var i = 1;
    	do {
		i++;
		if (prime(i) != false)
		array.push(prime(i));
	}
    	while (array.length < x)
    	return array
};

var print = function(pinArray) {
    	return pinArray.join(",");
};

var x =100;
console.log("First "+ x +" primes:");
console.log(print(pinArray(x)));

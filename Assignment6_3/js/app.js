var sum = 0;

for (var i = 1; i <= 1000; i++) {
	sum += i;
}

console.log("Sum using for loop: "+sum);

var i = 1;

sum = 0;

while(i <= 1000){
	sum += i;
	i++;
}

console.log("Sum using while loop: "+sum);
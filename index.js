// 1. given a string, create a function that returns the last character in that string. In JS
// examples:
// "morning" --> g

// "winter" --> r

function last(str){
	console.log(str[str.length-1])
}




// 1.1/2 Write the same function in Ruby

// 2. given two arrays that contain integers with no duplicates, create a function that determines
// whether they contain the exact same elements.
// examples:
//  [1, 2, 3], [3, 2, 1] --> true
//  [1, 2, 3], [2, 3, 4] --> false

 function test(arr1, arr2){
    arr1.sort(function(a, b) {
 		return a - b;
 	})
    arr2.sort(function(a, b) {
 		return a - b;
 	})
 	if (arr1.toString() === arr2.toString()){
 		return true
 	}
 	else {
 		return false
 	}
}
arr1 = [1,2,3,4,5]
arr2 = [5,2,3,4,1]

test(arr1, arr2);



// 3. write a function that takes in a math operator as a string followed by two parameters, x and y, then
//  return the result of that math operation applied to the two parameters.
//  examples:
//  math("*", 2, 3) ---> 6
//  math("+", 4, 5) ---> 9

//  math("/", 5, 5) ---> 1

//  math("*", 4, 5) ---> 20

function math(str, num1, num2){
	var NUM1 = num1.toString()
	var NUM2 = num2.toString()
	return eval(NUM1+str+NUM2)
}

math("+", 4, 5)

















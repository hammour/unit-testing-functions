/*
 * PROBLEM `checkData`: (normal)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 //input: string
 //output: boolean (true, false) otherwise throw a 'Invalid Input'
function checkData(inputString) {
	// your code goes here
	if(typeof inputString==='string'){
		if (inputString.length===3){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		throw 'Invalid Input';
	}
}

/*
 * PROBLEM `concatenateArrays`: (normal)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {
	// your code goes here
	if((Array.isArray(a))&&(Array.isArray(b))){
		return a.concat(b);	
	}
	else{
		throw new Error('Invalid Input');
	}
}

/*
 * PROBLEM `fixProperNoun`: (normal)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {
	if((typeof noun==='string')&&((noun.indexOf(' ') <= 0))){
	// your code goes here	
		return noun.charAt(0).toUpperCase() + noun.slice(1);
	}
	else{
		throw new Error('Invalid Input');
	}
	
}

/*
 * PROBLEM `sortLetters`: (normal)
 * Write a function called `sortLetters` that returns a string that sorts all
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	if((typeof inputString==='string')&&((inputString.indexOf(' ') <= 0))){
	// your code goes here	
		var nounArray = inputString.split('');
		var nounArraySorted =nounArray.sort()
		return nounArraySorted.join('');
	}
	else{
		throw new Error('Invalid Input');
	}
	// your code goes here
}

/*
 * PROBLEM `absVal`: (normal)
 * Write a function called `absVal` that return the absolute value of a given
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	if(typeof integer==='number'){
		if(integer<0){
			return integer*-1;
		}
		else{
			return integer;
		}

	}
	else{
		throw new Error('Invalid Input');
	}
	// your code goes here
}

/*
 * PROBLEM `myMin`: (normal)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function myMin(a,b){
 	if((typeof a==='number')&&(typeof b==='number')){
 		if(a<=b){return a} else{return b};

 	}
 	else{
 		throw new Error('Invalid Input');
 	}
 }

/*
 * PROBLEM `myMax`: (normal) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers ans returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */

 function myMax(arrayOfIntegers){
	 if(Array.isArray(arrayOfIntegers)){
	 	var max=arrayOfIntegers[0];	
	 	for(i=0;i<arrayOfIntegers.length;i++){
	 			if(typeof arrayOfIntegers[i]!=='number'){throw new Error('Invalid Input')}
	 			else if(max<arrayOfIntegers[i]){max=arrayOfIntegers[i]}

	 		}
	 	return max;
	 		


	 	}
 	else{
 		throw new Error('Invalid Input');
 	}
 }

/*
 * PROBLEM `getMonth`: (normal)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function getMonth(val){
	var year ={
		1:'January',
		2:'February',
		3:'March',
		4:'April',
		5:'May',
		6:'June',
		7:'July',
		8:'August',
		9:'September',
		10:'October',
		11:'November',
		12:'December'
	}
	if(year[val]!==undefined){
		return year[val];
	}
	else{
		throw new Error('Invalid Input')
	}
}

/*
 * PROBLEM `randomElement`: (normal)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */

//input: array of objects.
//ouptu: random element(object).
function randomElement(valArray){
	if(Array.isArray(valArray)){
		return valArray[Math.floor((valArray.length*Math.random()))];
	}
	else{
		throw new Error('Invalid Input')
	}
}



/*
 * PROBLEM `studentPairs`: (normal)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

function studentPairs(arr){
	if((Array.isArray(arr))&&(arr.length!==0)&&(arr.length %2===0)){
		var currentIndex = arr.length, temporaryValue, randomIndex;

  		
  		while (0 !== currentIndex) {

			    
			    randomIndex = Math.floor(Math.random() * currentIndex);
			    currentIndex -= 1;

			    
			    temporaryValue = arr[currentIndex];
			    arr[currentIndex] = arr[randomIndex];
			    arr[randomIndex] = temporaryValue;
			  }
	  	var newArr=[];
	  	while (arr.length >1){
  			var element=arr.splice(0,2);
  			newArr.push(element);
	  	}
	  	return newArr;
	}
	else{
		throw new Error('Invalid Input')
	}
}







/*
 * PROBLEM `sumSquares`: (normal)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sumSquares(num){
	if((typeof num==='number')&&(num>0)){
		var total=0;
		while(num>0){
			total=total+(num*num);
			num--;
		}
		return total;

	}
	else{
		throw new Error('Invalid Input')
	}

}

/* 
 * PROBLEM `findMaxDiff`: (normal)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function findMaxDiff(arrayOfIntegers){
	if(Array.isArray(arrayOfIntegers)){
		 	var min=arrayOfIntegers[0];
		 	var max=arrayOfIntegers[0];	
		 	for(i=0;i<arrayOfIntegers.length;i++){
		 			if(typeof arrayOfIntegers[i]!=='number'){throw new Error('Invalid Input')}
		 			else {
		 				if(max<arrayOfIntegers[i]){max=arrayOfIntegers[i]};
		 				if(min>arrayOfIntegers[i]){min=arrayOfIntegers[i]};
		 			}

		 		}
		 	return max-min;
		 		


		 	}
	 	else{
	 		throw new Error('Invalid Input');
	 	}
 }

/*
 * PROBLEM `insertDashes`: (normal)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function insertDashes(syntax) {
	if(typeof syntax==='string'){
	
		var arrayOfWords=syntax.split(' ')
		var newArrayOfWords=[];
		for(var i=0; i<arrayOfWords.length; i++){
			var wordArray=arrayOfWords[i].split('');
			var newWord=[];
			for(var x=0; x<wordArray.length; x++){
				
				newWord.push(wordArray[x]);
				if (x<wordArray.length-1){newWord.push('-')};


			}
			newWord=newWord.join('');
			newArrayOfWords.push(newWord);
			if (i<arrayOfWords.length-1){newArrayOfWords.push(' ')};

		}
		
		// var finalReturn=[];
		// for(var i=0;i<newArrayOfWords.length;i++){
		// 	var word=newArrayOfWords[i].substring(0,newArrayOfWords[i].length-1)
		// 	finalReturn.push(word);
		// }
		return newArrayOfWords.join('');
	}
	else{
		throw new Error('Invalid Input');
	}
	
}

/*
 * PROBLEM `mySubstring`: (normal)
 * Implement a function called `mySubstring` that can output the substring of
 * the given string within specified bounds.
 *
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 *
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function mySubstring(word,indexStart,indexEnd){
	if((typeof word==='string')&&((word.indexOf(' ') <= 0))&&(typeof indexStart==='number')&&(typeof indexEnd==='number')){
		var wordArray=word.split('');
		var newString=[];
		for(var i=indexStart;i<indexEnd;i++){
			newString.push(wordArray[i]);
		}
		return newString.join('');
	}
	else{
		throw new Error('Invalid Input');
	}
}
/*
 * PROBLEM `splitSwap`: (hard)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 *
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function splitSwap(arr){
 	if(Array.isArray(arr)){
 		var midWay = Math.ceil((arr.length)/2);
 		var array1 = arr.slice(0,midWay);
 		var array2 = arr.slice(midWay,arr.length);
 		return array2.concat(array1);

 	}
 	else{
		throw new Error('Invalid Input');
	}

 }

/*
 * PROBLEM `smallMultiples`: (hard)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function smallMultiples(a,b){
 	if((typeof a==='number')&&(typeof b==='number')){
 		
 		var sum = 0;
 		var count=0;
 		while(sum+b<a){
 			sum=sum+b;
 			count++
 		}
 		return count;

 	}
 	else{
		throw new Error('Invalid Input');
	}
 }

/*
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function findBoth(arr1, arr2){
 	if((Array.isArray(arr1))&&(Array.isArray(arr2))&&(arr1.length>0)&&(arr2.length>0)){
 		//check arr1 typeof elements
 		for(var i=0;i<arr1.length;i++){
 			if(typeof arr1[i]!=='number'){throw new Error('Invalid Input');}
 		}
 		//check arr2 typeof elements
 		for(var i=0;i<arr2.length;i++){
 			if(typeof arr2[i]!=='number'){throw new Error('Invalid Input');}
 		}
 		//sort arrays
 		var arr1Sorted=arr1.sort();
 		var arr2Sorted=arr2.sort();
 		//remove duplicate from each array
 		var arr1New=[],arr2New=[];
 		for(var i=0;i<arr1Sorted.length; i++){
 			if(arr1Sorted[i]!==arr1Sorted[i+1]){arr1New.push(arr1Sorted[i])}
 		}
 		if(arr1Sorted[arr1Sorted.length-1]!==arr1Sorted[arr1Sorted.length-2]){arr1New.push(arr1Sorted[arr1Sorted.length-1])}
 		
 		for(var i=0;i<arr2Sorted.length; i++){
 			if(arr2Sorted[i]!==arr2Sorted[i+1]){arr2New.push(arr2Sorted[i])}
 		}
 		if(arr2Sorted[arr2Sorted.length-1]!==arr2Sorted[arr2Sorted.length-2]){arr2New.push(arr2Sorted[arr2Sorted.length-1])}
		//compare new arrays and return elements appeard on both
		var fullArray = arr1Sorted.concat(arr2Sorted).sort();
		var finalArray=[];
		for(var i=0;i<fullArray.length;i++){
			for(var x=i+1; x<fullArray.length;x++){
				if(fullArray[i]===fullArray[x]){finalArray.push(fullArray[i])}
			}
		}
		var outputArray=[];
		for(var i=0;i<finalArray.length;i++){
			if(finalArray[i]!==finalArray[i+1]){outputArray.push(finalArray[i])}
		}
		if(finalArray[finalArray.length-1]!==finalArray[finalArray.length-2]){outputArray.push(finalArray[finalArray.length-1])}

		return outputArray;



 	}

 	else{
		throw new Error('Invalid Input');
	}

 }

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
 function countBoth(arr1, arr2){
 	if((Array.isArray(arr1))&&(Array.isArray(arr2))&&(arr1.length>0)&&(arr2.length>0)){
 		//check arr1 typeof elements
 		for(var i=0;i<arr1.length;i++){
 			if(typeof arr1[i]!=='number'){throw new Error('Invalid Input');}
 		}
 		//check arr2 typeof elements
 		for(var i=0;i<arr2.length;i++){
 			if(typeof arr2[i]!=='number'){throw new Error('Invalid Input');}
 		}
 		return arr1.length+arr2.length;
 	}

 	else{
		throw new Error('Invalid Input');
	}

 }

/*
 * PROBLEM `isDiagonalMatrix`: (nightmare)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal
 * matrix if all entries outside the main diagonal are zero (the diagonal from
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (nightmare) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal
 * lengths arr1 and arr2. The function should return a new array of the same
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (nightmare) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `flattenArray`: (nightmare) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */

/*
 * Do not modify the code below
 */
module.exports = {
	checkData: 				typeof checkData === 'undefined' ? undefined : checkData,
	concatenateArrays: 		typeof concatenateArrays === 'undefined' ? undefined : concatenateArrays,
	fixProperNoun: 			typeof fixProperNoun === 'undefined' ? undefined : fixProperNoun,
	sortLetters: 			typeof sortLetters === 'undefined' ? undefined : sortLetters,
	absVal: 				typeof absVal === 'undefined' ? undefined : absVal,
	myMin: 					typeof myMin === 'undefined' ? undefined : myMin,
	myMax: 					typeof myMax === 'undefined' ? undefined : myMax,
	getMonth: 				typeof getMonth === 'undefined' ? undefined : getMonth,
	randomElement: 			typeof randomElement === 'undefined' ? undefined : randomElement,
	studentPairs: 			typeof studentPairs === 'undefined' ? undefined : studentPairs,
	sumSquares: 			typeof sumSquares === 'undefined' ? undefined : sumSquares,
	findMaxDiff: 			typeof findMaxDiff === 'undefined' ? undefined : findMaxDiff,
	insertDashes: 			typeof insertDashes === 'undefined' ? undefined : insertDashes,
	mySubstring: 			typeof mySubstring === 'undefined' ? undefined : mySubstring,
	splitSwap: 				typeof splitSwap === 'undefined' ? undefined : splitSwap,
	smallMultiples: 		typeof smallMultiples === 'undefined' ? undefined : smallMultiples,
	rot13: 					typeof rot13 === 'undefined' ? undefined : rot13,
	derot13: 				typeof derot13 === 'undefined' ? undefined : derot13,
	rotn: 					typeof rotn === 'undefined' ? undefined : rotn,
	findBoth: 				typeof findBoth === 'undefined' ? undefined : findBoth,
	countBoth: 				typeof countBoth === 'undefined' ? undefined : countBoth,
	isDiagonalMatrix: 		typeof isDiagonalMatrix === 'undefined' ? undefined : isDiagonalMatrix,
	isAnagram: 				typeof isAnagram === 'undefined' ? undefined : isAnagram,
	validateParentheses:	typeof validateParentheses === 'undefined' ? undefined : validateParentheses,
	flattenArray: 			typeof flattenArray === 'undefined' ? undefined : flattenArray
};
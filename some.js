var arr = [1,2,3];

arr.some((value, index, array) => {
    return value < 2;
})


//using in functions

function hasEvenNumber(arr){
    return arr.some((value)=>{
        return value % 2 === 0
    })
}

hasEvenNumber([1,2,3,4])
//return true



/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
    return arr.some((val)=> {
        return val%2 !== 0
    })
}

console.log('has odd number', hasOddNumber([1,2,2,2,2,2,4]));

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num){
    return num.toString().split('').some((val)=> {
        return val === '0';
    })
    
}

console.log('has a zero', hasAZero(3332123213101232321));


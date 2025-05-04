// const message = "hello";
// console.log(message)
// const capitalized = message.toUpperCase()
// console.log(capitalized); // prints "HELLO"
 
// const faltumessage = "   hello, good afternoon    "
// console.log(faltumessage.length)
// // console.log(faltumessage.trim()) // prints "hello, good afternoon"  // 
// // removes leading
// // const finalmessage = faltumessage.trim().toUpperCase()
// const finalmessage = faltumessage.trimStart().trimEnd().length
// console.log(finalmessage)


// const message2 = "hello, I am shubham";
// console.log(message2.includes("23")) // includes() method gives a Boolean value - true or false 

// const indexmethod = "hello , My name is shubham";
// console.log(indexmethod.indexOf("shubham")); // returns the index of the first occurrence of the specified value, or -1 if it is not present in the string.

// const message3 = " Hello , my name is subham";
// console.log(message3)
// console.log(message3.replace("subham", "shubham")); // replaces the first occurrence of

// const message4 = " Hello , my name is subham, The age of subham is 21";
// console.log(message4)
// console.log(message4.replaceAll("subham", "shubham")); // replace tha all occurrence of given value in the string but not change the actual string

// concat()
// const myname = ' My name is shubham';
// const myage = 'my age is 21';
// console.log(myname.concat(' ', myage));//concat - is method use to concat the two strings.
// console.log(myname + ' ' + myage); // + operator is also used to concat the two strings.

// padstart()


// const mobile_no = "8905"
// console.log(mobile_no.padStart(10,"*"));// padStart() method adds a string to the left of an existing string. The added string is repeated
// console.log(mobile_no.padEnd(10,"*"));// padEnd() method adds a string to the right of an existing string. The added string is repeated

                                  // at() , charA() , charCodeAt() 

// const message5 = "Hello , Sculptsoft";
// console.log(message5.at(12)); // returns the character at the specified index in a string. It gives undefined if the index is out of range.
// console.log(message5.charAt(12));// same as at() method but returns the empty string if index 
// // out of range 
// console.log(message5.charCodeAt(9)); // returns the Unicode (ascii value) of the character at the specified index in string . it gives NaN if the index is invalid.

                                    // split()
const message6 = "hello, MY name is shubham";
// console.log(message6.split(" ")); // returns an array of substrings, split at each occurrenc

console.log(message6.split(",")); // returns an array of substrings, split at each occurrenc
console.log(message6.split(",").join(" ")); // returns an array of substrings,


                                    // Template litrels in js
// const name = "shubham ";
// const num = "21";
// const concatingstring=`Hello, my name is ${name}`+`my age is ${num.padStart(10,"*")}`
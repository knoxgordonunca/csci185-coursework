const makeBigger = () => {
   alert('make bigger!');
   console.log('bigger');
   document.querySelector('*').style.fontSize = '1.5em';
};

const makeNormal = () => {
   alert('make normal!');
   console.log('normal');
   document.querySelector('*').style.fontSize = '1em';
};

const makeSmaller = () => {
   alert('make smaller!');
   console.log('smaller');
   document.querySelector('*').style.fontSize = '.5em';
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/

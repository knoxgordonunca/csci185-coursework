const toggleFall = () => {
    /*
        Your task: target the body element and change it's class to "fall"
    */
   console.log('toggle fall');
   document.querySelector('body').className = 'fall';
   document.querySelector('body h1').innerHTML = 'Fall in Asheville';
}

const toggleWinter = () => {
    /*
        Your task: target the body element and change it's class to "winter"
    */
    console.log('toggle winter');
    document.querySelector('body').className = 'winter';   
    document.querySelector('body h1').innerHTML = 'Winter in Asheville';
}

const toggleSpring = () => {
    /*
        Your task: target the body element and change it's class to "spring"
    */
    console.log('toggle spring');
    document.querySelector('body').className = 'spring';
    document.querySelector('body h1').innerHTML = 'Spring in Asheville';
}
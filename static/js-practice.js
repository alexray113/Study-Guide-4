'use strict';

/** ********************
 Make an Event Handler
********************* */

// const button = document.querySelector("#popup-alert-button")

// const handleClick = () => {
//   alert('Show me a Popup!')
// };

// button.addEventListener('click', handleClick)

document.querySelector("#popup-alert-button").addEventListener('click', () => {
  alert('Show me a Popup!')
})

/** ***********************
Practice Your Times Tables
************************ */
// empty list for containted multiples of requested number
const numArray = []
// event listener that prevents default of submitting to /nope on submission

document.querySelector("#multiplying-form").addEventListener('submit', (evt) => {
  evt.preventDefault();
  
  // pulls key name from drop down mults-of
  const multsOf = document.querySelector('#mults-of[name="mults-of"]')
  //  pulls key name from input max
  const maxOf = document.querySelector('#max[name="up-to"]')
  
  // pulls value from key name mults-of, change type from string to number
  const multiple = Number(multsOf.value)
  // pulls value from key name up-to and converts to integer
  const max = Number(maxOf.value)

// sets count to 1; defines when loop stops (when loop arrives at max number);
// increases count by 1 for each loop
  for (let i = 1; i <= max; i++) {
    // multiplying by count starting at 1, adding result to empty array
    numArray.push(multiple * i);
  }
  console.log(numArray)
  // console.log(typeof multiple)
  // console.log(typeof max)

})



/** **************
An Agreeable Form
*************** */
// event listener for submit that prevents default route
document.querySelector("#agreeable-form").addEventListener('submit', (evt) => {
  evt.preventDefault();
  // gets key of favorite-food-input
  let faveFood = document.querySelector("#favorite-food-input[name='favorite-food']")
  // gets value of fave-food-input
  let faveFoodValue = faveFood.value
  // replaces inner HTML of #agreeable-text div with value of input as
  // template string within statement
  document.querySelector('#agreeable-text').innerHTML = `I like ${faveFoodValue}, too.`
  
})

/** ****************
Five colored primes
***************** */
// empy array for adding prime numbers
const primeNumbers = []

const PRIME_COLORS = ['orange', 'midnightblue', 'darkgoldenrod', 'green', 'purple'];
document.querySelector("#make-prime-circles").addEventListener('click', (evt) => {

  // setting count to start at 2 (example range is 2-11); stop loop when count equals 12;
  // increase count by 1 each loop
  for (let number = 2; number <= 12; number++) {
    // making isPrime true from start
    let isPrime = true
  // setting compare number to 2; stop loop if compare number is less than
  // number; increase compare number by 1 each loop
    for (let i = 2; i < number; i++) {
  // conditional checking if number divided by compare number leaves nothing left over
    if (number % i == 0) {
  //  change isPrime to false
      isPrime = false;
      }
    }
  // add number to primeNumbers array if isPrime is true
  if (isPrime) {
    primeNumbers.push(number)
  }  
  }
  // loops through each index of primeNumbers array
  for (let index in primeNumbers) {
//  set template string variable "color" to each index of PRIME_COLORS array
    let color = PRIME_COLORS[index]
// set template string variable "numberInput" to each index of primeNumbers array
    let numberInput = primeNumbers[index]
// insert div with template strings passed in into #prime-circle-area div to make colored circles with prime numbers
    document.querySelector("#prime-circle-area").insertAdjacentHTML('beforeEnd', `<div class="prime-circle" style="background-color: ${color}">${numberInput}</div>`)
  }


document.querySelector('#prime-circle-area').innerHTML 
})
/** *********
Got Puppies?
********** */

// NOTE: DO NOT CHANGE THE CODE OF THIS FUNCTION
function showPuppies(results) {
  // get the URL for the puppy photo out of the results object
  const puppyURL = results.url;
  const puppyDiv = document.querySelector('#puppies-go-here');
  // clear anything currently in the div
  puppyDiv.innerHTML = null;
  // add the img element
  puppyDiv.insertAdjacentHTML('beforeend', `<img src=${puppyURL} alt="puppy-image">`);
}

document.querySelector("#puppy-form").addEventListener('click', (evt) => {
  evt.preventDefault();
  const formKey = document.querySelector("#num-puppies[name='num-puppies']")
  const queryString = new URLSearchParams({numPuppies: formKey.value}).toString();

  const url = `/puppies.json?${queryString}`;
  
  fetch(url)
    .then((response) = response.json())
    .then((results) => {
    document.querySelector("#puppies-go-here").innerHTML = <img id='puppies-hole' src=''></img>;
    document.getElementById('puppies-hole'.src = `${results.url}`)
    }

})
}
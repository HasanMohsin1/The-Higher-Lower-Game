// Gerenating and storing the random integers between  1 and 30
let num = Math.floor(Math.random() * 30) + 1;

console.log(num);

let num_guess = 0;
//Initailize an empty array to store guesses
let tries = [];


function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");
    // Valide the number
    if(isNaN(guess)){
        message.innerHTML = "This is not the number!";
    }
    //When the number you inter out the range
    else if (guess > 30){
        message.innerHTML = "This number is not in the range, try again.";
        num_guess++
        tries.push(guess)
    }
    //If the number higher than the right integer
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        num_guess++
        tries.push(guess)
    }
     //If the number lower than the right integer
    else if (guess < num){
        message.innerHTML = "No, try a higher number.";
        num_guess++
        tries.push(guess)
    }
    //if the value is correct
    else if (guess == num){
        num_guess++
        tries.push(guess)
        //Calculate the numbers array
        message.innerHTML = "You got it! It took you " + num_guess + " times to guess the right number " + tries + ".";
    }

    }
    
    


const max=prompt("Enter the max number");
const random=Math.floor(Math.random() * max) +1;
let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("you can quit the game");
        break;
    }

    if(guess==random){
        console.log("Your guess matched,congrates!! random numnber was",random);
        break;
    }
    else if(guess<random){
        guess=prompt("Your guess was to small. Please try again!");
    }
    else{
        guess=prompt("your guess was too large. Pleasen try again!");
    }
}

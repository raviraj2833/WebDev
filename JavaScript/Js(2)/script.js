// for(let i=1;i<=3;i++){
//     console.log(`outr loop ${i}`);
//     for(let j=1;j<=3;j++){
//         // console.log(`inner loop ${j}`);
//         console.log(j);
//     }
// }


// while loop

// let i=0;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }


 //favourite movie game
// const movie="avatar";
// let guess=prompt("guess the movie ");
// while(guess!=movie){
//     if(guess=="quit"){
//         console.log("You quit");
//         break;
//     }
//     guess=prompt(" wrong guess. please try again !");
// }
// if(guess==movie){
//     console.log("congrates you guess!");
// }


// break

// let i=1;
// while(i<=5){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// using loops with array

// let fruits=["mango","apple","orange","papaya","banana"];
// fruits.push("Pineapple","litchi");
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
//     console.log(fruits.length)
// }

// loops with array
// nested loop with nested array


// let heroes=[
//     ["ironman","hulk","spiderman"]
//     ,["batman","superman","flash"]];
// for(let i=0;i<heroes.length;i++){
//     console.log(i,heroes[i],heroes[i].length);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(`j=${j},${heroes[i][j]}`);
//     }
//     // console.log(`list #${i}`);
//     // for(let j=0;j<heroes[i].length;j++){
//     //     console.log(heroes[i][j]);
//     // }
// }


// let students=[
//     ["Ravi",98],["Rahul",90],["Pankaj",99]
// ];
// for(let i=0;i<students.length;i++){
// console.log(`info of student #${i+1}`);
// for(let j=0;j<students[i].length;j++){
// console.log(students[i][j]);
// }
// }

// for of loop

// let fruits=["mango","litchi","orange","apple","banana"];
// for(fruit of fruits){
//     console.log(fruit);
// }
// for(char of "RAVI"){
//     console.log(char);
// }

// nested for of loop

let food=[
    ["mango","apple","orange"],["potato","onion","pea"]];
    for(list of food){
        console.log(list)
        for(k of list ){
            console.log(k);
        }
       
    }

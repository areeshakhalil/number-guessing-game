#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber=Math.floor(Math.random() * 6);
const answers= await inquirer.prompt([
    {
        name:"userGuessdNummber",
        type :"number",
        message:"Please guess a number between 1-6:"
    },
]);
if(answers.userGuessdNummber ===randomNumber){
console.log("Congratulations! you guessed right number.")
}
else{
    console.log("Oh no!you guessed wrong number")
    }


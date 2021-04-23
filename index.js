const readLineSync = require('readline-sync');
var colors = require('colors/safe');


const questionsAnswers = [{
  question : `On the episode "the one with the truth about London", with who Monica wanted to stay in first place?`,
  option :{
          a : `Joey Tribbiani`,
          b : `Paulo`,
          c : `Richard`,
          d : `Chandler Bing`
  },
  answer : 'a'
},
{
  question : `What the coffee house used to be before?`,
  option :{
            a : `A coffee house`,
            b : `A supermarket`,
            c : `A bar`,
            d : `A xerox place`, 
  },
  answer : 'c'
},
{
question : `Why Phoebe and Gary's relationship didn't work out?`,
option : {
            a : `Because Gary shot a cat`,
            b : `Because Gary shot a bird`,
            c : `Because Phoebe didn't loved Gary`,
            d : `Because Gary asked Phoebe to move in` 
  },
  answer : 'b'
},
{
question : `What's the name of the person Rachel gives up to marry?`,
option : {
            a : `Barry`,
            b : `Hugsy`,
            c : `Mike`,
            d : `Mark` 
  },
  answer : 'a'
},
{
  question : `What is the name of Chandler's father's Las Vegas all-male burlesque?`,
  option : {
            a : 'Viva Gaygas',
            b : 'Viva Las Gaygas',
            c : 'Viva the Gaygas',
            d : 'Viva Las Vegas' 
},
  answer : 'b'
}]


const play = (questionsAnswers) => {
  let score = 0;
  questionsAnswers.forEach((questionAnswer) => {

      console.log(questionAnswer.question);

      Object.keys(questionAnswer.option).forEach((key)=>{
          console.log(`${key} : ${questionAnswer.option[key]}`);
        });
      
      console.log();
      let ans = readLineSync.question("Your Answer? ")
      
      while(ans !== 'a' && ans !=='b' && ans !=='c' && ans !=='d'){
        console.log(colors.bgRed('Please input a b c or d.'));
        console.log();
        ans = readLineSync.question("Your Answer? ");
      }

      if(questionAnswer.answer === ans) {
            console.log(colors.green("Congratulations! Correct Response."));
            score++;
            console.log();
          } else {
            console.log(colors.red(`Sorry! Correct response is option ${questionAnswer.answer}.`));
            console.log();
          }
  })
  console.log(colors.bgYellow(`Your score is ${score}/5`));
}

console.log(colors.bgMagenta(`Hi Friends, Let's play a quiz about Friends. \nYou will be asked 5 question about the TV Show F.R.I.E.N.D.S. \nPlease select response by specifying a b c or d.\nLet the fun begin.`));

console.log();
play(questionsAnswers);
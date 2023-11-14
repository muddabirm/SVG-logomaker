import inquirer from 'inquirer'
import fs from 'fs'

inquirer
  .prompt([
    {
        type:'input',
        message: 'please enter 3 characters',
        name:'char'
    },
    {
        type:'input',
        message:'please enter a hexadecimal or color',
        name:'color'
    },
    {
        type:'list',
        message:'please choose a shape',
        name:'shape',
        choices:['circle','triangle','square']
    },
    {
        type:'input',
        message: 'please enter shape color or hexadecimal',
        name:'shapeColor'
    }

    
  ])
  .then((answers) => {
    if(answers = 'char'){

    }
    fs.writeFileSync('./logo.svg')
  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {

    }
  });
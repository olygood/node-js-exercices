#!/user/bin/env node
const figlet = require('figlet');
const chalk = require('chalk');
const boxen = require('boxen');


figlet.text("                                                           Hack-NodeJs-Card", (err, data) => {
  
    console.log(chalk.green.bold(data) + "\n" + boxen(chalk.green.bold("                        OLYGOOD\n")+
    chalk.green.bold("                   Web Developer @Becode \n \n")+
    chalk.green.underline("LinkedIn: ") + chalk.white("https://www.linkedin.com/in/olivier-huttmacher/\n\n") +
    chalk.green.underline("GitHub: ") + chalk.white (" https://github.com/olygood/node-js-exercices\n\n") +
    chalk.green.underline("Npm: ") + chalk.white (" \n\n")+
    chalk.green.underline("Email: ") + chalk.white ("oliLesBonTuyaux@gmail.com"), 
    {
        borderColor: "white",
        borderStyle: "single-double",
        float: "center",
        padding: 2
    }));
});

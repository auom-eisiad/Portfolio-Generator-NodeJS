// Import the inquirer and file system module in order to make the file interactive
const inquirer = require('inquirer');
const fs = require('fs');

// Define the input HTML Content
const innerHTMLDoc = ({ name, location, bio, github, linkedin }) =>
`
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Portfolio</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
</head>
<body class="mr-5 bg-light">
    <header class="mb-5 mt-5">
        <div class="container p-5">
            <h1 class="font-weight-bold"><i class="fa fa-user-circle fa-bounce" style="color: #2c7522;"></i> Hi! My name is ${name}.</h1>
            <h2>I am from ${location}.</h2>
            <p>${bio}</p>
            <h3 class="lead">It is nice to meet you! <span class="badge bg-success">Contact Me</span></h3>
            <ul class="list-group">
                <li class="list-group-item list-group-item-success text-dark"><strong>Here is my Github:</strong> ${github}</li>
                <li class="list-group-item list-group-item-success text-dark"><strong>Here is my LinkedIn:</strong> ${linkedin}</li>
            </ul>
        </div>
    </header>
    <script src="https://kit.fontawesome.com/e1d81dddcf.js"></script>
</body>
</html>
`
// A function taking in an array of question objects as its argument that prompt the user for their input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you from?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Share a brief description about yourself (eg. favorite food, hobby, etc.)',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'Provide your Github URL',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Provide your LinkedIn URL',
        name: 'linkedin',
    },
  ])

  // ATTEMPT ONE
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log(err)
//   )
//   .then((display) => {
//     const innerHTMLDoc = showHtml(display);
//     fs.displayHTML('portfolio', innerHTMLDoc (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

  // ATTEMPT TWO
//   .then((data) => {
//     const portfolio = innerHTMLDoc(data);

//     fs.writeFile(portfolio, JSON.stringify(data, null, '\t'), (err) =>
//       err ? console.log(err) : console.log('Success!')
//     );
//   });

  // ATTEMPT THREE
// An asynchronous function that returns a Promise. Once resolved, it passes the input data from the prompt to the callback function
.then((input) => {

    // Create a variable to process the input data into the called HTML function 
    const portfolio = innerHTMLDoc(input);

    // Using the file system module to write the portfolio data into an index.html file
    // index.html is the file where the portfolio data will be saved in
    // portfolio is the data that will be written in the file
    // (err) => is a callback function that gets excecuted after if there is an error that occurs during the process
    fs.writeFile('index.html', portfolio, (err) =>

      // A ternary operator that checks if there is an error
      // If true, it will log an error to the console, but if false, it logs the success message
      err ? console.log(err) : console.log('Thank you! Here is your Portfolio! :)')
    );
  });
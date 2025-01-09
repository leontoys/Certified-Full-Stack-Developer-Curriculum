let questions = [
    {
      category: "Science",
      question: "What is the chemical symbol for water?",
      choices: ["H2O", "O2", "CO2"],
      answer: "H2O"
    },
    {
      category: "History",
      question: "Who was the first President of the United States?",
      choices: ["Abraham Lincoln", "George Washington", "Thomas Jefferson"],
      answer: "George Washington"
    },
    {
      category: "Geography",
      question: "Which is the largest continent by land area?",
      choices: ["Africa", "Asia", "North America"],
      answer: "Asia"
    },
    {
      category: "Sports",
      question: "In which sport is the term 'love' used?",
      choices: ["Tennis", "Football", "Basketball"],
      answer: "Tennis"
    },
    {
      category: "Entertainment",
      question: "Which movie features the character 'Jack Dawson'?",
      choices: ["Titanic", "Avatar", "Inception"],
      answer: "Titanic"
    }
  ];
  
  const getRandomQuestion =  () => questions[Math.floor( Math.random()*questions.length )]
  
  const getRandomComputerChoice =  (choices) => choices[Math.floor( Math.random()*choices.length )]
  
  const getResults =  (question,choice) => question.answer == choice ? 
  "The computer's choice is correct!" : 
  `The computer's choice is wrong. The correct answer is: ${question.answer}`
  
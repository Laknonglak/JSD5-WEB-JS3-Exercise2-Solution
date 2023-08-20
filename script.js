//Exercise 2.1

function calculatePaymentCost(transactionAmount) {
    const transactionFee = 3; // Fixed fee per transaction
    const interestRate = 0.001; // 0.1% interest fee
  
    const interestFee = transactionAmount * interestRate;
    const totalCost = transactionFee + interestFee;
  
    return totalCost;
  }
  
  const transactionAmount = 500; // Example transaction amount
  const totalPaymentCost = calculatePaymentCost(transactionAmount);
  
  console.log("Maria's total payment cost:", totalPaymentCost);


//Exercise 2.2
//Part 1
    
    const friend1 = "Jack";
    const friend2 = "Jill";
    const friend3 = "Bob";

    console.log(`Welcome 👋 ${friend1}, ${friend2}, ${friend3}.`);

//Part 2
  
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
  }
  
  const birthYear = 1990;
  const age = calculateAge(birthYear);
  console.log(`You are ${age} years old.`);

//Part 3
function greetWithAges(name1, birthYear1, name2, birthYear2, name3, birthYear3) {
    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);
    const age3 = calculateAge(birthYear3);
    
    console.log(`Welcome ${name1}, you are ${age1}.`);
    console.log(`Welcome ${name2}, you are ${age2}.`);
    console.log(`Welcome ${name3}, you are ${age3}.`);
  }
  
  const friend1BirthYear = 1985;
  const friend2BirthYear = 1992;
  const friend3BirthYear = 1998;

  
  greetWithAges(friend1, friend1BirthYear, friend2, friend2BirthYear, friend3, friend3BirthYear);

  //Challenge

  function getGrade(score) {
   if (score > 11){
      return "maximun score is 11, please input again?";
   } else if (score === 11) {
      return "Perfect";
    } else if (score > 8) {
      return "Excellent";
    } else if (score >= 5) {
      return "Pass";
    } else {
      return "fail";
    }
  }
  
  const studentScore = 11;
  const grade = getGrade(studentScore);
  console.log(`Student's grade: ${grade}`);
  
  
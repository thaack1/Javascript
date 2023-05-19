// This program compares 3 NFL QBs by their individual trait scores and overall score.
// Written by: Tyler Haack
// Last modified: 5/14/23


function QB1Calculations(QBInputs) {
  
  // Declare variables
  var IQWeight = 2;
  var accuracyWeight = 1.75;
  var powerWeight = 1.5;
  var weightTotal = IQWeight + accuracyWeight + powerWeight;
  var QB1WeightSum;
  var QB1WeightAverage;
  
  // Calculate weighted total for the first QB
  QB1WeightSum = QBInputs[2] * IQWeight + QBInputs[3] * accuracyWeight + QBInputs[4] * powerWeight;
  
  // Calculate weighted average for the first QB
  QB1WeightAverage = QB1WeightSum / weightTotal;
  QB1WeightAverage = Math.round(QB1WeightAverage);
  
  // Have weighted average available to call
  return(QB1WeightAverage);
}

function QB2Calculations(QBInputs) {
  
  // Declare variables
  var IQWeight = 2;
  var accuracyWeight = 1.75;
  var powerWeight = 1.5;
  var weightTotal = IQWeight + accuracyWeight + powerWeight;
  var QB2WeightSum;
  var QB2WeightAverage;
  
  // Calculate weighted total for the second QB
  QB2WeightSum = QBInputs[7] * IQWeight + QBInputs[8] * accuracyWeight + QBInputs[9] * powerWeight;
  
  // Calculate weighted average for the second QB
  QB2WeightAverage = QB2WeightSum / weightTotal;
  QB2WeightAverage = Math.round(QB2WeightAverage);
  
  // Have weighted average available to call
  return(QB2WeightAverage);
}

function QB3Calculations(QBInputs) {
  
  // Declare variables
  var IQWeight = 2;
  var accuracyWeight = 1.75;
  var powerWeight = 1.5;
  var weightTotal = IQWeight + accuracyWeight + powerWeight;
  var QB3WeightSum;
  var QB3WeightAverage;
  
  // Calculate weighted total for the third QB
  QB3WeightSum = QBInputs[12] * IQWeight + QBInputs[13] * accuracyWeight + QBInputs[14] * powerWeight;
  
  // Calculate weighted average for the third QB
  QB3WeightAverage = QB3WeightSum / weightTotal;
  QB3WeightAverage = Math.round(QB3WeightAverage);
  
  // Have weighted average available to call
  return(QB3WeightAverage);
}

function QBComparison() {
  
  // Declare variables
  var firstName;
  var lastName;
  var numInput;
  var QBInputs = [];
  var output1;
  var output2;
  var output3;
  var nameCounter = 1;
  var numCounter;
  var QB1Grade;
  var QB2Grade;
  var QB3Grade;
  
  // User inputs for QB names and their trait scores
  while (nameCounter < 4) {
    alert("In the following boxes, please enter a QB's full name. (" + nameCounter + " of 3)");
    firstName = prompt("First name:");
    lastName = prompt("Last name:");
    if (isNaN(firstName) && isNaN(lastName)) {
      QBInputs.push(firstName);
      QBInputs.push(lastName);
      nameCounter++;
    } else {
      alert("You entered a number, not a name. Please try again.");
      continue;
    }
    alert("In the following boxes, please enter the QB's score for IQ, Accuracy, and Power, respectively.");
    numCounter = 1;
    while (numCounter < 4) {
      numInput = prompt("Enter a number between 85 and 99. (" + numCounter + " of 3)");
      numInput = Number(numInput);
      if (numInput >= 85 && numInput <= 99) {
        QBInputs.push(numInput);
        numCounter++;
      } else {
        alert("You entered a number outside the specified range. Please try again.");
      }
    }
  }
  
  // Call QBCalculations function and retreive calculation results
  QB1Grade = QB1Calculations(QBInputs);
  QB2Grade = QB2Calculations(QBInputs);
  QB3Grade = QB3Calculations(QBInputs);
  
  // Output user inputs and calculation results
  output1 = QB1Grade;
  output2 = QB2Grade;
  output3 = QB3Grade;
  
  // Display output
  document.write("QB1 Name: " + QBInputs[0] + " " + QBInputs[1] + "<br>");
  document.write("IQ: " + QBInputs[2] + "<br>");
  document.write("Accuracy: " + QBInputs[3] + "<br>");
  document.write("Power: " + QBInputs[4] + "<br>");
  document.write("Weighted Overall: " + output1 + "<br><br>");
  document.write("QB2 Name: " + QBInputs[5] + " " + QBInputs[6] + "<br>");
  document.write("IQ: " + QBInputs[7] + "<br>");
  document.write("Accuracy: " + QBInputs[8] + "<br>");
  document.write("Power: " + QBInputs[9] + "<br>");
  document.write("Weighted Overall: " + output2 + "<br><br>");
  document.write("QB3 Name: " + QBInputs[10] + " " + QBInputs[11] + "<br>");
  document.write("IQ: " + QBInputs[12] + "<br>");
  document.write("Accuracy: " + QBInputs[13] + "<br>");
  document.write("Power: " + QBInputs[14] + "<br>");
  document.write("Weighted Overall: " + output3 + "<br><br>");
  document.write("Average of Weighted Overalls: " + Math.round((output1+output2+output3) / 3))
}

QBComparison();
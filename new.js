
  function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height1 = parseFloat(document.getElementById("height1").value);
    var height2 = parseFloat(document.getElementById("height2").value);
    if (isNaN(weight) || isNaN(height1)) {
      alert("Please enter valid numbers for weight and height.");
      return;
    }
    var heightFeet = (height1 * 0.3048); 
    var heightInch = (height2 * 0.0254); 
    var height = heightFeet + heightInch;
    var bmi = weight / (height * height);
    var result = document.getElementById("result");
    result.textContent = "Your BMI is: " + bmi.toFixed(2);
    /*if(bmi<18.5){
      document.getElementById("color").style.backgroundColor="yellow";
      document.getElementById("comments").innerHTML="Eat nutrient-dense foods and have frequent small meals.";
      document.getElementById("result").style.color="gold";
    }
    else if(bmi>=18.5 && bmi < 25 ){
      document.getElementById("color").style.backgroundColor="green";
      document.getElementById("comments").innerHTML="Maintain a balanced diet and exercise regularly.";
      document.getElementById("result").style.color="green";
    }
    else if(bmi>=25 && bmi < 30 ){
      document.getElementById("color").style.backgroundColor="orange";
      document.getElementById("comments").innerHTML="Engage in regular physical activity ";
      document.getElementById("result").style.color="orange";
    }

    else if(bmi>=30 ){
      document.getElementById("color").style.backgroundColor="red";
      document.getElementById("comments").innerHTML="Engage in regular physical activity ";
      document.getElementById("result").style.color="red";
    } 
    return bmi;*/
    // Function to update the BMI indicator based on the given BMI value
/*function updateBMIIndicator(bmi) {
  var indicator = document.getElementById("bmi-indicator");

  if (bmi < 18.5) {
    indicator.style.backgroundColor = "yellow";
    indicator.style.width = "0%";
  } else if (bmi >= 18.5 && bmi < 25) {
    indicator.style.backgroundColor = "green";
    indicator.style.width = "50%";
  } else if (bmi >= 25 && bmi < 30) {
    indicator.style.backgroundColor = "orange";
    indicator.style.width = "75%";
  } else {
    indicator.style.backgroundColor = "red";
    indicator.style.width = "100%";
  }
}
updateBMIIndicator(bmi);

}*/
if(weight>200 || heightInch > 12 || heightFeet>9 ){
  alert("Please Enter Valid Input")
  return;
}
    
        let category;
        if (bmi < 18.5) {
          category = 'underweight';
          document.getElementById("Result").innerHTML = "You Fall under 'UnderWeight' Category.Eat nutrient-dense foods and have frequent small meals.";
          document.getElementById("P1").innerHTML=" Increase Caloric Intake";
          document.getElementById("P2").innerHTML=" Balance Macronutrients ";
          document.getElementById("P3").innerHTML=" Have Frequent meals and Nutrient rich food with high Protein sources";
          document.getElementById("P5").innerHTML="Here is what to follow:";
        } else if (bmi >=18.5 && bmi < 25) {
          category = 'normal';
          document.getElementById("Result").innerHTML = "You Fall under 'Normal weight' Category.Maintain a balanced diet and exercise regularly.";
          document.getElementById("P1").innerHTML=" Eat a Variety of Nutrient-Dense Foods<";
          document.getElementById("P2").innerHTML=" Portion Control with Balanced Macronutrients ";
          document.getElementById("P3").innerHTML=" Minimize Processed Foods and Added Sugars";
          document.getElementById("P5").innerHTML="Here is what to follow:";
        } else if (bmi>=25 && bmi < 30) {
          category = 'overweight';
          document.getElementById("Result").innerHTML = " You Fall under 'Overweight' Category.Engage in regular physical activity ";
          document.getElementById("P1").innerHTML=" Have Mindful eating habits";
          document.getElementById("P2").innerHTML=" Regular Physical Activity and Hydration< ";
          document.getElementById("P3").innerHTML=" Minimize Processed Foods and Added Sugars";
          document.getElementById("P5").innerHTML="Here is what to follow:";
        } else {
          category = 'obese';
          document.getElementById("Result").innerHTML = "You Fall under 'Obese' Category.Engage in regular physical activity ";
          document.getElementById("P1").innerHTML=" Increase Fiber Intake";
          document.getElementById("P2").innerHTML=" Regular Physical Activity andHydration";
          document.getElementById("P3").innerHTML=" Minimize Processed Foods and Added Sugars";
          document.getElementById("P5").innerHTML="Here is what to follow:";
        }
      
        // Update the meter indicator with the determined category
        const indicator = document.getElementById('indicator');
        indicator.style.width = `${(bmi / 40) * 100}%`;
        indicator.classList.add(category);
      }
  

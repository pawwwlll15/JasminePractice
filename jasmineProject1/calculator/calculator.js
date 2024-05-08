window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});



function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 30000, years: 12, rate: 3}; /* initializing values */
  let amount = document.querySelector("#loan-amount");
  let years = document.querySelector('#loan-years');
  let rate = document.querySelector('#loan-rate');
 
  amount.value = values.amount;
  years.value = values.years;
  rate.value = values.rate;
  
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}


// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) { /* pulling from values array created in 'setupInitialValues()' */

  let interestRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);

  
  monthlyPayment = (values.amount * interestRate) / (1-(1+interestRate) ** -n);
  finalMonthly = monthlyPayment.toFixed(2);
  return finalMonthly.toString();
}

function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}


/* ((amount * interestRate) / (1-(1 + interestRate) * Math.pow(-years * 12))); */
//declare global variables


    /*
    Income:
        1.	Employment Income
        2.	Non-employment Income
        3.	Investment Income
        4.	Rent Income
        5.	Hobby Income
        6.	Self-employment Income
    */

// var employment_Income = document.getElementById("employmentIncome");
// var nonemployment_Income = document.getElementById("nonemploymentIncome");
// var investment_Income = document.getElementById("investmentIncome");
// var rent_Income = document.getElementById("rentIncome");
// var hobby_Income = document.getElementById("hobbyIncome");
// var selfemployment_Income = document.getElementById("selfemploymentIncome");

var income = {};

    /*
    Liquid Assets:
        1.	Bank Accounts
        2.	Investment Accounts (non-retirement)
        3.	investment Accounts (retirement)
        4.	Annuities
        5.	Cash-equivalent policies
        6.	Monies Owed
        7.	Cash
    */

// var bank_Accounts = document.getElementById('bankAccounts');
// var investment_Accounts = document.getElementById('investmentAccounts');
// var annuities = document.getElementById('annuities');
// var cash_Equivalent_Policies = document.getElementById('cashEquivalentPolicies');
// var monies_Owed = document.getElementById('moniesOwed');
// var cash = document.getElementById('cash');


// User Basic Info
var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var age = document.getElementById('age').value;
var gender = document.getElementById('gender').value;
var address = document.getElementById('address').value;
var city = document.getElementById('city').value;
var state = document.getElementById('state').value;
var zip = document.getElementById('zip').value;

var user = {
  firstName: firstName,
  lastName: lastName,
  age: age,
  gender: gender,
  address: address,
  city: city,
  state: state,
  zip: zip
};

// Income Info
var incomeType = document.getElementById('incomeType');
var incomeTotal = document.getElementById('incomeTotal');

var income = {};

// Expense Info
var expenses = document.getElementById('expenses');

// Debt Info
var debt = document.getElementById('debt');

// Asset Info

var liquidAssets = {};
var nonLiquidAssets = {};
var assets = {};

// Family Info
var family = {};

// Store data.
function storeInputData() {
  // User Basic Info
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var age = document.getElementById('age').value;
  var gender = document.getElementById('gender').value;
  var address = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zip = document.getElementById('zip').value;

  var user = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: gender,
    address: address,
    city: city,
    state: state,
    zip: zip
  };

  // Income Info
  var incomeType = document.getElementById('incomeType').value;
  var incomeTotal = document.getElementById('incomeTotal').value;

  var income = {};

  // Expense Info
  var expenses = document.getElementById('expenses').value;

  // Debt Info
  var debt = document.getElementById('debt').value;

  // Asset Info

  var liquidAssets = {};
  var nonLiquidAssets = {};
  var assets = {};

  // Family Info
  var family = {};
};

//When window has loaded... execute this...
window.onload = function() {
  $(document).foundation();
  init();
};

// Update when user changes input data.
document.getElementById('submit').addEventListener('click', function() {
  storeInputData();
}, false);

//GLOBAL NAMESPACE

var STANCEAPP = STANCEAPP || {};

STANCEAPPAPP.Event = {};

STANCEAPP.commonmethod = {
};

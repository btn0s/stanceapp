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

// var employment_Income = $("employmentIncome");
// var nonemployment_Income = $("nonemploymentIncome");
// var investment_Income = $("investmentIncome");
// var rent_Income = $("rentIncome");
// var hobby_Income = $("hobbyIncome");
// var selfemployment_Income = $("selfemploymentIncome");

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

// var bank_Accounts = $('bankAccounts');
// var investment_Accounts = $('investmentAccounts');
// var annuities = $('annuities');
// var cash_Equivalent_Policies = $('cashEquivalentPolicies');
// var monies_Owed = $('moniesOwed');
// var cash = $('cash');


// User Basic Info
var firstName;
var lastName;
var age;
var gender;
var address;
var city;
var state;
var zip;

var user = {};

// Income Info
var incomeType;
var incomeTotal;

var income = {};

// Expense Info
var expenses;

// Debt Info
var debt;

// Asset Info

var liquidAssets = {};
var nonLiquidAssets = {};
var assets = {};

// Family Info
var family = {};

// Store data.
function storeInputData() {
  // User Basic Info
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var age = $('#age').val();
  var gender = $('#gender').val();
  var address = $('#address').val();
  var city = $('#city').val();
  var state = $('#state').val();
  var zip = $('#zip').val();

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
  var incomeType = $('#incomeType').val();
  var incomeTotal = $('#incomeTotal').val();

  var income = {};

  // Expense Info
  var expenses = $('#expenses').val();

  // Debt Info
  var debt = $('#debt').val();

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

$(document).ready(function() {
  // Update when user changes input data.
  $('#submit').click(function() {
    storeInputData();
  });

  // Update when user makes changes.
  $('input').on( 'blur', function() {
    storeInputData();

    console.log(firstName);
  });
});

//GLOBAL NAMESPACE

var STANCEAPP = STANCEAPP || {};

STANCEAPPAPP.Event = {};

STANCEAPP.commonmethod = {
};

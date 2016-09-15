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

var employment_Income = document.getElementById("employmentIncome");
var nonemployment_Income = document.getElementById("nonemploymentIncome");
var investment_Income = document.getElementById("investmentIncome");
var rent_Income = document.getElementById("rentIncome");
var hobby_Income = document.getElementById("hobbyIncome");
var selfemployment_Income = document.getElementById("selfemploymentIncome");

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

var bank_Accounts = document.getElementById('bankAccounts');
var investment_Accounts = document.getElementById('investmentAccounts');
var annuities = document.getElementById('annuities');
var cash_Equivalent_Policies = document.getElementById('cashEquivalentPolicies');
var monies_Owed = document.getElementById('moniesOwed');
var cash = document.getElementById('cash');

var liquid_Assets = {};

//When window has loaded... execute this...
window.onload = function() {
  $(document).foundation();
  init();
};

//GLOBAL NAMESPACE

var STANCEAPP = STANCEAPP || {};

STANCEAPPAPP.Event = {};

STANCEAPP.commonmethod = {
};

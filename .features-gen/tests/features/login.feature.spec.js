// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login Functionality', () => {

  test('Test Valid Login', async ({ Given, When, Then, And }) => { 
    await Given('user enters url'); 
    await When('user enters username'); 
    await And('user enters password'); 
    await And('clicks login button'); 
    await Then('login must be success'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given user enters url","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Action","textWithKeyword":"When user enters username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"And user enters password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And clicks login button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then login must be success","stepMatchArguments":[]}]},
]; // bdd-data-end
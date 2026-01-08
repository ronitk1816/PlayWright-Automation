import {test,expect} from '@playwright/test';
import { LoginPage } from '../../Page_Object_Model/Flipkart/loginPage';
import {data} from '../../Test Data/Flipkart.testData.json'

test('Login Page test', async ({page})=>{
 const loginPage= new LoginPage(page);

 //navigate to URL
 await loginPage.navigateToURL();
 await loginPage.loginMethod(data[0].mobileNumber);
})
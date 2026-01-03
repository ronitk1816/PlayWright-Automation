import {test} from '@playwright/test'
import {LoginPage} from '../Page_Object_Model/loginPage'

test('Page Object-Login page test',async({page})=>{
const login=new LoginPage(page);
//navigate to website
await login.goToSite();

//perform login
await login.performLogin('applitoolsautomation@yopmail.com','Test@123');

//validate login successfully
await login.validateLogin('Discover jobs');

//perform logout
await login.logout();

//validate logout
await login.verifyAfterLogOut();

})
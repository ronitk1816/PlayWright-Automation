import{test} from '@playwright/test'
import {IpodProductLogin} from '../Page_Object_Model/IpodProduct/iPodproductLogin'
import {ValidateLogin} from '../Page_Object_Model/IpodProduct/validateLogin'
import {SelectProduct} from '../Page_Object_Model/IpodProduct/selectProduct'
import {EditCart} from '../Page_Object_Model/IpodProduct/editCart'

test('test for Ipod product validation', async({page})=>{
  const login= new IpodProductLogin(page);
  const validateLogin= new ValidateLogin(page);
  const selectProduct= new SelectProduct(page);
  const verifyEmptyCart= new EditCart(page);

  //navigate to URL
  await login.navigateToUrl();

  // login
  await login.login('lambdatestnew@yopmail.com','Lambda123');

  //verifyLogin
  await validateLogin.verifyLogin('My Orders');


  //navigate to HomePage
  await validateLogin.navigateToHomePage();

  //select product
  await selectProduct.clickOnSoftware();
  await selectProduct.searchForProduct('ipod');

  //remove product & verify the cart is empty
  await verifyEmptyCart.navigateToCart();
  await verifyEmptyCart.removeProduct();
  await verifyEmptyCart.validateEmptyCart('Your shopping cart is empty!');


})
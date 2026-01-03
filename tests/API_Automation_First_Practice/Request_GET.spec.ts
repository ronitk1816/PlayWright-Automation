 import {test,expect} from '@playwright/test'

 test('API-GET request Demo',async({request})=>{
  const response= await request.get('/api/productsList');
  expect(response.status()).toBe(200);

  const responseBody=JSON.parse(await response.text());
  expect(responseBody.products[0].name).toBe('Blue Top');
  console.log(responseBody.products[1].name);
  expect(responseBody.products[2].category.category).toBe('Dress');
  expect(responseBody.products[2].brand).toBeTruthy();
  
 })
import {test,expect} from '@playwright/test'

test('Authentication-generating token',async({request})=>{
 const response= await request.get('/api/productsList')
 const responseBody=await response.json();
 const token= responseBody.token;
 console.log('New Generated token: '+token);
 console.log(response.status());
 console.log('JSON response: ',responseBody);


 })

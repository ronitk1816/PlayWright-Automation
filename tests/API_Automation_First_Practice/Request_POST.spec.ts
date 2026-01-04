import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'
import { request } from 'node:http';
import { ok } from 'node:assert';
const { DateTime } = require("luxon")

const randomFirstName = faker.person.firstName();
const randomLastName = faker.person.lastName();
const randomNumber = faker.string.numeric(4);
const currentDate = DateTime.now().toFormat('yyyy-mm-dd');
const checkOutDay = DateTime.now().plus({ days: 5 }).toFormat('yyyy-mm-dd');

test('create dynamic values with POST request', async ({ request }) => {

    const response = await request.post('/api/productsList', {
        data: {
            "firstName": randomFirstName,
            "lastName": randomLastName,
            "totalPrice": randomNumber,
            "bookingDates": {
                "checkIn": currentDate,
                "checkOut": checkOutDay
            },
            "additionalDetails": "Dinner"
        }
    })
    //expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const response1=await response.json();
    const response2= JSON.parse(await response.text());
    

})
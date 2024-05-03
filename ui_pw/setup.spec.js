import dotenv from 'dotenv';
import { test as setup } from '@playwright/test';
dotenv.config();

const authFile = '.auth/user.json';

setup('Log in', async ({ page }) => {
    await page.goto('https://identity.getpostman.com/login');
    await page.locator('#username').fill(process.env.POSTMAN_USERNAME);
    await page.locator('#password').fill(process.env.POSTMAN_PASSWORD);
    await page.locator('#sign-in-btn').click();
    await page.waitForURL(/web\.postman\.co/);
    await page.context().storageState({ path: authFile });
});

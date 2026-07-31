import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

type PageObjectModelFixture={
    loginPage:LoginPage;
}

export const test = baseTest.extend<PageObjectModelFixture>({
    loginPage:async({page},use) =>{
        use(new LoginPage(page))
    }
})
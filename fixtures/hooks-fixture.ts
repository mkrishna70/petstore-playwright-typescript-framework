import {test as baseTest} from '../fixtures/pageobjectmodel-fixture'

type HooksFixture ={
    gotoURL:undefined;
    logout:undefined;

}

export const test = baseTest.extend<HooksFixture>({
    gotoURL:async({loginPage},use)=>{
        await loginPage.gotoPetStore()
        await loginPage.enterUserCredentials(`${process.env.USER_NAME}`,`${process.env.PASSWORD}`)
        use(undefined)
    },
    logout:async({logoutPage},use)=>{
        await logoutPage.clickOnSignoutLink()
        use(undefined)
    },

})
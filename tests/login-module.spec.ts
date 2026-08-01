import {test} from '../fixtures/hooks-fixture'

/**
 * test 
 */
test('Login',async({page,gotoURL,loginPage})=>{
    await loginPage.enterUserCredentials(`${process.env.USER_NAME}`,`${process.env.PASSWORD}`)
})
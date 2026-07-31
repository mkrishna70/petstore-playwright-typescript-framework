import {test as baseTest} from '../fixtures/pageobjectmodel-fixture'

type HooksFixture ={
    gotoURL:undefined;
    logout:undefined;

}

export const test = baseTest.extend<HooksFixture>({
    gotoURL:async({loginPage},use)=>{
        await loginPage.gotoPetStore()
        use(undefined)
    },
    

})
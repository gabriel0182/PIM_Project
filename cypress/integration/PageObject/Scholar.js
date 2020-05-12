///  <reference types="cypress"/>

import Loginpage from  '../PageObject/Loginpage'

const lp = new Loginpage ()

class Scholar
{

go_scholar ()
{
    lp.Visit()
    const btn =cy.get('[href="/apply"]')
    btn.click()

    const btn2= cy.get('[href="/apply-scholar"]')
    btn2.click()
}

filltitle ()

{

    const title=cy.get('#mui-component-select-0')
    title.click()
    title.get('[data-value="Mrs."]')
    title.click()
    return this
}

fillfisrtN (value)

{
    const FN=cy.get('[id="81"]')
    FN.clear
    FN.type(value)
    return this

}

fillLN (value)

{
    const FN=cy.get('[id="82"]')
    FN.clear
    FN.type(value)
    return this

}

fillAdd (value)

{
    const FN=cy.get('[id="83"]')
    FN.clear
    FN.type(value)
    return this

}

fillState ()

{

    const State=cy.get('.iheldx')
    State.click()
    State.get('[data-value="Florida"]')
    State.click()
    return this
}

fillCity ()

{

    const city=cy.xpath("//input[@id='86']")
    city.type('Miami')
    return this
}

fillzip (value)

{
    const zip=cy.get('[id="87"]')
    zip.clear
    zip.type(value)
    return this

}

fillemailguardian (value)

{
    const emg=cy.get('[id="88"]')
    emg.clear
    emg.type(value)
    return this

}


fillphoneguardian (value)

{
    const emg=cy.get('[id="89"]')
    emg.clear
    emg.type(value)
    return this

}

selectpreferred (value)

{
    const pre=cy.xpath("//section[@id='Guardian Contact Information']//label[1]//span[1]//span[1]//input[1]")
    pre.click()
    return this

}

selectlegalguardian ()

{
   const legal=cy.xpath("//section[@id='Guardian Information']//div[@class='styles__Wrapper-sc-1exyr8r-0 gRRVHF']//div[2]//fieldset[1]//div[1]//label[1]//span[1]//span[1]//input[1]")
   legal.click()
   return this

}

gradestudents ()

{
   const grade=cy.xpath("//section[@id='Guardian Information']//div[4]//fieldset[1]//div[1]//label[1]//span[1]//span[1]//input[1]")
   grade.click()
   return this

}

scholarshiprecipient ()

{

   const precip=cy.xpath("//section[@id='Guardian Information']//div[6]//fieldset[1]//div[1]//label[1]//span[1]//span[1]//input[1]")
   precip.click()
   return this


}

appliedbefore ()

{

    const applied=cy.xpath("//section[@id='Guardian Information']//div[8]//fieldset[1]//div[1]//label[2]//span[1]//span[1]//input[1]")
    applied.click()
    return this

}

computerathome()

{

    const omath=cy.xpath("//section[@id='Computer & Internet Access']//div[@class='styles__Wrapper-sc-1exyr8r-0 gRRVHF']//div[2]//fieldset[1]//div[1]//label[1]//span[1]//span[1]//input[1]")
    omath.click()
    return this

}

accesstheinternet ()

{
    const accessint=cy.xpath("//div[@name='98']//label[2]//span[1]//span[1]//input[1]")
    accessint.check()
    
    const accessint2=cy.xpath("//div[@name='98']//label[5]//span[1]//span[1]//input[1]")
    accessint2.check()
    return this

}

youaccessinternet ()

{

    const youacc=cy.xpath("//div[@name='99']//label[4]//span[1]//span[1]//input[1]")
    youacc.check()

    const youacc2=cy.xpath("//div[@name='99']//label[5]//span[1]//span[1]//input[1]")
    youacc2.check()
    return this

}

comfortable ()

{


    const conf=cy.xpath("//section[@id='Computer & Internet Access']//div[8]//fieldset[1]//div[1]//label[1]//span[1]//span[1]//input[1]")
    conf.check()
    return this


    }

    section4 ()

    {
            const selfi=cy.xpath("//section[@id='Demographic Information']//fieldset[@class='MuiFormControl-root styles__StyledFormControl-y6pzgx-0 eZDNad']//label[7]//span[1]//span[1]//input[1]")
            selfi.check()
            const primle=cy.xpath("//section[@id='Demographic Information']//div[4]//fieldset[1]//div[1]//label[1]//span[1]//span[1]//input[1]")
            primle.check()
            const secondle=cy.xpath("//section[@id='Demographic Information']//div[6]//fieldset[1]//div[1]//label[2]//span[1]//span[1]//input[1]")
            secondle.check()
            return this



    }


    section5 ()

    {

        const comm=cy.xpath("//section[@id='School Interaction']//div[@class='styles__Wrapper-sc-1exyr8r-0 gRRVHF']//div[2]//fieldset[1]//div[1]//label[3]//span[1]//span[1]//input[1]")
        comm.check()
        const often=cy.xpath("//section[@id='School Interaction']//div[4]//fieldset[1]//div[1]//label[4]//span[1]//span[1]//input[1]")
        often.check()
        const average=cy.xpath("//section[@id='School Interaction']//div[6]//fieldset[1]//div[1]//label[3]//span[1]//span[1]//input[1]")
        average.check()
        const reading=cy.xpath("//section[@id='School Interaction']//div[8]//fieldset[1]//div[1]//label[4]//span[1]//span[1]//input[1]")
        reading.check()
        const learning=cy.xpath("//div[10]//fieldset[1]//div[1]//label[2]//span[1]//span[1]//input[1]")
        learning.check()
        return this

    }

    section6 ()

    {


        const hear=cy.get("[id='109']")
        hear.clear()
        hear.type("hi, my name is peter I have bought the kiwi van.")
        const receive=cy.get("[id='110']")
        receive.clear()
        receive.type("hi, my name is peter I have bought the kiwi van.")
        return this


    }


    section7 (value,value2)

    {
    
    
    const scn=cy.get('[id="111"]')
    scn.clear()
    scn.type('Jhon')
    const scln=cy.get('[id="112"]')
    scln.clear()
    scln.type(value)
    const relation=cy.get('[id="113"]')
    relation.clear()
    relation.type('Son')
    const cell=cy.get('[id="115"]')
    cell.clear()
    cell.type('3456787654')
    const gender=cy.xpath("//div[@class='styles__Wrapper-nrkjin-0 injzyB']//div[@id='mui-component-select-0']")
    gender.click()
    gender.get('[data-value="Male"]')
    gender.click()
    const identify=cy.xpath("//section[@id='Child Information']//label[7]//span[1]//span[1]//input[1]")
    identify.check()
    const most=cy.get('[id="118"]')
    most.clear()
    most.type("Maths")
    const support=cy.get('[id="119"]')
    support.clear()
    support.type("Science")
    return this
    





    }


apply ()

{
    const btn3= cy.contains('Submit')
    btn3.click({ timeout: 10000 })

}

}


export default Scholar
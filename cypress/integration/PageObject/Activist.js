///  <reference types="cypress"/>

import Loginpage from "../PageObject/Loginpage";
import "cypress-file-upload";

const lp = new Loginpage();

class activist {
  activistform() {
    lp.Visit();
    const btn = cy.get('[href="/apply"]');
    btn.click();
    const btn2 = cy.get('[href="/apply-activist"]');
    btn2.click();
  }

  contactinfo() {
    const testData = require("../Activistform/list.json");
    testData.forEach((testDataRow) => {
      const data = {
        name: testDataRow.name,
        last_Name: testDataRow.last_Name,
        learn_about: testDataRow.learn_about,
        email: testDataRow.email,
        phone: testDataRow.phone,
      };
      const FN = cy.xpath("//input[@id='10']");
      FN.clear();
      context(`Generating a test for ${data.name}`, () => {
        FN.type(data.name);
        const ln = cy.xpath("//input[@id='11']");
        ln.clear();
        ln.type(`${data.last_Name}{enter}`);
        const adress = cy.xpath("//input[@id='12']");
        adress.type("Street 89th");
        const State = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[6]/div[1]/div[1]/div[1]/div[1]"
        );
        State.click();
        State.get('[data-value="Florida"]');
        State.click();
        const city = cy.xpath("//input[@id='15']");
        city.type("Miami");
        const zip = cy.xpath("//input[@id='16']");
        zip.type("33654");
        const emaila = cy.xpath("//input[@id='17']");
        emaila.type(`${data.email}{enter}`);
        const phonea = cy.xpath("//input[@id='18']");
        phonea.type(`${data.phone}{enter}`);
        const preferred = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[1]/div[2]/div[1]/div[1]/div[12]/fieldset[1]/div[1]/label[1]/span[2]"
        );
        preferred.click();
        const guardiantitle = cy.xpath(
          "//div[@class='styles__Wrapper-nrkjin-0 jyPRJo']//div[@id='mui-component-select-0']"
        );
        guardiantitle.click();
        guardiantitle.get('[data-value="Mrs."]');
        guardiantitle.click();
        const guardianname = cy.xpath("//input[@id='25']");
        guardianname.type("Jhon");
        const guardianlast = cy.xpath("//input[@id='26']");
        guardianlast.type(`${data.last_Name}{enter}`);
        const guardianadress = cy.xpath("//input[@id='27']");
        guardianadress.type("Street 89th");
        const guardianstate = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[2]/div[2]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/div[1]"
        );
        guardianstate.click();
        guardianstate.get('[data-value="Florida"]');
        guardianstate.click();
        const guardiancity = cy.xpath("//input[@id='29']");
        guardiancity.type("Miami");
        const guardianzip = cy.xpath("//input[@id='31']");
        guardianzip.type("33654");
        const guardianemail = cy.xpath("//input[@id='32']");
        guardianemail.type(`${data.email}{enter}`);
        const contactemer = cy.xpath("//input[@id='36']");
        contactemer.type("Jhon " + `${data.last_Name}{enter}`);
        const relation = cy.xpath("//input[@id='37']");
        relation.type("Son");
        const emergenciphone = cy.xpath("//input[@id='38']");
        emergenciphone.type(`${data.phone}{enter}`);
        const homephone = cy.xpath("//input[@id='39']");
        homephone.type(`${data.phone}{enter}`);
        const workphone = cy.xpath("//input[@id='40']");
        workphone.type(`${data.phone}{enter}`);
        const gender = cy.xpath(
          "//div[@class='styles__Wrapper-nrkjin-0 injzyB']//div[@id='mui-component-select-0']"
        );
        gender.click();
        gender.get('[data-value="Male"]');
        gender.click();
        const highschool = cy.xpath(
          "//div[@class='styles__Wrapper-nrkjin-0 ksCtKU']//div[@id='mui-component-select-0']"
        );
        highschool.click();
        highschool.get('[data-value="Atherton High School"]');
        highschool.click();
        const grade = cy.xpath(
          "//div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-12']//div[@class='styles__Wrapper-nrkjin-0 iheldx']//div[@id='mui-component-select-0']"
        );
        grade.click();
        highschool.get('[data-value="10th"]');
        grade.click();
        const self_identify = cy.xpath(
          "//span[contains(text(),'Latin or Hispanic American')]"
        );
        self_identify.click();
        const minority = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[4]/div[2]/div[1]/div[1]/div[7]/fieldset[1]/div[1]/label[2]"
        );
        minority.click();
        const attend = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[4]/div[2]/div[1]/div[1]/div[9]/fieldset[1]/div[1]/label[2]/span[2]"
        );
        attend.click();
        const media = cy.xpath("//div[@name='76']//label[1]");
        media.click();
        const Program = cy.xpath(
          "//section[@id='EJ Information']//fieldset[@class='MuiFormControl-root styles__StyledFormControl-y6pzgx-0 eZDNad']//label[2]"
        );
        Program.click();
        const learnabout = cy.xpath("//textarea[@id='57']");
        learnabout.clear();
        learnabout.type(`${data.learn_about}{ctrl}{p}`);
        const become = cy.xpath("//textarea[@id='58']");
        become.type(`${data.learn_about}{ctrl}{p}`);
        const Society = cy.xpath("//textarea[@id='59']");
        Society.type(`${data.learn_about}{ctrl}{p}`);
        const activities = cy.xpath("//textarea[@id='60']");
        activities.type(`${data.learn_about}{ctrl}{p}`);
        const before = cy.xpath(
          "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[5]/div[2]/div[1]/div[1]/div[12]/fieldset[1]/div[1]/label[2]"
        );
        before.click();
        const certification = cy.xpath(
          "//div[@name='63']//label[@class='MuiFormControlLabel-root styles__StyledFormControlLabel-y6pzgx-1 bFZtXx']"
        );
        certification.click();
        return this;
      });
    });
  }

  Fileupload() {
    const fileName = "abc.pdf";
    const atth1 = cy.xpath(
      "//section[@id='Documents']//div[@class='styles__Wrapper-sc-1exyr8r-0 gRRVHF']//div[2]//div[1]//div[1]//div[1]//div[1]"
    );
    atth1.attachFile(fileName, { subjectType: "drag-n-drop" });
    const atth2 = cy.xpath(
      "//body/div[@id='app']/main[@id='main-content']/div[@class='MuiContainer-root styles__StyledContainer-sc-1er4ee9-1 jddZvy MuiContainer-maxWidthLg']/div[@class='MuiGrid-root MuiGrid-container']/div[@class='MuiGrid-root MuiGrid-item MuiGrid-grid-sm-12 MuiGrid-grid-md-9 MuiGrid-grid-lg-10']/section[@id='Documents']/div[@class='styles__Wrapper-sc-1exyr8r-0 gRRVHF']/div[@class='MuiBox-root jss657 styles__StyledBox-sc-1exyr8r-1 eMenPc']/div[@class='MuiGrid-root styles__StyledGrid-sc-1exyr8r-2 fDFUzK MuiGrid-container MuiGrid-spacing-xs-3']/div[4]/div[1]/div[1]/div[1]"
    );
    atth2.attachFile(fileName, { subjectType: "drag-n-drop" });
    cy.xpath(
      "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[8]/div[2]/div[1]/div[1]/div[2]/fieldset[1]/div[1]/label[1]"
    ).click();
    const atth3 = cy.xpath(
      "/html[1]/body[1]/div[1]/main[1]/div[1]/div[1]/div[1]/section[8]/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]"
    );
    atth3.attachFile(fileName, { subjectType: "drag-n-drop" });
    return this;
  }

  submit() {
    cy.xpath("//span[contains(text(),'Submit')]").click({ timeout: 10000 });
  }
}

export default activist;

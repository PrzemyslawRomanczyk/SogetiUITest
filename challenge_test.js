const AssertWrapper = require("codeceptjs-assert");

Feature('Challenge');

Scenario('Test case nr 1', I => {

    I.amOnPage('https://www.sogeti.com');
    I.click('#CookieConsent .buttons button.acceptCookie');


    I.moveCursorTo("#header > div.desktop_wrapper > nav > ul > li.has-children.level2 > div.wrapper > span");
    I.see('Automation', '#header');

    I.moveCursorTo('.level1 a[href="https://www.sogeti.com/services/automation/"]');
    I.wait(3);
    let output = I.grabCssPropertyFrom('.level1 a[href="https://www.sogeti.com/services/automation/"]', 'text-decoration');
    I.wait(3);
    // var assert = require('assert');
    // assert.strictEqual('underline', output);


    pause();
});

Scenario('Test case nr 2', I => {

    I.amOnPage('https://www.sogeti.com');
    I.click('#CookieConsent .buttons button.acceptCookie');


    I.moveCursorTo("#header > div.desktop_wrapper > nav > ul > li.has-children.level2 > div.wrapper > span");
    I.see('Automation', '#header');

    I.click('.level1 a[href="https://www.sogeti.com/services/automation/"]');
    //Name
    I.fillField('.row-0 .FormTextbox__Input', 'qwewqewq');
    //Surname
    I.fillField('.row-1 .FormTextbox__Input', 'qwewqewq');
    //email
    I.fillField('.row-2 .FormTextbox__Input', 'qwewqewq@gmail.com');
    //phon number
    I.fillField('.row-3 .FormTextbox__Input', '123213123');
    //Country
    I.selectOption('.row-4 .Form__Element select[name="__field_132596"]', 'Argentina');
    //Message
    I.fillField('.row-5 .FormTextbox__Input', '123213123 qewqweqeq');
    //agree for terms
    I.checkOption('I agree');
    I.seeCheckboxIsChecked('I agree');
    pause();

    // Submit button
    I.click('.row-9 .submitbuttonelementblock');
    I.see('Thank you for contacting us.', '.Form__Status__Message');

    pause();
});

Scenario('Test case nr 3', I => {

    var dictionary = {
        BELGIUM: "https://www.sogeti.be/",
        FINLAND: "https://www.sogeti.fi/",
        FRANCE: "https://www.fr.sogeti.com/",
        GERMANY: "https://www.sogeti.de/",
        IRELAND: "https://www.sogeti.ie/",
        LUXEMBOURG: "https://www.sogeti.lu",
        NETHERLANDS: "https://www.sogeti.nl/",
        NORWAY: "https://www.sogeti.no/",
        SPAIN: "https://www.sogeti.es/",
        SWEDEN: "https://www.sogeti.se/",
        UK: "https://www.uk.sogeti.com/",
        USA: "https://www.us.sogeti.com/"
    }

    I.amOnPage('https://www.sogeti.com');
    I.click('#CookieConsent .buttons button.acceptCookie');


    I.click('.navbar-global .sprite-global-arrowdown');
    for (var key in dictionary) {
        I.see(key, '.country-list');
        I.click('.country-list a[href="' + dictionary[key] + '"]');
        I.wait(3);
        I.switchToNextTab();
        if (key == "NETHERLANDS") {
            I.click('.page-navigation .eu-cookie-compliance-message .eu-cookie-compliance-secondary-button.btn-success');
        } else {
            I.click('#CookieConsent .buttons button.acceptCookie');
        }
        I.seeInCurrentUrl(dictionary[key]);
        I.closeCurrentTab();
    }




    pause();
});
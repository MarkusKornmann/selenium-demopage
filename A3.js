/*Aufgabe 3: Textfeld ausfüllen (20 Punkte)
Beschreibung:

Die Funktion soll ein Textfeld finden und den Text Automatisierter Test eingeben.
Ergänze den XPath, um das Textfeld mit der ID myTextInput zu finden.
*/

const { Builder, By } = require("selenium-webdriver");

(async function selectTextField() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 3: Textfeld auswählen");

        const textField = await driver.findElement(By.xpath("//input[@id='myTextInput']")); // Ergänze den XPath

        await textField.sendKeys("Automatisierter Test");

        console.log("Textfeld mit Text gefüllt.");

    } finally {

        await driver.quit();

    }

})();
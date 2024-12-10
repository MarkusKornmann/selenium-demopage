/*
Aufgabe 7: Progress Bar Label finden
Beschreibung:

Die Funktion soll das Label für die Progress Bar finden und den angezeigten Text ausgeben.
Ergänze den XPath, um das Label mit der ID progressLabel zu finden.
*/

const { Builder, By } = require("selenium-webdriver");

(async function findProgressBarLabel() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 7: Progress Bar");

        const progressBarLabel = await driver.findElement(By.xpath("//label[@id='progressLabel']")); // Ergänze den XPath

        console.log("Label gefunden:", await progressBarLabel.getText());

    } finally {

        await driver.quit();

    }

})();
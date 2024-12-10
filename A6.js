/*
Aufgabe 6: Slider steuern
Beschreibung:

Die Funktion soll den Slider auf den Wert 75 setzen.
Ergänze den XPath, um den Slider zu finden.
*/

const { Builder, By } = require("selenium-webdriver");

(async function controlSlider() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 6: Slider steuern");

        const slider = await driver.findElement(By.xpath("//input[@id='mySlider']")); // Ergänze den XPath

        await driver.executeScript("arguments[0].value = 75;", slider);

        console.log("Slider auf Wert 75 gesetzt.");

    } finally {

        await driver.quit();

    }

})();
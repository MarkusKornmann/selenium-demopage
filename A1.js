//Aufgabe 1: Hauptüberschrift finden (20 Punkte)
//Beschreibung:

//Die Funktion soll die Hauptüberschrift (<h1>) der Seite mit dem Text Demo Page finden.
//Ergänze den XPath, um diese Überschrift anzusteuern.

const { Builder, By } = require("selenium-webdriver");

(async function findHeader() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 1: Hauptüberschrift finden");

        const header = await driver.findElement(By.xpath("//h1[text()='Demo Page']")); // Ergänze den XPath

        console.log("Gefundene Überschrift:", await header.getText());

    } finally {

        await driver.quit();

    }

})();






/* const { Builder } = require('selenium-webdriver');

(async function findTitle() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://seleniumbase.io/demo_page');

        const title = await driver.executeScript('return document.title;');
        console.log('Titel der Seite:', title);
    } finally {
        await driver.quit();
    }
})(); 
*/
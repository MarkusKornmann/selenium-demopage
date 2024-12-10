/*
Aufgabe 8: Link finden
Beschreibung:

Die Funktion soll einen Link mit dem Text SeleniumBase on GitHub finden und die URL ausgeben.
Ergänze den XPath, um den Link anzusteuern.


const { Builder, By } = require("selenium-webdriver");

(async function findLink() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 8: Links finden");

        const link = await driver.findElement(By.xpath("//tr[td[text()='URL Link:']]/td[4]/a[text()='SeleniumBase on GitHub']")); // XPath ist korrekt
        const link = await driver.findElement(By.xpath("//a[text()='SeleniumBase on GitHub']")); // XPath ist korrekt
        console.log("Gefundener Link:", await link.getAttribute("href"));
    } finally {
        await driver.quit();
    }
})(); */

// immer ein Fehler
// NoSuchElementError: no such element: Unable to locate element: 
// {"method":"xpath","selector":"//tr[td[text()='URL Link:']]/td[4]/a[text()='SeleniumBase on GitHub']"} 

const { Builder, By } = require("selenium-webdriver");

(async function findLink() {
    let driver = await new Builder().forBrowser("chrome").build();

    try {
        await driver.get("https://seleniumbase.io/demo_page");
        console.log("Aufgabe 8: Links finden");

        const link = await driver.findElement(By.xpath("//a[@href='https://github.com/seleniumbase/SeleniumBase']"));

        console.log("Gefundener Link:", await link.getAttribute("href"));
    } finally {
        await driver.quit();
    }
})();

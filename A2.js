//Aufgabe 2: Dropdown-Option auswählen (20 Punkte)
//Beschreibung:

//Die Funktion soll die Maus über das Dropdown-Element bewegen und die Option Link One auswählen.
//Ergänze den XPath, um den Dropdown-Button und die Option anzusteuern.

const { Builder, By } = require("selenium-webdriver");

(async function selectDropdownOption() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("https://seleniumbase.io/demo_page");

        console.log("Aufgabe 2: Dropdown-Menü");

        const dropdownButton = await driver.findElement(By.xpath("//div[@id='myDropdown']")); // Ergänze den XPath

        const actions = driver.actions({ async: true });

        await actions.move({ origin: dropdownButton }).perform();

        const dropdownOption = await driver.findElement(By.xpath("//a[@id='dropOption1'] ")); // Ergänze den XPath

        await dropdownOption.click();

        console.log("Dropdown-Option 'Link One' ausgewählt.");

    } finally {

        await driver.quit();

    }

})();
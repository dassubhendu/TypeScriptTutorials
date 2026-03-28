/*
Multiple inheritance is not possible
Multiple inheritance can be achived through 'Interface'
All the methods inside an interface are by-default abstract methods
Method should not have definition
Variables can not be initialized
Object can not be created of an interface
If we implement an intrface in a class, we must need to define functions belong to that interface.
*/

interface WebDriver{

    text: string;
    getTitle(): string;
    navigate(): void;

}

interface RemoteWebDriver{
    launchBrowser(): void;
}

class ChromeDriver implements WebDriver, RemoteWebDriver{
    launchBrowser(): void {
        console.log("Launching chrome")
    }
    text: string = "Chrome";
    getTitle(): string {
        return "Getting the title in chrome";
    }
    navigate(): void {
        console.log("Navigating in chrome")
    }

}

class FirefoxDriver implements WebDriver, RemoteWebDriver{
    launchBrowser(): void {
        console.log("Launching firefox")
    }
    text: string = "Firefox";
    getTitle(): string {
        return "Getting the title in firefox";
    }
    navigate(): void {
        console.log("Navigating in firefox")
    }

}

const chrome = new ChromeDriver();
console.log(chrome.getTitle());
chrome.navigate();
chrome.launchBrowser();

const firefox = new FirefoxDriver();
console.log(firefox.getTitle());
firefox.navigate();
firefox.launchBrowser();


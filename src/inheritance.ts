// oops - inheritance
// Multiple inheritance is not allowed
class WebDriver{

    url: string;
    
    constructor(url: string){
        this.url = url;
    }

    // If we make the below method private it only can be accessed inside this class
    // If we make the below method protectd then it can be accessed inside the class and it's subclasses
    navigate(): void{
        console.log(`Navigate to: ${this.url}`);
    }

}


class ChromeDriver extends WebDriver{

    launchBrowser(): void{
        console.log("Launching chrome browser");
    }

}

class FirefoxDriver extends WebDriver{

    launchBrowser(): void{
        console.log("Launching firefox browser");
    }

}

const chrome = new ChromeDriver("http://way2automation.com");
chrome.launchBrowser();
chrome.navigate();

const firefox = new FirefoxDriver("http://google.com");
firefox.launchBrowser();
firefox.navigate();
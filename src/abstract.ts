/*
If a class is marked as Abstract then that can not be inistansiate, objct can not be created 
of that class

If a method is marked as Abstract then all child classes must define that method

Abstract method can't have definition

*/

abstract class WebDriver{

    url: string;
    
    constructor(url: string){
        this.url = url;
    }

    // If we make the below method private it only can be accessed inside this class
    // If we make the below method protectd then it can be accessed inside the class and it's subclasses
    navigate(): void{
        console.log(`Navigate to: ${this.url}`);
    }

    abstract launchBrowser(): void;

}


class ChromeDriver extends WebDriver{
    launchBrowser(): void {
        console.log("Launching chrome browser");
    }

    // launchBrowser(): void{
    //     console.log("Launching chrome browser");
    // }

}

class FirefoxDriver extends WebDriver{
    launchBrowser(): void {
        console.log("Launching firefox browser");
    }

    // launchBrowser(): void{
    //     console.log("Launching firefox browser");
    // }

}
// No point of creating object of base class as no browser launching function is there.
// So we can make this base class Abstract
// Now the below line showing error as the class is absract and object can't be created.
//const webDriver = new WebDriver("http://google.com");

const chrome = new ChromeDriver("http://way2automation.com");
chrome.launchBrowser();
chrome.navigate();

const firefox = new FirefoxDriver("http://google.com");
firefox.launchBrowser();
firefox.navigate();
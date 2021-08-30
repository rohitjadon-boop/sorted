// const puppeteer=require("puppeteer");

// puppeteer.launch({
//     headless: false,
//     defaultViewport: null,
//     args: ["--start-maximized", "--disable-notifications"],
//     slowMo: 1000
// }).then(function cb(browserPage) {
//   browserPage.newPage().then((function cb(pageObj) {
//       pageObj.goto("http://www.google.co.in")
//       .then(function cb() {
//           console.log("Google Opened");
//       })
//   }))
// })


// let puppeteerPromise=puppeteer.launch({
//     headless: false,
//     defaultViewport: null, 
//     args: ["--start-maximized", "--disable-notifications"],
//     slowMo: 1000
// });

// let browserPromise=puppeteerPromise.then((browserObj) => {
//     browserObj.newPage()
// });

// let pagePromise=browserPromise.then((pageObj) => {
//     pageObj.goto("https://www.google.com/")
//     .then(() => {
//         console.log("Google Opened");
//     })
// });

// let promise=pagePromise.then(() => {
//     console.log("Google Tab Openend");
// });

// puppeteer.launch({
//     headless: false,
//     defaultViewport: null,
//     args: ["--start-maximized"],
// }).then((browserObj) => {
//     browserObj.newPage().
//     then((pageObj) => {
//         pageObj.goto("https://www.google.com")
//         .then(() => {
//             console.log("Opened");
//         })
//     })
// })

// let page;
// let browser, rTab;

// let puppeteerPromise=puppeteer.launch({
//     headless: false,
//     defaultViewport: null,
//     args: ["--start-maximized"],
// });

// puppeteerPromise.then((browserObj) => {
//     browser=browserObj;
//     let pagePromise=browserObj.newPage();
//     return pagePromise;
// })
// .then((pageObj) => {
//     page=pageObj;
//     let lastPromise=pageObj.goto("https://www.google.com");
//     return lastPromise;
// })
// .then(() => {
//     console.log("Google Opened");
//     let newPromise=page.type("input[title='Search']","pepcoding");
//     return newPromise;
// })
// .then(() => {
//     page.keyboard.press('Enter');
// }).then(function () {
//     let selectorPromise=page.waitForSelector(".LC20lb.DKV0Md", {visible: true});
//     return selectorPromise;
// }).then(() => {
//     let anotherPagePromise=page.click(".LC20lb.DKV0Md");
//     console.log("Opening page");
//     return anotherPagePromise;
// })
// .then(() => {
//     let nPromise=page.waitForSelector("#lp_modal_close", {visible: true});
//     return nPromise;
// })
// .then(() => {
//     let cutPromise=page.click("#lp_modal_close", {visible: true});
//     console.log("Cuttig the Edge");
//     return cutPromise;
// })
// .then(() => {
//     let pageArraySelector=page.$$(".site-nav-li");
//     return pageArraySelector;
// })
// .then((arr) => {
//     let resourcePromise=arr[6].click();
//     return resourcePromise;
// })
// // .then(() => {
// //     let afterWaiting=page.waitFor();
// //     return afterWaiting;
// // })
// .then(() => {
//   let allPages=browser.pages();
//   console.log("New Pages");
//   return allPages;
// })
// .then((arrayOfPages) => {
//     rTab=arrayOfPages[arrayOfPages.length-1];
//    let rTabPromise= rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]', {visible: true});
//    console.log("Selector");
//   return rTabPromise;
// })
// .then(() => {
//     let finalTab=rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
//     return finalTab;
// })
// .then(() => {
//     console.log("Finally Opened");
// })

// console.log("After");


const puppeteer=require("puppeteer");
let page;
let rTab;
let browser;

puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo:200
})
.then((browserObj) => {
    let newTab=browserObj.newPage();
    browser=browserObj;
    return newTab;
})
.then((pageObj) => {
    let googlePromise=pageObj.goto("https://www.google.com/");
    page=pageObj;
    return googlePromise;
})
.then(() => {
    let typePromise=page.type(".a4bIc>input", "pepcoding");
    return typePromise;
})
.then(() => {
    let pressEnterPromise=page.keyboard.press('Enter', ".a4bIc>input");
    return pressEnterPromise;
})
.then(() => {
    return page.waitForSelector(".LC20lb.DKV0Md", {visible: true});
})
.then(() => {
    return page.click(".LC20lb.DKV0Md");
})
.then(() => {
    return page.waitForSelector("#lp_modal_close", {visible: true});
})
.then(() => {
    return page.click("#lp_modal_close");
})
.then(() => {
    return page.$$(".site-nav-li");
})
.then((arr) => {
  return arr[6].click();
})
.then(() => {
  return browser.pages();
})
.then((arr) => {
    rTab=arr[arr.length-1];
    return rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]', {visible: true});
})
.then(() => {
    return rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
})
.then(() => {
    console.log("Level 1 Displayed");
})
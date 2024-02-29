// const { chromium } = require("playwright-chromium");
// const { expect, assert } = require('chai');
// const { func } = require('./file.js');
import { chromium } from 'playwright';
import { expect } from 'chai';


const url = 'http://127.0.0.1:5500/index.html';
// const url = 'http://localhost:3000/Advanced JS/Applications JS/05-Architecture %26 Testing/Lab/01.Accordion':

let browser;
let page;

describe('e2e tests', async function () {

    this.timeout(30000);

    before(async () => {
        browser = await chromium.launch({ headless: false });
        page = await browser.newPage();
        await page.goto(url);
        await page.waitForLoadState('networkidle');
    });
    after(async () => { await browser.close(); });

    it('loads all articles', async () => {
        await page.waitForSelector('.accordion');
        let articles = await page.$$('.accordion');

        console.log(articles.length);

        expect(articles.length).to.equal(4);
    })

    it('loads article content', async () => {
        await page.waitForSelector('.button'); 

        const firstButton = await page.$('.button:first-of-type');
        await firstButton.click();

        await page.waitForSelector('.accordion');

        // await page.waitForSelector('div.extra', { state: 'visible' });

        const vis = await page.isVisible('.accordion p');
        expect(vis).to.be.true;

        // // Check the display style of the corresponding `div.extra`
        // const displayStyle = await page.evaluate(el => getComputedStyle(el).display, extraDiv);
        // expect(displayStyle).to.equal('block');
        // more complex approach suggested by chatgpt, but also works. 

    });

    it('toggles button text', async () => {
        await page.waitForSelector('.button'); 
        await page.waitForSelector('.accordion');
    
        await page.click('text=More');
        await page.waitForSelector('.accordion p', { state: 'visible' });
        const vis = await page.isVisible('.accordion p');
        expect(vis).to.be.true;
        let firstButton = await page.$('.button:first-of-type');
        let buttonText = await firstButton.textContent();
        expect(buttonText).to.include('Less');
    
        await firstButton.click();
        await page.waitForSelector('.accordion p', { state: 'hidden' });
        const vis2 = await page.isVisible('.accordion p');
        expect(vis2).to.be.false;
        firstButton = await page.$('.button:first-of-type');
        buttonText = await firstButton.textContent();
        expect(buttonText).to.include('More');
    });
    
    
    

})


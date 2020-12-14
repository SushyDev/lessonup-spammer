const puppeteer = require('puppeteer');

var botCode = '053631';
var botName = '';
var botAmount = 100;

var count = 0;
setInterval(async () => {
    count++;
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto(`https://lessonup.app/?lang=nl&code=${botCode}`);
    try {
        await page.waitForSelector('#player-name');
        await page.type('#player-name', `${botName}-${count}`, {delay: 20});
        await (await page.$('#player-name')).press('Enter');
        console.log(`${count} bots | ${botName}-${count} added!`);
    } catch (e) {console.log(`Bot ${i} failed`)}
    await browser.close();
    if (count === botAmount) process.exit();
}, 1000);

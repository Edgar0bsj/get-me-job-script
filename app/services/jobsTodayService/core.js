const puppeteer = require('puppeteer');
const rioVagas = require('./rioVagas');

async function jobsTodayCore(urls)
{
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const data = [];

    let listJobs = await rioVagas(page, urls);
    data.push(...listJobs);

    await browser.close();
    return data;
}

module.exports = jobsTodayCore;
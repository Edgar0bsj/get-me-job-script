async function rioVagas(page, url) 
{
    const titles = [];
    const dates = [];
    const links = [];
    const _pags = [];

    // titles
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    for (let i = 2; i <= 10 ; i++)
        {
            await page.waitForSelector("header > h2 > a"); 
            _pags[i] = await page.$$eval("header > h2 > a", spans =>
            spans.map(span => span.textContent.trim())
            );
        
            titles.push(..._pags[i])

            await page.waitForSelector(`nav > div.wp-pagenavi`); 
            await page.goto(url+`page/${i}/`, { waitUntil: 'domcontentloaded' });
        };
    
    // Dates
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    for (let i = 2; i <= 10 ; i++)
        {
            await page.waitForSelector("time"); 
            _pags[i] = await page.$$eval("time", spans =>
            spans.map(span => span.textContent.trim())
            );
        
            dates.push(..._pags[i])

            await page.waitForSelector(`nav > div.wp-pagenavi`); 
            await page.goto(url+`page/${i}/`, { waitUntil: 'domcontentloaded' });
        };

    // Hrefs
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    for (let i = 2; i <= 10 ; i++)
        {
            await page.waitForSelector("header > h2 > a"); 
            _pags[i] = await page.$$eval("header > h2 > a", spans =>
            spans.map(n => n.href)
            );
        
            links.push(..._pags[i])

            await page.waitForSelector(`nav > div.wp-pagenavi`); 
            await page.goto(url+`page/${i}/`, { waitUntil: 'domcontentloaded' });
        };



    // Joins the two arrays into one array of objects
    const jobs = titles.map((el, index) => ({
        title: el,
        date: dates[index],
        link: links[index]
    }));

    return jobs;

}

module.exports = rioVagas;
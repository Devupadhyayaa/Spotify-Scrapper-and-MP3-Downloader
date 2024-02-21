const puppeteer = require( 'puppeteer');
var tracknames;
var urls=[];
const url = "https://accounts.spotify.com/en/login?continue=https%3A%2F%2Fopen.spotify.com%2F";

async function main(user_name,pass_word) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);

    // Wait for the login form to be present
    await page.waitForSelector('#login-username');

    // Enter login credentials
    await page.type('#login-username', user_name);
    await page.type('#login-password', pass_word);

    // Click the login button and wait for navigation
    await Promise.all([
        page.click('#login-button'),
        page.waitForNavigation({ waitUntil: "networkidle0" })
    ]);

    const page2 = await browser.newPage();
    await page2.goto("https://open.spotify.com/collection/tracks");
    await page2.setViewport({ width: 2000, height: 1800});
    await page2.waitForSelector('.iCQtmPqY0QvkumAOuCjr .Text__TextElement-sc-if376j-0[data-encore-id="text"]', { visible: true });
    const tracks = await page2.evaluate(async () => {
        const trackElements = document.querySelectorAll('.iCQtmPqY0QvkumAOuCjr');
        return Array.from(trackElements).map(trackElement => {
            try{
                const trackName = trackElement.querySelector('.Text__TextElement-sc-if376j-0[data-encore-id="text"]').innerText;
            
                const artistElements = trackElement.querySelectorAll('.Text__TextElement-sc-if376j-0.gYdBJW[data-encore-id="text"] a');
                const artists = Array.from(artistElements).map(artistElement => artistElement.innerText);
            
                return { trackName:`${trackName} by ${artists}`.trim() };
            }
            catch(e){
                console.error(e);
            }
        });
    });
    tracknames=tracks;
    const page3 = await browser.newPage();
    try {
        // await page3.goto('https://www.youtube.com/');
        for(const e of tracknames){
            await page3.goto('https://www.youtube.com/');
    
            // Wait for the search box to be available
            await page3.waitForSelector('ytd-searchbox input[name="search_query"]');
        
            // Type the search query into the input field
            await page3.type('ytd-searchbox input[name="search_query"]', e.trackName);
        
            // Click the search button
            await Promise.all([
                page3.click('#search-icon-legacy'),
                page3.waitForNavigation({ waitUntil: "networkidle0" }),
            ]);
    
            // await new Promise (r=>setTimeout(r,10000));
            await page3.waitForSelector('.style-scope.ytd-video-renderer #video-title');
            const link = await page3.$eval('.style-scope.ytd-video-renderer #video-title', (videoTitle) => {
                return videoTitle.getAttribute('href');
            });
              
            // console.log('Link inside the video title:', link);
            urls.push(`https://www.youtube.com${link}`);
        }
          
    } 
    catch (error) {
        console.error('Error during search:', error);
    }
    await browser.close();
    return {tracknames,urls};
}
module.exports = main;
// export {main};



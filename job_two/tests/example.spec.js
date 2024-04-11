// @ts-check
const { test, expect } = require('@playwright/test');


test('screenshot_count', async ({ page }) => {
  await page.goto('https://www.avito.ru/avito-care/eco-impact');
  await page.waitForLoadState('load');
  await page.waitForSelector('.styles-page-Hca29');
  const imgHeight = 230
  const imgWidth = 230



await page.screenshot({ 
    path: `./output/example.png`,
    fullPage: true,
     clip:{ x: 790 , y:903, width:imgWidth, height:imgHeight}
});
  
await page.screenshot({ 
  path: `./output/example2.png`,
  fullPage: true,
   clip:{ x: 540 , y:1153, width:imgWidth, height:imgHeight}
});

await page.screenshot({ 
  path: `./output/example3.png`,
  fullPage: true,
   clip:{ x: 1039 , y:1151, width:imgWidth, height:imgHeight}
});

});

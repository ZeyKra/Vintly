import puppeteer from 'puppeteer';
import VintedItem from '@/interfaces/VintedItem';

async function getVintedItems(query: string): Promise<Array<VintedItem>> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = `https://www.vinted.be/catalog?search_text=${query}`;

    await page.goto(url, { waitUntil: 'networkidle2' });

    const items = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('.feed-grid__item')).map(item => {
            
            const member = item.querySelector('p.web_ui__Text__text.web_ui__Text__caption.web_ui__Text__left')?.textContent?.trim();
            const title = item.querySelector('p.web_ui__Text__text.web_ui__Text__caption.web_ui__Text__left.web_ui__Text__truncated')?.textContent?.trim();
            const price = item.querySelector('p.web_ui__Text__text.web_ui__Text__caption.web_ui__Text__left.web_ui__Text__muted')?.textContent?.trim();
            const link = item.querySelector('a.new-item-box__overlay.new-item-box__overlay--clickable')?.href; 
            
            let vinted_item: VintedItem = { member: member, tite: title, price: price, link: link }
            return vinted_item;
        });
    });
    await browser.close();
    return items;
}

export default { getVintedItems };
// Example function call
//getVintedItems('animal crossing wild world').then(items => console.log(items)).catch(console.error);
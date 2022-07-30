import VintedMonitor from "vinted-monitor";

const Monitor = new VintedMonitor();

// Now, watch for 1 or more Vinted URL
var link = "https://www.vinted.fr/vetements?search_text=casquette&brand_id[]=362&order=newest_first&color_id[]=12"
var result = []
Monitor.watch(link);

// Finally, create a function that will be executed
// when a new item is detected
Monitor.onItemFound(item => {

    result.push(item)

    console.log("===================================")

    console.log("URL : ", item.info.searchUrl);
    console.log("Vendeur: ", item.user.login);
    console.log("Nom : ", item.info.title);
    console.log("Prix : ", item.info.price, "€");
    console.log("Date : ", item.info.date.toString());
    console.log("Full Info : ", item.info)

    console.log("===================================")
})

// You can stop watching a Vinted URL
Monitor.unWatch(link);
/*

const vinted = require('vinted-api');

vinted.search('https://www.vinted.fr/vetements?search_text=&brand_id[]=232&color_id[]=9&price_to=20.0&currency=EUR&search_id=5541370581&order=newest_first').then((posts) => {
    console.log(posts); // all the posts that match this query
});

*/


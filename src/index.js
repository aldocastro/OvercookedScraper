const scrapeOvercooked2 = require('./scraper')
const notify = require('./notifier')

const scrapeIt = async () => {
  const priceGoal = 15
  const { title, url, price} = await scrapeOvercooked2()
  if (parseFloat(price) <= priceGoal) {
    console.info({url, title, price})
    notify(`${title}`, `🟢 now for ${price}`, 'Time to buy it! 🤑💸💸', url, true)
  } else {
    console.info({title, price})
    notify(`${title}`, `🔴 for ${price}`, 'Still overpriced 🐢🙄')
  }
}

scrapeIt()

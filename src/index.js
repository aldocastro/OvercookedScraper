const scrapeOvercooked2 = require('./scraper')

const scrapeIt = async () => {
  const priceGoal = 15
  const { title, url, price} = await scrapeOvercooked2()
  if (parseFloat(price) <= priceGoal) {
    console.info('🟢 Time to buy!', {url, title, price})
  } else {
    console.info('🔴 Still overpriced', {title, price})
  }
}

scrapeIt()

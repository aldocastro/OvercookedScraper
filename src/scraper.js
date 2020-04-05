const puppeteer = require('puppeteer')

const extractElementValue = async (page, xpath, property) => {
  const [element] = await page.$x(xpath)
  const value = await element.getProperty(property)
  return value.jsonValue()
}

const scrapeOvercooked2 = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const url = 'https://store.steampowered.com/app/728880/Overcooked_2/'
  await page.goto(url)
  const title = await extractElementValue(page, '/html/body/div[1]/div[7]/div[4]/div[1]/div[2]/div[2]/div[2]/div/div[3]', 'textContent')
  const price = await extractElementValue(page, '//*[@id="game_area_purchase"]/div[1]/div/div[2]/div/div[1]', 'textContent')
  const imageUrl = await extractElementValue(page, '//*[@id="game_highlights"]/div[1]/div/div[1]/img', 'src')
  await browser.close()
  return { title, price: price.trim(), imageUrl, url }
}

module.exports = scrapeOvercooked2

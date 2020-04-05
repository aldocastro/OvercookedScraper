const notifier = require('node-notifier')
const path = require('path')
const notificationCenter = new notifier.NotificationCenter()

const notify = (title, subtitle = '', message, url = null, isPositive = false,) => {
  notificationCenter.notify({
    title: title,
    subtitle: subtitle,
    message: message,
    wait: isPositive,
    url: url,
    contentImage: path.join(__dirname, '../media/icon.png'),
    sound: isPositive ? 'ding.mp3' : 'Tink'
  })
}

module.exports = notify
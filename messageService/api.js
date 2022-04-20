const messages = require('./proto/message_pb')
const { Telegraf } = require('telegraf')

module.exports = class API {
  sendMessage = async (call, callback) => {
    const bot = new Telegraf('5266505157:AAEDOECDbigJL8dIIJNCjAP-SXN4ujNCQTE')

    await bot.telegram.sendMessage('@udevs_task_group', call.request.getText())

    const resp = new messages.SendMessageResponse()
    resp.setMessage('Messages has been sent successfully')
    callback(null, resp)
  }
}

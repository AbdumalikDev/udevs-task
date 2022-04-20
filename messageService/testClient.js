const messages = require('./proto/message_pb')
const services = require('./proto/message_grpc_pb')
const grpc = require('@grpc/grpc-js')

function main() {
  const client = new services.MessageSvcClient(
    'localhost:3000',
    grpc.credentials.createInsecure()
  )

  const sendMessageRequest = new messages.SendMessageRequest()
  sendMessageRequest.setText('This is a sample text')
  sendMessageRequest.setPriority('high')

  client.sendMessage(sendMessageRequest, (err, response) => {
    console.log(response)
  })
}

main()

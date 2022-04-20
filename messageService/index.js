const grpc = require('@grpc/grpc-js')
const services = require('./proto/message_grpc_pb')
const API = require('./api')

// Mongo Connection
const api = new API()

async function main() {
  const server = new grpc.Server()

  server.addService(services.MessageSvcService, {
    sendMessage: api.sendMessage,
  })

  server.bindAsync(
    '0.0.0.0:3000',
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start()
      console.log('Server running at 3000')
    }
  )
}

main()

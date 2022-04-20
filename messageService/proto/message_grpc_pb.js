// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var message_pb = require('./message_pb.js');

function serialize_demo_message_SendMessageRequest(arg) {
  if (!(arg instanceof message_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type demo_message.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_message_SendMessageRequest(buffer_arg) {
  return message_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_demo_message_SendMessageResponse(arg) {
  if (!(arg instanceof message_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type demo_message.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_demo_message_SendMessageResponse(buffer_arg) {
  return message_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageSvcService = exports.MessageSvcService = {
  sendMessage: {
    path: '/demo_message.MessageSvc/sendMessage',
    requestStream: false,
    responseStream: false,
    requestType: message_pb.SendMessageRequest,
    responseType: message_pb.SendMessageResponse,
    requestSerialize: serialize_demo_message_SendMessageRequest,
    requestDeserialize: deserialize_demo_message_SendMessageRequest,
    responseSerialize: serialize_demo_message_SendMessageResponse,
    responseDeserialize: deserialize_demo_message_SendMessageResponse,
  },
};

exports.MessageSvcClient = grpc.makeGenericClientConstructor(MessageSvcService);

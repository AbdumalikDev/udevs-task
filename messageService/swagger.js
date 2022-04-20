export default {
  openapi: '3.0.1',
  info: {
    title: 'Udevs Task',
    description: 'Udevs Task API Documentation',
    version: '1.0.0',
    contact: {
      name: 'Abdumalik',
    },
  },
  components: {
    schemas: {
      'send-message': {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            default: false,
          },
          messsage: {
            type: 'string',
          },
        },
      },
    },
    examples: {
      'send-message-success': {
        value: {
          success: true,
          message: 'Message has been successfully sent to group',
        },
      },
      'send-message-fail': {
        value: {
          success: false,
          message: 'Something went very wrong',
        },
      },
    },
    responses: {
      'send-message-success': {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/send-message',
            },
            examples: {
              'send-message': {
                $ref: '#/components/examples/send-message-success',
              },
            },
          },
        },
      },
      'send-message-fail': {
        description: 'Fail',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/send-message',
            },
            examples: {
              'send-message': {
                $ref: '#/components/examples/send-message-fail',
              },
            },
          },
        },
      },
    },
  },
  tags: ['Send Message'],
  apis: ['**/*Route.js'],
  paths: {
    '/post': {
      post: {
        summary: 'Send Message',
        tags: ['Send Message'],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  messages: [
                    {
                      text: {
                        type: 'string',
                      },
                      priority: {
                        type: 'string',
                      },
                    },
                  ],
                },
                example: {
                  messages: [
                    {
                      text: 'Hello this is a test priority low 1',
                      priority: 'low',
                    },
                    {
                      text: 'Hello this is a test priority low 2',
                      priority: 'low',
                    },
                    {
                      text: 'Hello this is a test priority medium 1',
                      priority: 'medium',
                    },
                    {
                      text: 'Hello this is a test priority high 1',
                      priority: 'high',
                    },
                    {
                      text: 'Hello this is a test priority high 2',
                      priority: 'high',
                    },
                  ],
                },
              },
            },
          },
        },
        responses: {
          '200': {
            $ref: '#/components/responses/send-message-success',
          },
          '500': {
            $ref: '#/components/responses/send-message-fail',
          },
        },
      },
    },
  },
}

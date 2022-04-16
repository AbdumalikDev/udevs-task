import express, { Request, Response } from 'express'
import rateLimit from 'express-rate-limit'
import { Telegraf } from 'telegraf'
const bot = new Telegraf('5266505157:AAEDOECDbigJL8dIIJNCjAP-SXN4ujNCQTE')
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './swagger'
import Joi from 'joi'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

const apiRequestLimiter = rateLimit({
  windowMs: 5 * 1000, // 5 seconds
  max: 1,
})

app.get('/status', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'Ok',
  })
})

app.post('/post', apiRequestLimiter, async (req: Request, res: Response) => {
  try {
    Joi.object({
      text: Joi.string().required(),
      priority: Joi.string().valid('low', 'medium', 'high').required(),
    }).validate(req.body)

    await bot.telegram.sendMessage('@udevs_task_group', req.body.text)
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Something went very wrong',
    })
  }

  res.status(200).json({
    success: true,
    message: 'Message has been successfully sent to group',
  })
})

app.listen('3000', () => console.log('Server started in port 3000'))

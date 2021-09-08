import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      peopleSigned: Number.parseInt(process.env.PEOPLE_SIGNED)
    }),
  }
}

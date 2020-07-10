import { NowRequest, NowResponse } from '@vercel/node'
import fetch from "node-fetch"

require('dotenv').config()
const {
  API_URL,
  CLIENT_ID,
  CLIENT_SECRET
} = process.env;
export const getApi=async()=> {
  const res= await fetch(`${API_URL}/tokens/xapp_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`, {
    method: "POST"
  })
  const data=await res.json()
  return data;
}
getApi().then(console.log)
export default async (_request: NowRequest, response: NowResponse) => {
  try {
    const {token,expires_at} = await getApi()
    response.status(200).send({token,expires_at})
  } catch (error) {
    response.status(400).send("Error")
  }
}